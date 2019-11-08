class TodoDao {
    constructor(dbManager) {
        this.dbManager = dbManager;
    }

    createTable() {
        let query = "CREATE TABLE IF NOT EXISTS todos (" +
                    "id INTEGER PRIMARY KEY, " + 
                    "user_id INTEGER NOT NULL, " + 
                    "description TEXT, " +
                    "done INTEGER, " +
                    "due_date INTEGER, " +
                    "FOREIGN KEY(user_id) REFERENCES users(id)" +
                    ");";
        return this.dbManager.run(query);
    }

    createTodo(userId, description, dueDate) {
        let query = "INSERT INTO todos (" +
                    "user_id, description, done, due_date" +
                    ") VALUES (?, ?, ?, ?);";
        let params = [userId, description, false, dueDate];
        return this.dbManager.run(query, params);
    }

    setDone(id, value) {
        let query = "UPDATE todos SET " +
        "done = ? WHERE id = ?;";
        let params = [value ? 1 : 0, id];
        return this.dbManager.run(query, params);
    }

    setDescription(id, description) {
        let query = "UPDATE todos SET " +
                    "description = ? WHERE id = ?;";
        let params = [description, id];
        return this.dbManager.run(query, params);
    }

    setDueDate(id, dueDate) {
        let query = "UPDATE todos SET " +
                    "due_date = ? WHERE id = ?;";
        let params = [dueDate, id];
        return this.dbManager.run(query, params);
    }

    readTodo(id) {
        let query = "SELECT * FROM todos WHERE id = ?;";
        let params = [id];
        return this.dbManager.get(query, params);
    }

    readAll(userId) {
        let query = "SELECT * FROM todos WHERE user_id = ?;";
        let params = [userId];
        return this.dbManager.all(query, params);
    }

}

module.exports = TodoDao;