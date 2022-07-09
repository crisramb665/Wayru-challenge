const { Router } = require("express");
const router = Router();

const db = require("../database/WayruDatabase.json");
// console.log(db);

router.get("/", (req, res) => {
    res.json(db);
});

module.exports = router;
