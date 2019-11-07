const sqlite = require("sqlite3");
const Promise = require("bluebird");

class DatabaseManager {
    constructor(dbPath) {
        this.db = new sqlite.Database(dbPath, (err) => {
            if (err) console.log("Error connecting to the sqlite database: " + err);
            else console.log("Connected to the database");
        });
    }

    run (query, params = []) {
        return new Promise( (res, rej) => {
            this.db.run(query, params, (err) => {
                if (err) {
                    rej(err);
                } else {
                    res({
                        id: this.lastID
                    });
                }
            });
        });
    }

    get(query, params = []) {
        return new Promise((res, rej) => {
            this.db.get(query, params, (err, result) => {
                if (err) {
                    rej(err);
                } else {
                    res(result);
                }
            });
        });
    }

    all(query, params = []) {
        return new Promise((res, rej) => {
            this.db.all(query, params, (err, rows) => {
                if (err) {
                    rej(err);
                } else {
                    res(rows);
                }
            });
        });
    }
}