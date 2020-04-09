let express = require('express');
let router = express.Router();

router.get('/successMessage/:plant_id', (req,res) => {
    res.send(`Tree ${req.params.plant_id} was accessed via get request`);
});

router.post('/successMessage/:plant_id', (req,res) => {
    res.send(`Tree ${req.params.plant_id} was accessed via post request`);
});

module.exports = router;