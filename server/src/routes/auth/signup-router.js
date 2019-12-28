const express = require('express');
const bcrypt = require('bcrypt');

class SignupRouter {
    constructor(userDao) {
        this.userDao = userDao;
        this.router = express.Router();
        
        this.router.post ('/', (req, res) => {
            if (req.body.username &&
                req.body.password &&
                req.body.gender) {
                bcrypt.hash (req.body.password, 12)
                .then ((hashedPassword) => {
                    return this.userDao.createUser(
                        req.body.username,
                        hashedPassword,
                        req.body.gender
                    );
                })
                .then ( () => {
                    console.log("User: " + req.body.username + " registered");
                    res.send(
                        JSON.stringify({
                            ok: true
                        })
                    );
                })
                .catch ((err) => {

                    console.log("Failed: " + err)
                    res.send(JSON.stringify(
                        {
                            ok:false
                        }
                    ));
                });
            } else {
                res.send(
                    JSON.stringify( {
                        ok: false,
                        message: "Not all of the fields have been provided"
                    })
                );
            }
        });
    }
    
    getRouter() {
        return this.router;
    }
}

module.exports = SignupRouter;