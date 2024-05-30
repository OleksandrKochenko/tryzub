package repos

import (
	"context"
	"time"
)

type EventSelector interface {
	FilterByID(int64) EventSelector
	FilterByImportant(bool) EventSelector

	FilterByStartsAtGt(int64) EventSelector
	FilterByStartsAtLt(int64) EventSelector

	FilterByEndsAtGt(int64) EventSelector
	FilterByEndsAtLt(int64) EventSelector

	OrderBy(by, order string) EventSelector
	Limit(u uint64) EventSelector

	Select(ctx context.Context) ([]Event, error)
}

type EventUpdater interface {
	WhereIDU(int64) EventUpdater

	Update(ctx context.Context, column string, value interface{}) ([]Event, error)
}

type EventDeleter interface {
	WhereIDD(int64) EventDeleter

	Delete(ctx context.Context) ([]Event, error)
}

type EventInserter interface {
	SetCreate(...CreateEvent) EventInserter
	Create(ctx context.Context) ([]Event, error)
}

type EventRepo interface {
	Selector() EventSelector
	Inserter() EventInserter
	Deleter() EventDeleter
	Updater() EventUpdater
}

type CreateEvent struct {
	TitleEN       string `db:"title_en"`
	TitleUA       string `db:"title_ua"`
	DescriptionEN string `db:"description_en"`
	DescriptionUA string `db:"description_ua"`
	Important     bool   `db:"important"`
	CoverPhoto    string `db:"cover_photo"`
	EventPhoto    string `db:"event_photo"`
	GalleryPhotos string `db:"gallery_photos"`
	EventStartsAt int64  `db:"event_starts_at"`
	EventEndsAt   int64  `db:"event_ends_at"`
}

type Event struct {
	ID            int64     `db:"id"`
	TitleEN       string    `db:"title_en"`
	TitleUA       string    `db:"title_ua"`
	DescriptionEN string    `db:"description_en"`
	DescriptionUA string    `db:"description_ua"`
	Important     bool      `db:"important"`
	CoverPhoto    string    `db:"cover_photo"`
	EventPhoto    string    `db:"event_photo"`
	GalleryPhotos string    `db:"gallery_photos"`
	EventStartsAt int64     `db:"event_starts_at"`
	EventEndsAt   int64     `db:"event_ends_at"`
	CreatedAt     time.Time `db:"created_at"`
	UpdatedAt     time.Time `db:"updated_at"`
}
