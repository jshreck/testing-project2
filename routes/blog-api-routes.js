var db = require("../models");

module.exports = function (app) {

    //creating blog post
    app.post("/api/newPost/:userID", (req, res) => {
        console.log(req.body);

        db.BlogPost.create(
            {
                title: req.body.title,
                body: req.body.body,
                UserId: req.params.userID
            }
        ).then((newPost) => {
            res.json(newPost);
        })
            .catch((err) => {
                console.log(err.errors[0].message);
                res.status(500).send(err.errors[0].message);
            });
    });

    //updating blog post ===========================NOT YET TESTED
    app.put("/api/update/:postID", (req, res) => {
        // NEED TITLE AND BODY
        db.BlogPost.update({
            title: title,
            body: body,
            where: {
                id: req.params.postID,
            }
        }).then((updatedPost) => {
            res.json(updatedPost);
        });
    });

    //deleting blog post
    app.delete("/api/delete/:postID", (req, res) => {

        db.BlogPost.destroy({
            where: {
                id: req.params.postID
            }
        }).then((numDeleted) => {
            res.status(200).send("success");
        });
    });

    //choosing template ===================================NOT YET TESTED
    app.put("/api/:userID/template/:templateID", (req, res) => {

        db.User.find({ where: { id: req.params.userID } })
            .then((user) => {
                user.updateAttributes({
                    template: parseInt(req.params.templateID)
                }).then((user) => {
                    res.json(user);
                });
            });

    });
}