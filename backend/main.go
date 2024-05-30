package main

import (
	"context"
	"github.com/OleksandrKochenko/tryzub/backend/config"
	"github.com/OleksandrKochenko/tryzub/backend/handler"
	"github.com/OleksandrKochenko/tryzub/backend/middleware"
	"github.com/OleksandrKochenko/tryzub/backend/repos/sqlx"
	"github.com/OleksandrKochenko/tryzub/backend/usecases"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/cors"
	_ "github.com/lib/pq"
	"net/http"
	"os"
	"os/signal"
	"syscall"
)

const cfgPath = "./config.json"

func main() {
	cfg := config.Init(cfgPath)

	db := cfg.DB()
	log := cfg.Log()

	ctx, cancelF := context.WithCancel(context.Background())

	eventUseCase := usecases.NewEventUseCase(sqlx.NewEventRepo(db))

	r := chi.NewRouter()
	r.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{"https://*", "http://*"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: false,
		MaxAge:           300,
	}))
	r.Use(middleware.Logger(log))

	h := handler.New(log, eventUseCase)

	r.Route("/api", func(r chi.Router) {
		r.Get("/events", h.GetEvent(ctx))
		r.Post("/events", h.CreateEvent(ctx))
		r.Delete("/events", h.DeleteEvent(ctx))
		r.Patch("/events", h.UpdateEvent(ctx))
	})

	srv := &http.Server{Addr: cfg.Port(), Handler: r}

	go srv.ListenAndServe()

	log.Infof("Server has been started on port %v", cfg.Port())

	exit := make(chan os.Signal)
	signal.Notify(exit, syscall.SIGINT, syscall.SIGTERM)

	<-exit

	log.Info("Gracefully shutdown...")

	if err := srv.Shutdown(ctx); err != nil {
		panic(err)
	}

	cancelF()

	log.Info("Shutdown")
}
