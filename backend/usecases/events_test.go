package usecases

import (
	"context"
	"github.com/OleksandrKochenko/tryzub/backend/config"
	"github.com/OleksandrKochenko/tryzub/backend/models"
	"github.com/OleksandrKochenko/tryzub/backend/repos/sqlx"
	_ "github.com/lib/pq"
	"log"
	"testing"
	"time"
)

var eventUseCase *EventUseCase

func init() {
	cfg := config.Init("../config.json")
	eventUseCase = NewEventUseCase(sqlx.NewEventRepo(cfg.DB()))
}

func TestEventUseCase(t *testing.T) {
	mockEvent := models.Event{
		TitleEN:       "Title in english",
		TitleUA:       "Title in ukrainian",
		DescriptionEN: "Description in english",
		DescriptionUA: "Description in ukrainian",
		Important:     true,
		CoverPhoto:    "/api/images/cover.png",
		EventPhoto:    "/api/images/event.png",
		GalleryPhotos: []string{"/api/images/gallery.png"},
		EventStartsAt: time.Now().Unix(),
		EventEndsAt:   time.Now().Unix() + 20,
	}

	ctx := context.Background()

	createdEvent, err := eventUseCase.Create(ctx, mockEvent)
	if err != nil {
		log.Fatal(err)
	}
	log.Println("Created event")

	events, err := eventUseCase.Select(ctx)
	if err != nil {
		log.Fatal(err)
	}
	log.Println("Selected events")

	for _, event := range events {
		if event.ID != createdEvent.ID {
			continue
		}
		log.Println("Found created event")

		if err := eventUseCase.UpdateTitle(ctx, "New title in english", models.EN); err != nil {
			log.Fatal(err)
		}
		log.Println("Updated title")

		updated, err := eventUseCase.SelectByID(ctx, event.ID)
		if err != nil {
			log.Fatal(err)
		}
		if updated.UpdatedAt.Compare(event.UpdatedAt) <= 0 {
			log.Fatal("Update trigger not working")
		}
		log.Println("Update trigger is working")

		if err := eventUseCase.DeleteByID(ctx, event.ID); err != nil {
			log.Fatal(err)
		}
		log.Println("Deleted")
	}
}
