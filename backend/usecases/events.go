package usecases

import (
	"context"
	"fmt"
	"github.com/OleksandrKochenko/tryzub/backend/models"
	"github.com/OleksandrKochenko/tryzub/backend/repos"
	"github.com/pkg/errors"
)

type EventUseCase struct {
	repo repos.EventRepo
}

func NewEventUseCase(repo repos.EventRepo) *EventUseCase {
	return &EventUseCase{repo: repo}
}

func (use *EventUseCase) Select(ctx context.Context) ([]models.Event, error) {
	eventsDB, err := use.repo.Selector().Select(ctx)
	if err != nil {
		return nil, err
	}

	return repos.RepoToEvent(eventsDB...), nil
}

func (use *EventUseCase) SelectImportant(ctx context.Context) ([]models.Event, error) {
	eventsDB, err := use.repo.Selector().FilterByImportant(true).Select(ctx)
	if err != nil {
		return nil, err
	}

	return repos.RepoToEvent(eventsDB...), nil
}

func (use *EventUseCase) SelectByID(ctx context.Context, id int64) (models.Event, error) {
	eventsDB, err := use.repo.Selector().FilterByID(id).Select(ctx)
	if err != nil {
		return models.Event{}, err
	}

	events := repos.RepoToEvent(eventsDB...)
	if len(events) == 0 {
		return models.Event{}, errors.New("failed to select by id")
	}

	return events[0], nil
}

func (use *EventUseCase) SelectByStartTime(ctx context.Context, timeGt, timeLt int64) ([]models.Event, error) {
	eventsDB, err := use.repo.Selector().FilterByStartsAtGt(timeGt).FilterByStartsAtLt(timeLt).Select(ctx)
	if err != nil {
		return nil, err
	}

	return repos.RepoToEvent(eventsDB...), nil
}

func (use *EventUseCase) SelectByEndTime(ctx context.Context, timeGt, timeLt int64) ([]models.Event, error) {
	eventsDB, err := use.repo.Selector().FilterByEndsAtGt(timeGt).FilterByEndsAtLt(timeLt).Select(ctx)
	if err != nil {
		return nil, err
	}

	return repos.RepoToEvent(eventsDB...), nil
}

func (use *EventUseCase) Create(ctx context.Context, event models.Event) (models.Event, error) {
	eventsDB, err := use.repo.Inserter().SetCreate(repos.EventToCreateRepo(event)...).Create(ctx)
	if err != nil {
		return models.Event{}, err
	}

	events := repos.RepoToEvent(eventsDB...)
	if len(events) == 0 {
		return models.Event{}, errors.New("failed to create")
	}

	return events[0], nil
}

func (use *EventUseCase) Update(ctx context.Context, id int64, column, value string) error {
	_, err := use.repo.Updater().WhereIDU(id).Update(ctx, column, value)
	return err
}

func (use *EventUseCase) UpdateTitle(ctx context.Context, newTitle string, language models.Language) error {
	_, err := use.repo.Updater().Update(ctx, fmt.Sprintf("title_%v", language.Lower()), newTitle)
	return err
}

func (use *EventUseCase) DeleteByID(ctx context.Context, id int64) error {
	_, err := use.repo.Deleter().WhereIDD(id).Delete(ctx)
	return err
}
