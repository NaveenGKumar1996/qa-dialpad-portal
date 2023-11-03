const express = require('express')
const router = express.Router()

router.route("/").get((req, res) => {
    res.status(200).json({ message: "Get all products"})
});

router.route("/:productId").get((req, res) => {
    res.status(200).json({message: "Here you go with list of products"})
})


module.exports(router)


