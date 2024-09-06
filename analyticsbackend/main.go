// TODO: Add and test simple endpoints. Get mock data from supabase (WRITE A SCRIPT TO POPULATE THE DB)

package main

import (
	"fmt"
	"net/http"
	"io"
)



func logHours(w http.ResponseWriter, r *http.Request) {
	io.WriteString(w, "Hours logged")
	fmt.Println(r.URL)
}

func handleRequests() {
    http.HandleFunc("/logHours", logHours)
    http.ListenAndServe(":8080", nil)
}

func main() {
    handleRequests()
}