var db = require("../models");

module.exports = function (app) {
    //creating blog post
    app.post("api/newPost", (req, res) => {
        db.BlogPost.create(req.body).then((newPost) => {
            res.json(newPost);
        });
    });

    //updating blog post
    app.put("api/update/:postID", (req, res) => {
        db.BlogPost.update(
            req.body,
            {
                where: {
                    id: req.body.id
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

}