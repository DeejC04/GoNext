package main

import (
  "database/sql"
  "fmt"
  "log"

  _ "github.com/lib/pq"
)

func main() {
  connStr := "postgresql://analyticsdb_owner:A1XMixJK9mdS@ep-little-cherry-a6pitd56.us-west-2.aws.neon.tech/analyticsdb?sslmode=require"
  db, err := sql.Open("postgres", connStr)
  if err != nil {
    log.Fatal(err)
  }
  defer db.Close()

  

  rows, err := db.Query("SELECT * FROM activities")
  if err != nil {
    log.Fatal(err)
  }

  println("rows", rows)
  defer rows.Close()

  var name string;
  for rows.Next() {
    err := rows.Scan(&name)
    if err != nil {
      log.Fatal(err)
    }
  }
  fmt.Printf("version=%s\n", name)
}