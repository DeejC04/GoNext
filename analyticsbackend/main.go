package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	// "os"
    "database/sql"
	_ "github.com/lib/pq"
)

type Activity struct {
	ID        int    `json:"id"`
	Name      string `json:"name"`
	Category  string `json:"category"`
	CreatedAt string `json:"createdat"`
}

func (h handler) activityAdd(w http.ResponseWriter, r *http.Request) {
	// Declare a new Activity struct.
	var activity Activity

	// Try to decode the request body into the struct. If there is an error,
	// respond to the client with the error message and a 400 status code.
	err := json.NewDecoder(r.Body).Decode(&activity)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

    sqlStatement := `
INSERT INTO activities (id, name, created_at, category)
VALUES ($1, $2, $3, $4)`
_, err = h.DB.Exec(sqlStatement, 4, "j", "2024-09-14T07:06:21.474Z", "one")
if err != nil {
  panic(err)
}
	// Do something with the Person struct...
	fmt.Fprintf(w, "Activity: %+v", activity)
}

func handleRequests(DB *sql.DB) {
    h := New(DB)

    mux := http.NewServeMux()
	mux.HandleFunc("/activity/add", h.activityAdd)
    log.Println("Server starting on :4000")
    log.Fatal(http.ListenAndServe(":4000", mux))
   
}

func main() {
    DB := Connect()
    handleRequests(DB)
    CloseConnection(DB)
}
