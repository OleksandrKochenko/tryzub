package handler

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/OleksandrKochenko/tryzub/backend/models"
	"github.com/OleksandrKochenko/tryzub/backend/usecases"
	"github.com/pkg/errors"
	"github.com/sirupsen/logrus"
	"net/http"
	"strconv"
	"strings"
)

type Handler struct {
	cli          *http.Client
	log          *logrus.Logger
	eventUseCase *usecases.EventUseCase

	allowedColumns map[string]bool
}

func New(log *logrus.Logger, eventUseCase *usecases.EventUseCase) *Handler {
	return &Handler{
		cli:          &http.Client{},
		log:          log,
		eventUseCase: eventUseCase,
		allowedColumns: map[string]bool{
			"title_ua":       true,
			"title_en":       true,
			"description_ua": true,
			"description_en": true,
		},
	}
}

// TODO: rewrite
func (h *Handler) GetEvent(ctx context.Context) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		query := r.URL.Query()

		if query.Get("id") != "" {
			id, err := strconv.ParseInt(query.Get("id"), 10, 64)
			if err != nil {
				h.log.Error(errors.Wrap(err, "failed to parse id"))
				http.Error(w, errors.Wrap(err, "invalid id").Error(), http.StatusBadRequest)
				return
			}
			event, err := h.eventUseCase.SelectByID(ctx, id)
			if err != nil {
				h.log.Error(errors.Wrap(err, "failed to select by id"))
				http.Error(w, errors.Wrap(err, "internal error").Error(), http.StatusInternalServerError)
				return
			}

			var jsonData []byte
			switch strings.ToLower(query.Get("lang")) {
			case "ua":
				fmt.Println("lang ua")
				event.TitleEN = ""
				event.DescriptionEN = ""
				jsonData, err = json.Marshal(event)
				if err != nil {
					h.log.Error(errors.Wrap(err, "failed to marshal response"))
					http.Error(w, errors.Wrap(err, "internal error").Error(), http.StatusInternalServerError)
					return
				}
			case "en":
				event.TitleUA = ""
				event.DescriptionUA = ""
				jsonData, err = json.Marshal(event)
				if err != nil {
					h.log.Error(errors.Wrap(err, "failed to marshal response"))
					http.Error(w, errors.Wrap(err, "internal error").Error(), http.StatusInternalServerError)
					return
				}
			default:
				jsonData, err = json.Marshal(event)
				if err != nil {
					h.log.Error(errors.Wrap(err, "failed to marshal response"))
					http.Error(w, errors.Wrap(err, "internal error").Error(), http.StatusInternalServerError)
					return
				}
			}

			w.Header().Set("Content-Type", "application/json")
			w.Write(jsonData)
			return
		}

		if query.Get("startTimeGt") != "" || query.Get("startTimeLt") != "" {
			timeGt, _ := strconv.ParseInt(query.Get("startTimeGt"), 10, 64)
			timeLt, _ := strconv.ParseInt(query.Get("startTimeLt"), 10, 64)

			fmt.Println(timeGt, timeLt)
			if timeGt != 0 && timeLt != 0 {
				if timeGt > timeLt {
					h.log.Error(errors.New("timeGt is greater than timeLt"))
					http.Error(w, errors.New("timeGt is greater than timeLt").Error(), http.StatusBadRequest)
					return
				}
			}

			eventsDB, err := h.eventUseCase.SelectByStartTime(ctx, timeGt, timeLt)
			if err != nil {
				h.log.Error(errors.Wrap(err, "failed to select by time"))
				http.Error(w, errors.New("internal error").Error(), http.StatusInternalServerError)
				return
			}

			var events []models.Event
			for _, event := range eventsDB {
				switch strings.ToLower(query.Get("important")) {
				case "true":
					events = append(events, event)
					continue
				case "false":
					events = append(events, event)
					continue
				default:
					events = append(events, event)
				}
			}

			jsonData, err := json.Marshal(events)
			if err != nil {
				h.log.Error(errors.Wrap(err, "failed to marshal"))
				http.Error(w, errors.New("internal error").Error(), http.StatusInternalServerError)
				return
			}

			w.Header().Set("Content-Type", "application/json")
			w.Write(jsonData)
			return
		}

		if query.Get("endTimeGt") != "" || query.Get("endTimeLt") != "" {
			timeGt, _ := strconv.ParseInt(query.Get("endTimeGt"), 10, 64)
			timeLt, _ := strconv.ParseInt(query.Get("endTimeLt"), 10, 64)

			if timeGt != 0 && timeLt != 0 {
				if timeGt > timeLt {
					h.log.Error(errors.New("timeGt is greater than timeLt"))
					http.Error(w, errors.New("timeGt is greater than timeLt").Error(), http.StatusBadRequest)
					return
				}
			}

			eventsDB, err := h.eventUseCase.SelectByEndTime(ctx, timeGt, timeLt)
			if err != nil {
				h.log.Error(errors.Wrap(err, "failed to select by time"))
				http.Error(w, errors.New("internal error").Error(), http.StatusInternalServerError)
				return
			}

			var events []models.Event
			for _, event := range eventsDB {
				switch strings.ToLower(query.Get("important")) {
				case "true":
					events = append(events, event)
					continue
				case "false":
					events = append(events, event)
					continue
				default:
					events = append(events, event)
				}
			}

			jsonData, err := json.Marshal(events)
			if err != nil {
				h.log.Error(errors.Wrap(err, "failed to marshal"))
				http.Error(w, errors.New("internal error").Error(), http.StatusInternalServerError)
				return
			}

			w.Header().Set("Content-Type", "application/json")
			w.Write(jsonData)
			return
		}

		eventsDB, err := h.eventUseCase.Select(ctx)
		if err != nil {
			h.log.Error(errors.Wrap(err, "failed to select"))
			http.Error(w, errors.New("internal error").Error(), http.StatusInternalServerError)
			return
		}

		var events []models.Event
		for _, event := range eventsDB {
			switch strings.ToLower(query.Get("important")) {
			case "true":
				if event.Important {
					events = append(events, event)
					continue
				}
			case "false":
				if !event.Important {
					events = append(events, event)
					continue
				}
			default:
				fmt.Println("dsadas")
				events = append(events, event)
			}
		}

		jsonData, err := json.Marshal(events)
		if err != nil {
			h.log.Error(errors.Wrap(err, "failed to marshal"))
			http.Error(w, errors.New("internal error").Error(), http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		w.Write(jsonData)
	}
}

