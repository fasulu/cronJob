const express = require('express')
const router = express.Router();

const { getAllPaid } = require('../controller/getAllPaid');

router.get("/paymentlist", getAllPaid);

router.all("*", (req, res) => {
    res.status(404).json({
        message: "Request not found"
    })
})

module.exports = router;
