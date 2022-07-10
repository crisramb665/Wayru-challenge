const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
    const data = 
    [
        {
            "name": "Cristian",
            "lastname": "Romero",
            "job": "Developer",
            "age": 26
        },
        {
            "name": "Yisela",
            "lastname": "Ferreira",
            "job": "Mercadologa",
            "age": 24
        },
        {
            "name": "Miguel",
            "lastname": "Carriazo",
            "job": "Developer",
            "age": 18
        }
    ]
    res.json(data);
});

module.exports = router;
// export default router;