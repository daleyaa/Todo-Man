const express = require("express");

class CreateTodoRouter {
    constructor(todoDao) {
        this.todoDao = todoDao;
        this.router = express.Router();

        this.router.post('/', (req, res) => {
            //Check if the request is consisted of valid info
            if (req.body.)
        });
    }
}