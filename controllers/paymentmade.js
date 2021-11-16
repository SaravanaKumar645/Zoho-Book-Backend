// External boom dependency (error objects)
const boom = require("boom");

// Acquire Data Model
const Pay = require("../models/paymentmade");

// Get all Items
exports.getpays = async (req, res) => {
  try {
    const items = await Pay.find({user_id:req.params.userid});
    return items;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get Items by ID
exports.getSinglepays = async (req, res) => {
  try {
    const id = req.params.id;
    const item = await Pay.findById(id);
    return item;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new Items to model
exports.addpays = async (req, res) => {
  try {
    const item = new Pay(req.body);
    return item.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// To update an item by id

exports.updatepays = async (req, res) => {
    try {
        const id = req.params.id
        const item = req.body
        const { ...updateData } = item
        const update = await Pay.findByIdAndUpdate(id, updateData, { new: true })
        return update
    } catch (err) {
        throw boom.boomify(err)
    }
}

// To Delete Item

exports.deletepay = async (req, res) => {
    try {
        const id = req.params.id
        const item = await Pay.findByIdAndRemove(id)
        return item
    } catch (err) {
        throw boom.boomify(err)
    }
}
