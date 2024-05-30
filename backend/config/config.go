package config

import (
	"encoding/json"
	"fmt"
	"github.com/jmoiron/sqlx"
	"github.com/sirupsen/logrus"
	"os"
)

type Config interface {
	DB() *sqlx.DB
	Log() *logrus.Logger
	Port() string
}

type config struct {
	dbParams `json:"db"`
	PortStr  string `json:"port"`
}

type dbParams struct {
	URL    string `json:"url"`
	Driver string `json:"driver"`
}

func Init(cfgPath string) Config {
	file, err := os.Open(cfgPath)
	if err != nil {
		panic(err)
	}

	var cfg config
	if err := json.NewDecoder(file).Decode(&cfg); err != nil {
		panic(err)
	}

	return &cfg
}

func (c *config) DB() *sqlx.DB {
	db, err := sqlx.Open(c.Driver, c.URL)
	if err != nil {
		panic(err)
	}

	if err = db.Ping(); err != nil {
		panic(err)
	}

	return db
}

func (c *config) Log() *logrus.Logger {
	return logrus.New()
}

func (c *config) Port() string {
	return fmt.Sprintf(":%v", c.PortStr)
}