//func (h *Handler) GetEventNew(ctx context.Context) func(w http.ResponseWriter, r *http.Request) {
//	return func(w http.ResponseWriter, r *http.Request) {
//		query := r.URL.Query()
//
//		var resultEvents []models.Event
//
//		if query.Get("id") != "" {
//			id, err := strconv.ParseInt(query.Get("id"), 10, 64)
//			if err != nil {
//				h.log.Error(errors.Wrap(err, "failed to parse id"))
//				http.Error(w, errors.Wrap(err, "invalid id").Error(), http.StatusBadRequest)
//				return
//			}
//			event, err := h.eventUseCase.SelectByID(ctx, id)
//			if err != nil {
//				h.log.Error(errors.Wrap(err, "failed to select by id"))
//				http.Error(w, errors.Wrap(err, "internal error").Error(), http.StatusInternalServerError)
//				return
//			}
//
//			var jsonData []byte
//			switch strings.ToLower(query.Get("lang")) {
//			case "ua":
//				fmt.Println("lang ua")
//				event.TitleEN = ""
//				event.DescriptionEN = ""
//				jsonData, err = json.Marshal(event)
//				if err != nil {
//					h.log.Error(errors.Wrap(err, "failed to marshal response"))
//					http.Error(w, errors.Wrap(err, "internal error").Error(), http.StatusInternalServerError)
//					return
//				}
//			case "en":
//				event.TitleUA = ""
//				event.DescriptionUA = ""
//				jsonData, err = json.Marshal(event)
//				if err != nil {
//					h.log.Error(errors.Wrap(err, "failed to marshal response"))
//					http.Error(w, errors.Wrap(err, "internal error").Error(), http.StatusInternalServerError)
//					return
//				}
//			default:
//				jsonData, err = json.Marshal(event)
//				if err != nil {
//					h.log.Error(errors.Wrap(err, "failed to marshal response"))
//					http.Error(w, errors.Wrap(err, "internal error").Error(), http.StatusInternalServerError)
//					return
//				}
//			}
//
//			w.Header().Set("Content-Type", "application/json")
//			w.Write(jsonData)
//			return
//		}
//
//		if query.Get("startTimeGt") != "" || query.Get("startTimeLt") != "" {
//			timeGt, _ := strconv.ParseInt(query.Get("startTimeGt"), 10, 64)
//			timeLt, _ := strconv.ParseInt(query.Get("startTimeLt"), 10, 64)
//
//			fmt.Println(timeGt, timeLt)
//			if timeGt != 0 && timeLt != 0 {
//				if timeGt > timeLt {
//					h.log.Error(errors.New("timeGt is greater than timeLt"))
//					http.Error(w, errors.New("timeGt is greater than timeLt").Error(), http.StatusBadRequest)
//					return
//				}
//			}
//
//			eventsDB, err := h.eventUseCase.SelectByStartTime(ctx, timeGt, timeLt)
//			if err != nil {
//				h.log.Error(errors.Wrap(err, "failed to select by time"))
//				http.Error(w, errors.New("internal error").Error(), http.StatusInternalServerError)
//				return
//			}
//
//			var events []models.Event
//			for _, event := range eventsDB {
//				switch strings.ToLower(query.Get("important")) {
//				case "true":
//					events = append(events, event)
//					continue
//				case "false":
//					events = append(events, event)
//					continue
//				default:
//					events = append(events, event)
//				}
//			}
//
//			jsonData, err := json.Marshal(events)
//			if err != nil {
//				h.log.Error(errors.Wrap(err, "failed to marshal"))
//				http.Error(w, errors.New("internal error").Error(), http.StatusInternalServerError)
//				return
//			}
//
//			w.Header().Set("Content-Type", "application/json")
//			w.Write(jsonData)
//			return
//		}
//
//		if query.Get("endTimeGt") != "" || query.Get("endTimeLt") != "" {
//			timeGt, _ := strconv.ParseInt(query.Get("endTimeGt"), 10, 64)
//			timeLt, _ := strconv.ParseInt(query.Get("endTimeLt"), 10, 64)
//
//			if timeGt != 0 && timeLt != 0 {
//				if timeGt > timeLt {
//					h.log.Error(errors.New("timeGt is greater than timeLt"))
//					http.Error(w, errors.New("timeGt is greater than timeLt").Error(), http.StatusBadRequest)
//					return
//				}
//			}
//
//			eventsDB, err := h.eventUseCase.SelectByEndTime(ctx, timeGt, timeLt)
//			if err != nil {
//				h.log.Error(errors.Wrap(err, "failed to select by time"))
//				http.Error(w, errors.New("internal error").Error(), http.StatusInternalServerError)
//				return
//			}
//
//			var events []models.Event
//			for _, event := range eventsDB {
//				switch strings.ToLower(query.Get("important")) {
//				case "true":
//					events = append(events, event)
//					continue
//				case "false":
//					events = append(events, event)
//					continue
//				default:
//					events = append(events, event)
//				}
//			}
//
//			jsonData, err := json.Marshal(events)
//			if err != nil {
//				h.log.Error(errors.Wrap(err, "failed to marshal"))
//				http.Error(w, errors.New("internal error").Error(), http.StatusInternalServerError)
//				return
//			}
//
//			w.Header().Set("Content-Type", "application/json")
//			w.Write(jsonData)
//			return
//		}
//
//		eventsDB, err := h.eventUseCase.Select(ctx)
//		if err != nil {
//			h.log.Error(errors.Wrap(err, "failed to select"))
//			http.Error(w, errors.New("internal error").Error(), http.StatusInternalServerError)
//			return
//		}
//
//		var events []models.Event
//		for _, event := range eventsDB {
//			switch strings.ToLower(query.Get("important")) {
//			case "true":
//				if event.Important {
//					events = append(events, event)
//					continue
//				}
//			case "false":
//				if !event.Important {
//					events = append(events, event)
//					continue
//				}
//			default:
//				fmt.Println("dsadas")
//				events = append(events, event)
//			}
//		}
//
//		jsonData, err := json.Marshal(events)
//		if err != nil {
//			h.log.Error(errors.Wrap(err, "failed to marshal"))
//			http.Error(w, errors.New("internal error").Error(), http.StatusInternalServerError)
//			return
//		}
//
//		w.Header().Set("Content-Type", "application/json")
//		w.Write(jsonData)
//	}
//}

