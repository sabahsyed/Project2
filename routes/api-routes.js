const db = require("../models");

module.exports = function(app) {
  app.get("/api/index", (req, res) => {
    res.json({
      username: req.messages.username,
      message: req.messages.message,
      sentiment: req.messages.sentiment,
      likes: req.messages.likes,
      dislikes: req.messages.dislikes,
      createdAt: req.messages.createdAt,
      id: req.messages.id
    });
  });

  app.post("/api/index", (req, res) => {
    res.json({
      username: req.messages.username,
      message: req.messages.message,
      sentiment: req.messages.sentiment,
      likes: req.messages.likes,
      dislikes: req.messages.dislikes,
      createdAt: req.messages.createdAt,
      id: req.messages.id
    });
  });

  app.post("/api/index", (req, res) => {
    db.Messages.create({
      username: req.messages.username,
      message: req.messages.message,
      sentiment: req.messages.sentiment,
      likes: req.messages.likes,
      dislikes: req.messages.dislikes,
      createdAt: req.messages.createdAt,
      id: req.messages.id
    })
      .then(() => {
        res.redirect(307, "/api/index");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });
};
