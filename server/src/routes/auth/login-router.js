const express = require('express');
const bcrypt = require('bcrypt');

class LoginRouter {
    constructor(userDao) {
        this.userDao = userDao;
        this.router = express.Router();

        this.router.post('/', (req, res) => {
            if (req.body.username && req.body.password) {
                this.userDao.readUser(req.body.username).then( (userDetails) => {
                    //user exists 
                    bcrypt.compare(req.body.password, userDetails.password).then( (samePassword) => {
                        if (samePassword) {
                            const payload = userDetails.id;
                            const token = jwt.sign(payload, "tempSecret");
                            res.cookie('token', token)
                            .send(
                                JSON.stringify({
                                    ok: true
                                })
                            );
                        }
                        else {
                            //Password doesn't match
                            res.send(
                                JSON.stringify({
                                    ok: false,
                                    message: "Password doesn't match"
                                })
                            );
                        }
                    }).catch( (err) => {
                        res.send(
                            JSON.stringify({
                                ok: false,
                                message: "Error logging in"
                            })
                        );
                    });
                }).catch( (err) => {
                    //user doesn't exist
                    res.send(JSON.stringify({
                        ok: false,
                        message: "No such user"
                    }));
                });
            }
            else {
                res.send(JSON.stringify({
                    ok: false,
                    message: "username and password are required"
                }));
            }
        });
    }
    
    getRouter() {
        return this.router;
    }
}

module.exports = LoginRouter;
