const express = require ("express")

const router = express.Router ();

router.get("/", (req, res) =>{
    res.send("GET raíz")
})
router.get("/:id", (req, res) =>{
    res.send("GET ID")
})
router.get("/", (req, res) =>{
    res.send("POST raíz")
})
router.get("/:id", (req, res) =>{
    res.send("PUT ID")
})
router.delete("/:id", (req, res) =>{
    res.send("DELETE ID")
})

module.exports = router;