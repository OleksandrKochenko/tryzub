CREATE TABLE IF NOT EXISTS events (
    id                SERIAL PRIMARY KEY,
    title_en          VARCHAR not null,
    title_ua          VARCHAR not null,
    description_en    VARCHAR default '',
    description_ua    VARCHAR default '',
    important         BOOLEAN default false,
    cover_photo       VARCHAR,
    event_photo       VARCHAR,
    gallery_photos    VARCHAR default '',
    event_starts_at   bigint not null,
    event_ends_at     bigint not null,
    created_at        timestamp default current_timestamp,
    updated_at        timestamp default current_timestamp
);

CREATE OR REPLACE FUNCTION update_modified_column()
  RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_modified_time BEFORE UPDATE ON events FOR EACH ROW EXECUTE PROCEDURE update_modified_column();