func (h *Handler) CreateEvent(ctx context.Context) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		var event models.Event
		err := json.NewDecoder(r.Body).Decode(&event)
		if err != nil {
			h.log.Error(errors.Wrap(err, "invalid body"))
			http.Error(w, errors.Wrap(err, "invalid body").Error(), http.StatusBadRequest)
			return
		}

		eventDB, err := h.eventUseCase.Create(ctx, event)
		if err != nil {
			h.log.Error(errors.Wrap(err, "failed to create"))
			http.Error(w, "internal error", http.StatusInternalServerError)
			return
		}

		var jsonResp struct {
			Id int64 `json:"id"`
		}
		jsonResp.Id = eventDB.ID
		jsonData, err := json.Marshal(jsonResp)
		if err != nil {
			h.log.Error(errors.Wrap(err, "failed to marshal"))
			http.Error(w, "internal error", http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		w.Write(jsonData)
	}
}

func (h *Handler) DeleteEvent(ctx context.Context) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		query := r.URL.Query()

		if query.Get("id") == "" {
			h.log.Error(errors.New("DeleteEvent: id not provided"))
			http.Error(w, "id not provided", http.StatusBadRequest)
			return
		}

		id, err := strconv.ParseInt(query.Get("id"), 10, 64)
		if err != nil {
			h.log.Error(errors.Wrap(err, "failed to parse int"))
			http.Error(w, "invalid id", http.StatusBadRequest)
			return
		}

		if err := h.eventUseCase.DeleteByID(ctx, id); err != nil {
			h.log.Error(errors.Wrap(err, "failed to delete by id"))
			http.Error(w, "internal error", http.StatusInternalServerError)
			return
		}
	}
}

func (h *Handler) UpdateEvent(ctx context.Context) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		var updateStruct struct {
			Id     int64  `json:"id"`
			Column string `json:"column"`
			Value  string `json:"value"`
		}
		if err := json.NewDecoder(r.Body).Decode(&updateStruct); err != nil {
			h.log.Error(errors.Wrap(err, "failed to decode json"))
			http.Error(w, "internal error", http.StatusInternalServerError)
			return
		}

		if updateStruct.Id == 0 {
			h.log.Error(errors.New("id not provided"))
			http.Error(w, "id not provided", http.StatusBadRequest)
			return
		}

		if !h.allowedColumns[strings.ToLower(updateStruct.Column)] {
			h.log.Error(errors.New("column to update is not allowed"))
			http.Error(w, "column to update is not allowed", http.StatusBadRequest)
			return
		}

		if err := h.eventUseCase.Update(ctx, updateStruct.Id, strings.ToLower(updateStruct.Column), updateStruct.Value); err != nil {
			h.log.Error(errors.Wrap(err, "failed to update column"))
			http.Error(w, "internal error", http.StatusInternalServerError)
			return
		}
	}
}
