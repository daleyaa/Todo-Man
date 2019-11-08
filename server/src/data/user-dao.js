const Promise = require("bluebird");
const bcrypt = require("bcrypt");

class UserDao {
    constructor(dbManager) {
        this.dbManager = dbManager;
    }

    createTable() {
        let query = "CREATE TABLE IF NOT EXISTS users (" +
                    "id INTEGER PRIMARY KEY, " +
                    "username TEXT NOT NULL, " +
                    "password TEXT, " +
                    "gender INTEGER" +
                    ");";
        return this.dbManager.run(query);
    }

    createUser(username, password, gender) {
        let query = "INSERT INTO users (" +
                    "username, password, gender)" +
                    " VALUES (?, ?, ?);";
        let params = [username, password, gender];
        return this.dbManager.run(query, params);
    }

    readUser(username) {
        let query = "SELECT * FROM users WHERE username = ?;";
        let params = [username];

        return new Promise( (res, rej) => {
            this.dbManager.get(query, params).then( (row) => {
                if (row === undefinded) {
                    rej("No such user");
                } else {
                    res ({
                        username: row.username,
                        password: row.password,
                        gender: row.gender,
                        id: row.id
                    });
                }
            });
        });
    }
}

module.exports = UserDao;