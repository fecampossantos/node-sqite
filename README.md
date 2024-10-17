# Node SQLite In-Memory Database Test

This project is a small backend and frontend application to test the new SQLite in-memory database capabilities in Node.js. It serves as a simple to-do list manager.  

## Features

- Backend with in-memory SQLite database.  
- Frontend built with React, Vite, and TypeScript.  
- Basic to-do app functionality: add, delete, check/uncheck tasks.  

## Running the Project

1. Clone the repository:
```bash
git clone https://github.com/fecampossantos/node-sqlite
```
   
2. Navigate to the backend and frontend folders to install dependencies:
```bash
cd backend && yarn
cd frontend && yarn
```

3. Start the backend:
```bash
yarn dev
```

4. Start the frontend:
```bash
yarn dev
```

## API Endpoints
```GET /todo```: List all todos.  
```POST /todo```: Create a new todo.  
```PATCH /todo/check/```: Mark a todo as done.  
```PATCH /todo/uncheck/```: Mark a todo as not done.  
```DELETE /todo/```: Delete a todo.  

## Technologies
Backend: Node.js, SQLite (in-memory database).  
Frontend: React, Vite, TypeScript.  

## Known Issues
Mocking in-memory SQLite for testing is incomplete.  
