const Dog = require('../models/Post');

async function index (req, res) {
    try {
        const dogs = await Dog.all;
        res.status(200).json(dogs)
    } catch (err) {
        res.status(500).json({err})
    }
}

module.exports = { index}