const express = require('express');
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/* POST create a new contact */
router.post('/', async (req, res) => {
  const { name, cpf, rg, email, phone, reason, description } = req.body;

  try {
    const newContact = await prisma.contact.create({
      data: {
        name,
        cpf,
        rg,
        email,
        phone,
        reason,
        description
      }
    });

    res.status(201).json(newContact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create contact' });
  }
});

module.exports = router;
