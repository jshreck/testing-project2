require('dotenv').config();
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

//requiring models for db.sequelize.sync()
var db = require("./models");
var PORT = process.env.PORT || 3000;

//set up server
var app = express();

// Serve static content for the app from the "public" directory
app.use(express.static("public"));

// setting up body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set Handlebars up
var exphbs = require("express-handlebars");

//was here before
app.engine("handlebars", exphbs({

    defaultLayout: "main",
    helpers: {
        section: function(name, options) {
            if (!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    }
}));

app.set("view engine", "handlebars");

//to be able to use different methods than html allows
app.use(methodOverride('_method'));


// Import routes and give the server access to them
require("./routes/html-routes.js")(app);
require("./routes/user-api-routes.js")(app);

//added the db require for models and sync with promise
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App now listening at localhost:" + PORT);
    });
});