package repos

import (
	"context"
	"database/sql"
	"github.com/OleksandrKochenko/tryzub/backend/models"
	"strings"
)

type DB interface {
	GetContext(ctx context.Context, dest interface{}, query string, args ...interface{}) error
	SelectContext(ctx context.Context, dest interface{}, query string, args ...interface{}) error
	ExecContext(ctx context.Context, query string, args ...interface{}) (sql.Result, error)
}

func EventToCreateRepo(events ...models.Event) []CreateEvent {
	result := make([]CreateEvent, len(events))

	for i, event := range events {
		galleryPhotos := strings.Join(event.GalleryPhotos, ",")
		result[i] = CreateEvent{
			TitleEN:       event.TitleEN,
			TitleUA:       event.TitleUA,
			DescriptionEN: event.DescriptionEN,
			DescriptionUA: event.DescriptionUA,
			Important:     event.Important,
			CoverPhoto:    event.CoverPhoto,
			EventPhoto:    event.EventPhoto,
			GalleryPhotos: galleryPhotos,
			EventStartsAt: event.EventStartsAt,
			EventEndsAt:   event.EventEndsAt,
		}
	}

	return result
}

func RepoToEvent(events ...Event) []models.Event {
	result := make([]models.Event, len(events))

	for i, event := range events {
		galleryPhotos := strings.Split(event.GalleryPhotos, ",")

		result[i] = models.Event{
			ID:            event.ID,
			TitleEN:       event.TitleEN,
			TitleUA:       event.TitleUA,
			DescriptionEN: event.DescriptionEN,
			DescriptionUA: event.DescriptionUA,
			Important:     event.Important,
			CoverPhoto:    event.CoverPhoto,
			EventPhoto:    event.EventPhoto,
			GalleryPhotos: galleryPhotos,
			EventStartsAt: event.EventStartsAt,
			EventEndsAt:   event.EventEndsAt,
			CreatedAt:     event.CreatedAt,
			UpdatedAt:     event.UpdatedAt,
		}
	}

	return result
}
