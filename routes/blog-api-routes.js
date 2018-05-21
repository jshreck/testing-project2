var db = require("../models");

module.exports = function (app) {

    //creating blog post =============================NOT YET TESTED
    app.post("api/newPost", (req, res) => {
        //NEED TO GET TITLE, BODY, USERID IN REQ
        db.BlogPost.create(
            {
                title: req.body.title,
                body: req.body.body,
                UserId: req.body.userID
            }
        ).then((newPost) => {
            res.json(newPost);
        });
    });

    //updating blog post ===========================NOT YET TESTED
    app.put("api/update/:postID", (req, res) => {
        // NEED TITLE AND BODY
        db.BlogPost.update({
            title: title,
            body: body,
            where: {
                id: req.params.id,
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
    app.put("api/template/:templateID", (req, res) => {
        // NEED USER ID (id)
        db.User.update({
            template: req.params.templateID,
            where: {
                id: id,
            }
        }).then((user) => {
            res.json(user);
        });
    });

}