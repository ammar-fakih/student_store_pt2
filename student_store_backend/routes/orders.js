const express = require('express');
const router = express.Router();
const Order = require('../models/orders');

router.get("/", async (req, res) => {
  const orders = Order.listOrdersForUser(req.user.id);
  res.json({ orders });
})

router.post("/", async (req, res) => {
  const order = Order.createOrder(req.user.id, req.body);
  res.json(order);
})