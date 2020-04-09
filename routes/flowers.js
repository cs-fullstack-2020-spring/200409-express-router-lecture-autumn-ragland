// route module for flowers

// create router
let express = require('express');
let router = express.Router();

// get request with Flower message
router.get('/successMessage/:plant_id', (req, res) => {
    res.send(`Flower ${req.params.plant_id} has been accessed via get request`)
});

// post request with Flower message
router.post('/successMessage/:plant_id', (req, res) => {
    res.send(`Flower ${req.params.plant_id} has been accessed via post request`)
});

// export router
module.exports = router;