const express = require('express');
const router = express.Router();
const Item = require('../model/item');

router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const item = new Item({
        name: req.body.name,
        itemStock: req.body.stock,
        itemDescription: req.body.desc,
    });

    try{
        const newItem = await item.save();
        res.status(201).json(newItem);
    }catch(error){
        res.status(400);
    }
});

module.exports = router;