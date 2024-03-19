---
state: Unstructured
level: Data
language: English
---
# JSON Server

## General
Provides a simple JSON-Server locally hosted and running with one command.
Good for testing and development. Not suitable for production tho.

## Installation
Install the service globally, so it also gets recognised in your command line.
```shell
npm install -g json-server
```
## Usage
Runs a json server on port 4000 with the data located in db.json
```shell
json-server --watch ./data/db.json --port 4000
```

## Sample-Data
This would make a route available under `http://localhost:4000/prototypes`
```json
{
  "prototypes": [
    {
      "id": 1,
      "title": "Dev Blog",
      "desc": "Unser Dev-Blog ist live",
      "date": "2024-03-08",
      "public": true
    }
  ]
}
```