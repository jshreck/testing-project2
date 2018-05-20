var db = require("../models");

module.exports = function (app) {
    //creating newUser
    app.post("/api/newUser", function (req, res) {
        console.log(req.body);

        password = req.body.newPassword1.trim();

        db.User.create(
            {
                username: req.body.newUsername.trim().toLowerCase(),
                password: password,
                email: req.body.newEmail.trim()
            }
        ).then((newUser) => {
            console.log("newUser: " + JSON.stringify(newUser));
            //sends back username created
            res.status(200).send("username " + newUser.username + " created");
        })
            .catch((err) => {
                console.log(err.errors[0].message);
                res.status(500).send(err.errors[0].message);
            })
    });

    //logging in
    app.post('/api/login', (req, res) => {
        console.log(req.body);
        db.User.findOne({
            where: {
                username: req.body.username,
                password: req.body.password
            }
        }).then(function (user) {
            console.log("user: " + JSON.stringify(user));

            if (user != null) {
                //login success========================
                console.log("Login Success!");
                res.status(200).send("Login Success!");
            }
            else {
                //login fail============================
                res.status(500).send("Login Unsuccessful");
            }
        })
            .catch((err) => {
                console.log(err.errors[0].message);
                res.status(500).send(err.errors[0].message);
            });
    });
}
