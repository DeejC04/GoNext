package main

import (
	"log"
	// "os"
	"database/sql"
)
func Connect() *sql.DB {
	db, err := sql.Open("postgres", "postgresql://analyticsdb_owner:adpH6nFTmS7l@ep-little-cherry-a6pitd56.us-west-2.aws.neon.tech/analyticsdb?sslmode=require")
	if err != nil {
		log.Fatal(err)
	}

	rows, err := db.Query("SELECT * FROM activities")
	if err != nil {
		log.Fatal(err)
	}

	activities := []*Activity{}

	for rows.Next() {
		activity := new(Activity)
		err := rows.Scan(&activity.ID, &activity.Name, &activity.CreatedAt, &activity.Category)

		if err != nil {
			log.Fatal(err)
		}

		activities = append(activities, activity)
	}
	return db
}

func CloseConnection(db *sql.DB) {
    defer db.Close()
}