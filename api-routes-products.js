const express = require('express');
const { models } = require('./definitions.js');
const router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res) {
    try {
        const products = await models.product.findAll();
        res.status(200).json(products);
    }
    catch (e) {
        console.error(e);
        res.status(500).json({ message: e.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        if (id === undefined) {
            res.status(400).json({ message: 'A product id is required' });
            return;
        }

        const product = await models.product.findByPk(id);
        res.status(200).json(product);
    }
    catch (e) {
        console.error(e);
        res.status(500).json({ message: e.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newProduct = await models.product.create(req.body);
        res.status(200).json(newProduct);
    }
    catch (e) {
        console.error(e);
        res.status(500).json({ message: e.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        if (id === undefined) {
            res.status(400).json({ message: 'A product id is required' });
            return;
        }

        await models.product.destroy({
            where: {
                id,
            }
        });

        res.status(204).send();
    }
    catch (e) {
        console.error(e);
        res.status(500).json({ message: e.message });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        if (id === undefined) {
            res.status(400).json({ message: 'A product id is required' });
            return;
        }

        await models.product.update(req.body, {
            where: {
                id
            }
        });

        res.status(204).send();
    }
    catch (e) {
        console.error(e);
        res.status(500).json({ message: e.message });
    }
});

module.exports = router;
