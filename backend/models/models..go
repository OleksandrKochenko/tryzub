package models

import (
	"strings"
	"time"
)

type Language string

var EN Language
var UA Language

func (l Language) Lower() string {
	return strings.ToLower(string(l))
}

func init() {
	EN = "en"
	UA = "ua"
}

type Event struct {
	ID            int64     `json:"id"`
	TitleEN       string    `json:"title_en,omitempty"`
	TitleUA       string    `json:"title_ua,omitempty"`
	DescriptionEN string    `json:"description_en,omitempty"`
	DescriptionUA string    `json:"description_ua,omitempty"`
	Important     bool      `json:"important"`
	CoverPhoto    string    `json:"cover_photo"`
	EventPhoto    string    `json:"event_photo"`
	GalleryPhotos []string  `json:"gallery_photos"`
	EventStartsAt int64     `json:"event_starts_at"`
	EventEndsAt   int64     `json:"event_ends_at"`
	CreatedAt     time.Time `json:"created_at"`
	UpdatedAt     time.Time `json:"updated_at"`
}
