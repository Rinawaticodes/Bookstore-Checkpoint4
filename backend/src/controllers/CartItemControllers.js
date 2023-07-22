const models = require("../models");

const browse = (req, res) => {
  models.panier
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const panier = req.body;
  models.panier
    .save(panier)
    .then(([result]) => {
      res.location(`/paniers/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  add,
};
