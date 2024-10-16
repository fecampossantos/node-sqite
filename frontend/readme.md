# To-Do App Frontend

This project is the frontend for a simple to-do application. It is built using **React**, **Vite**, and **TypeScript**, providing an interface for interacting with the backend API that manages to-do items.

## Features

- **Add a new to-do**: Users can create new to-do items by entering a title.
- **Check a to-do**: Marks a to-do as "done" by clicking on the check button.
- **Uncheck a to-do**: Allows users to mark a to-do as "not done."
- **Delete a to-do**: Removes a to-do item from the list.

## Running the Frontend

1. Install dependencies using `yarn`:

```bash
yarn
```

2. Start the development server:

```bash
yarn dev
```

The app should be running at `http://localhost:3000`.

API Endpoints Used  
The frontend communicates with the following backend API routes:

List All Todos: `GET /todo`  
Create a New Todo: `POST /todo`  
Check a Todo as Done: `PATCH /todo/check/:id`  
Uncheck a Todo as Not Done: `PATCH /todo/uncheck/:id`  
Delete a Todo: `DELETE /todo/:id`
