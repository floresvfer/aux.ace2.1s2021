const express = require('express');
const { models } = require('../conn');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await models.user.findAll();
        res.status(200).json(users);
    } catch (e){
        console.error(e);
        res.status(500).json({message: e.message});
    }
});

module.exports = router;
