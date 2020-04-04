const express = require("express");
const router = express.Router();
const Coaster = require("../models/Coaster.model");

router.get("/getAllCoasters", (req, res) => {
  Coaster.find()
    .then((allCoasters) => res.json(allCoasters))
    .catch((err) => console.log("DB error", err));
});

router.get("/:id", (req, res) => {
  const coasterId = req.params.id;
  Coaster.findById(coasterId)
    .then((theCoaster) => res.json(theCoaster))
    .catch((err) => console.log("DB error", err));
});

router.post("/new", (req, res) => {
  const coaster = req.body;
  Coaster.create(coaster)
    .then((theNewCoaster) => res.json(theNewCoaster))
    .catch((err) => console.log("DB error", err));
});

router.post("/edit/:id", (req, res) => {
  const coaster = req.body;
  Coaster.findByIdAndUpdate(req.params.id, coaster)
    .then((editOne) => res.status(200).json(editOne))
    .catch((err) => {
      console.log("Error consultando la BBDD ", err);
      json({ message: "Saving user DDBB went wrong." });
    });
});

router.get("/delete/:id", (req, res) => {
  Coaster.findByIdAndRemove(req.params.id)
    .then((deleteOne) => res.status(200).json(deleteOne))
    .catch((err) => {
      console.log("Error consultando la BBDD ", err);
      json({ message: "Saving user to database went wrong." });
    });
});

module.exports = router;
