const db = require("../models");

module.exports = function(app) {
  app.get("/", (req, res) => {
    db.Message.findAll().then(result => {
      const hbsObject = {
        messages: result
      };
      console.log(JSON.stringify(hbsObject, null, 2));
      res.render("index", hbsObject);
    });

    app.post("/messages", (req, res) => {
      res.render("index", hbsObject);
    });
  });
};
