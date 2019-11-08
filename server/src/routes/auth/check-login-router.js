const express = require('express');
const bcrypt = require('bcrypt');

class CheckLoginRouter {
    constructor() {
        this.router = express.Router();
        this.router.post('/', (req, res) => {
            if (req.session.userId)
                res.send(JSON.stringify({
                    ok: true
                }));
            else
                res.send(JSON.stringify({
                    ok: false
                }));
        });
    }
    
    getRouter() {
        return this.router;
    }
}

module.exports = CheckLoginRouter;
