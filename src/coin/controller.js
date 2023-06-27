import { Router } from "express";
import priceModel from "../models/price.mode";
import alertSubscriptionModel from "../models/alertSubscription.model";

const route = Router();

route.get("/:coin_name/price", async (req, res) => {
  const priceHistory = await priceModel
    .find(
      { coin_name: req.params.coin_name },
      { _id: false, coin_name: 1, price: 1, createdAt: 1 }
    )
    .sort({ createdAt: -1 });

  res.status(200).json({ data: priceHistory });
});

route.post("/:coin_name/subscribe", async (req, res) => {
  const { email, difference_percentage } = req.body;
  if (!email || !difference_percentage)
    return res.status(400).json({ message: "bad body" });

  const alert = await alertSubscriptionModel.create({
    email,
    difference_percentage,
    coin_name: req.params.coin_name,
  });

  return res.status(201).json({ data: alert });
});
