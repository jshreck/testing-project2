var db = require("../models");

module.exports = function (app) {
    //creating blog post
    app.post("api/newPost", (req, res) => {
        db.blogPost.create(req.body).then((newPost) => {
            res.json(newPost);
        });
    });

    //updating blog post
    app.put("api/update/:postID", (req, res) => {
        db.blogPost.update(
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
    app.delete("api/delete/:postID", (req, res) => {
        db.blogPost.destroy({
            where: {
                id: req.params.id
            }
        }).then((blogPost) => {
            res.json(blogPost);
        });
    });

}