const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');

const port = 3001;

const SignupRouter = require("./routes/auth/signup-router");
const LoginRouter = require("./routes/auth/login-router");
const CheckLoginRouter = require("./routes/auth/check-login-router");

const DatabaseManager = require("./data/database-manager");
const TodoDao = require("./data/todo-dao");
const UserDao = require("./data/user-dao");

//Use body parser for application/json content
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(cookieParser());

//Initialize the db
let dbManager = new DatabaseManager("./data.db");
let todoDao = new TodoDao(dbManager);
let userDao = new UserDao(dbManager);
todoDao.createTable()
.then((res, rej) => {
    console.log("Successfully initialized the todos table");
}).catch((err) => {
    console.log("Failed to create todos table");
});

userDao.createTable()
.then((res, rej) => {
    console.log("Successfully initialized the users table");
})
.catch((err) => {
    console.log("Failed to create users table");
});

//Auth routes
let signupRouter = new SignupRouter();
app.use("/auth/signup", signupRouter.getRouter());

let loginRouter = new LoginRouter();
app.use("/auth/login", loginRouter.getRouter());

let checkLoginRouter = new CheckLoginRouter();
app.use("/auth/check-login", checkLoginRouter.getRouter());

app.listen(port, () => {
    console.log("Server has been started");
});
