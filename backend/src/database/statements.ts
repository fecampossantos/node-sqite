export const CREATE_TODO_TABLE = `CREATE TABLE todo(
key INTEGER PRIMARY KEY,
title TEXT,
created_at TEXT,
done INTEGER) STRICT`;

export const GET_ALL_TODOS = `SELECT * FROM todo;`;

export const INSERT_TODO = `INSERT INTO todo (key, title, created_at, done) VALUES (NULL, ?, ?, 0);`;

export const GET_TODO = `SELECT * FROM todo WHERE key = ?;`;

export const DELETE_TODO = `DELETE * FROM todo WHERE key = ?;`;

export const UPDATE_TODO_DONE = `UPDATE todo SET done = ? WHERE key = ?`;
