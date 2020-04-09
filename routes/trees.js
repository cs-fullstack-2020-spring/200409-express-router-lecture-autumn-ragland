// route module for trees

// create router
let express = require('express');
let router = express.Router();

// get request with Tree message
router.get('/successMessage/:plant_id', (req, res) => {
    res.send(`Tree ${req.params.plant_id} has been accessed via get request`)
});

// post request with Tree message
router.post('/successMessage/:plant_id', (req, res) => {
    res.send(`Tree ${req.params.plant_id} has been accessed via post request`)
});

// export router
module.exports = router;