const db = require("../models");
module.exports = function(app) {

  app.get('/', function (req, res) {
    console.log("/get");
    res.render("index");
  });
  app.get("/api/messages", (req, res) => {
    console.log("/get/api/messages")
    res.render("index","hello" );
  });

  app.post("/api/messages", (req,res) => {
    console.log("Inside api-routes /api/messages");
    console.log(req.body);
    // TODO : Insert Andrew's code here
        db.Message.create({
          username : req.body.name,
          message: req.body.message,
          sentiment : 0,  //TODO Andrew's code
          magnitude :0 //TODO Andrew's code
      }).then((result) => {
        console.log(result);
        res.json(result.dataValues);
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  app.get("/api/messages",(req,res) =>{
    console.log();
    var result = db.Message.findAll()
    res.render("index", {Message : result}) //USE HANDLEBARS HERE
  });
};
