var db = require("../models");

module.exports = function (app) {
    //login page
    app.get("/", (req, res) => {
        res.render("login");
    });



    //to get a user's blog 
    app.get("/blogs/:username", (req, res) => {
        var username = req.params.username;
        var template;
        var hbsObj;
        var userID;

        //get user
        db.User.findOne({
            where: {
                username: username
            }
            //get user's chosen template
        }).then((user) => {
            console.log(user.dataValues);
            template = "template" + user.dataValues.template;
            console.log("template" + template);
            userID = user.dataValues.id;
            console.log("userID: " + userID);
            //get user's blog posts
        }).then(() => {
            db.BlogPost.findAll({
                where: {
                    UserID: userID
                }
            }).then((blogPost) => {
                var hbsObj = {
                    blogPost
                };
                res.render(template, hbsObj);
            });
        });
    });


    //templates (examples)
    app.get("/template/:id", (req, res) => {

        template = "template" + req.params.id;

        //just using for example
        var hbsObj = {
            username: "username",
            blogPost: [{
                title: "Post 1",

                body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, ipsa voluptas delectus sed assumenda voluptates, ab adipisci perspiciatis earum magnam fugit quasi culpa repellendus totam in, unde neque sapiente quod praesentium nisi rerum enim laudantium aliquam. Dolore nobis quis, quas quam reiciendis. Nisi, minus quo accusamus. Perferendis tempore ducimus blanditiis quo error, nemo temporibus aperiam harum vero asperiores vitae magnam et dolores repudiandae exercitationem voluptatibus veniam rerum voluptas architecto alias culpa dolorem incidunt quasi fuga. Fugit amet totam modi, optio a quae architecto odio, officia ipsam, autem dolore dignissimos."
            }, {
                title: "Post2",
                body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, ipsa voluptas delectus sed assumenda voluptates, ab adipisci perspiciatis earum magnam fugit quasi culpa repellendus totam in, unde neque sapiente quod praesentium nisi rerum enim laudantium aliquam. Dolore nobis quis, quas quam reiciendis. Nisi, minus quo accusamus. Perferendis tempore ducimus blanditiis quo error, nemo temporibus aperiam harum vero asperiores vitae magnam et dolores repudiandae exercitationem voluptatibus veniam rerum voluptas architecto alias culpa dolorem incidunt quasi fuga. Fugit amet totam modi, optio a quae architecto odio, officia ipsam, autem dolore dignissimos."

            },
            {
                title: "Post3",
                body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, ipsa voluptas delectus sed assumenda voluptates, ab adipisci perspiciatis earum magnam fugit quasi culpa repellendus totam in, unde neque sapiente quod praesentium nisi rerum enim laudantium aliquam. Dolore nobis quis, quas quam reiciendis. Nisi, minus quo accusamus. Perferendis tempore ducimus blanditiis quo error, nemo temporibus aperiam harum vero asperiores vitae magnam et dolores repudiandae exercitationem voluptatibus veniam rerum voluptas architecto alias culpa dolorem incidunt quasi fuga. Fugit amet totam modi, optio a quae architecto odio, officia ipsam, autem dolore dignissimos."

            }]
        }
        res.render(template, hbsObj);
    });


    //blogSpace
    app.get("/blogspace/:username", (req, res) => {
        //need check to make sure user is logged in in order to view this

        var username = req.params.username;

        //find userid where user name then
        var username = req.params.username;
        var hbsObj;
        var userID;

        //get user
        db.User.findOne({
            where: {
                username: username
            }
            //get user's id
        }).then((user) => {
            userID = user.dataValues.id;
            console.log("userID: " + userID);
            //get user's blog posts
        }).then(() => {
            db.BlogPost.findAll({
                where: {
                    UserID: userID
                }
            }).then((blogPost) => {
                var hbsObj = {
                    blogPost,
                    userID,
                    username
                };
                res.render("blogSpace", hbsObj);
            });
        });
    });


    //pg to newPost
    app.get("/blogspace/:username/newPost", (req, res) => {
        //need check to make sure user is logged in in order to view this

        var username = req.params.username;

        //find userid where user name then
        var username = req.params.username;
        var hbsObj;
        var userID;

        //get user
        db.User.findOne({
            where: {
                username: username
            }
            //get user's id
        }).then((user) => {
            userID = user.dataValues.id;
            console.log("userID: " + userID);
    
        }).then(() => {
            var hbsObj = {
                userID,
                username
            };
            res.render("newPost", hbsObj);
        });
    });
}



