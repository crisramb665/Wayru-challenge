const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
    const data = 
    [
        {
            "name": "Cristian",
            "lastname": "Romero",
            "job": "Developer"
        },
        {
            "name": "Yisela",
            "lastname": "Ferreira",
            "job": "Mercadologa"
        }
    ]
    res.json(data);
});

module.exports = router;
// export default router;