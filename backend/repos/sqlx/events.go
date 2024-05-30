package sqlx

import (
	"fmt"
	"github.com/Masterminds/squirrel"
	"github.com/OleksandrKochenko/tryzub/backend/repos"
	"github.com/jmoiron/sqlx"
)

type eventRepo struct {
	baseRepo[repos.Event]
}

func NewEventRepo(db *sqlx.DB) repos.EventRepo {
	return &eventRepo{
		newBaseRepo[repos.Event](db, "events",
			"title_en", "title_ua", "description_en", "description_ua",
			"important", "cover_photo", "event_photo", "gallery_photos",
			"event_starts_at", "event_ends_at"),
	}
}

func (s eventRepo) Selector() repos.EventSelector {
	return s
}

func (s eventRepo) FilterByID(id int64) repos.EventSelector {
	s.q.sqlSelect = s.q.sqlSelect.Where(squirrel.Eq{"id": id})
	return s
}

func (s eventRepo) FilterByImportant(important bool) repos.EventSelector {
	s.q.sqlSelect = s.q.sqlSelect.Where(squirrel.Eq{"important": important})
	return s
}

func (s eventRepo) FilterByStartsAtGt(time int64) repos.EventSelector {
	if time == 0 {
		return s
	}
	s.q.sqlSelect = s.q.sqlSelect.Where(squirrel.GtOrEq{"event_starts_at": time})
	return s
}

func (s eventRepo) FilterByStartsAtLt(time int64) repos.EventSelector {
	if time == 0 {
		return s
	}
	s.q.sqlSelect = s.q.sqlSelect.Where(squirrel.LtOrEq{"event_starts_at": time})
	return s
}

func (s eventRepo) FilterByEndsAtGt(time int64) repos.EventSelector {
	if time == 0 {
		return s
	}
	s.q.sqlSelect = s.q.sqlSelect.Where(squirrel.GtOrEq{"event_ends_at": time})
	return s
}

func (s eventRepo) FilterByEndsAtLt(time int64) repos.EventSelector {
	if time == 0 {
		return s
	}
	s.q.sqlSelect = s.q.sqlSelect.Where(squirrel.LtOrEq{"event_ends_at": time})
	return s
}

func (s eventRepo) OrderBy(by, order string) repos.EventSelector {
	s.q.sqlSelect = s.q.sqlSelect.OrderBy(fmt.Sprintf("%v %v", by, order))
	return s
}

func (s eventRepo) Limit(u uint64) repos.EventSelector {
	s.q.sqlSelect = s.q.sqlSelect.Limit(u)
	return s
}

func (s eventRepo) Inserter() repos.EventInserter {
	return s
}

func (s eventRepo) SetCreate(events ...repos.CreateEvent) repos.EventInserter {
	for _, event := range events {
		s.q.sqlInsert = s.q.sqlInsert.Values(event.TitleEN, event.TitleUA, event.DescriptionEN, event.DescriptionUA, event.Important, event.CoverPhoto, event.EventPhoto, event.GalleryPhotos, event.EventStartsAt, event.EventEndsAt)
	}
	return s
}

func (s eventRepo) Deleter() repos.EventDeleter {
	return s
}

func (s eventRepo) WhereIDD(id int64) repos.EventDeleter {
	s.q.sqlDelete = s.q.sqlDelete.Where(squirrel.Eq{"id": id})
	return s
}

func (s eventRepo) Updater() repos.EventUpdater {
	return s
}

func (s eventRepo) WhereIDU(id int64) repos.EventUpdater {
	s.q.sqlUpdate = s.q.sqlUpdate.Where(squirrel.Eq{"id": id})
	return s
}
