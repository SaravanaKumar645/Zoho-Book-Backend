// External boom dependency (error objects)
const boom = require("boom");

// Acquire Data Model
const PurchaseOrder= require("../models/PurchaseOrder");

// Get all purchase
exports.getPurchase = async (req, res) => {
  try {
    const purchases = await PurchaseOrder.find({user_id:req.params.id});
    return purchases;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get purchase by ID
exports.getSinglePurchase = async (req, res) => {
  try {
    const id = req.params.id;
    const purchase = await PurchaseOrder.findById(id);
    return purchase;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new purchase to model
exports.addPurchase = async (req, res) => {
  try {
    const purchase = new PurchaseOrder(req.body);
    return purchase.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// To update an purchase by id

exports.updatePurchase = async (req, res) => {
    try {
        const id = req.params.id
        const purchase = req.body
        const { ...updateData } = purchase
        const update = await PurchaseOrder.findByIdAndUpdate(id, updateData, { new: true })
        return update
    } catch (err) {
        throw boom.boomify(err)
    }
}

// To Delete purchase

exports.deletePurchase= async (req, res) => {
    try {
        const id = req.params.id
        const purchase = await PurchaseOrder.findByIdAndRemove(id)
        return purchase
    } catch (err) {
        throw boom.boomify(err)
    }
}
