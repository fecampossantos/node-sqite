# Node in-memory SQLite Database Test

This project is a backend test using Node's 22.9 SQLite update with in-memory database functionality.

## Features

The backend manages a simple "to-do" application with the following functionalities:

## Running the backend

1. install dependencies using `yarn`
2. run the backend using `yarn dev`

## API Routes

1. **Ping Pong Test**  
   Route: `/ping`  
   Method: `GET`  
   Description: This route is used to test the server's connectivity. It responds with a simple message, "pong".  
   Response:

```json
{ "message": "pong" }
```

2. **List All Todos**  
   Route: `/todo`  
   Method: `GET`  
   Description: Fetches a list of all the existing to-do items from the database.  
   Response:

```json
[
  {
    "id": 1,
    "title": "Sample Todo",
    "createdAt": "2024-10-10T12:00:00Z",
    "done": 0
  },
  ...
]
```

3. **Create a New Todo**  
   Route: `/todo`  
   Method: `POST`  
   Description: Adds a new to-do item with the provided title. The createdAt field is automatically generated.  
   Request Body:

```json
{
  "title": "New Todo Title"
}
```

4. **Get a Single Todo**  
   Route: `/todo/:id`  
   Method: `GET`  
   Description: Fetches a specific to-do item by its id.  
   Response:

```json
{
  "id": 1,
  "title": "Sample Todo",
  "createdAt": "2024-10-10T12:00:00Z",
  "done": 0
}
```

5. **Delete a Todo**  
   Route: `/todo/:id`  
   Method: `DELETE`  
   Description: Deletes the to-do item with the specified id.  
   Response: Status 204 (No Content).

6. **Mark a Todo as Done**  
   Route: `/todo/check/:id`  
   Method: `PATCH`  
   Description: Marks the to-do item as "done" by setting the done field to 1.  
   Response: Status 204 (No Content).

7. **Unmark a Todo (Set as Not Done)**  
   Route: `/todo/uncheck/:id`  
   Method: `PATCH`  
   Description: Marks the to-do item as "not done" by setting the done field back to 0.  
   Response: Status 204 (No Content).

### Known Problems

- Test being skipped: I could not mock the in-memory database from Node for testing.
