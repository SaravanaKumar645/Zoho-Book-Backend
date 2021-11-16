// External boom dependency (error objects)
const boom = require("boom");

// Acquire Data Model
const Payment = require("../models/paymentreceived");

// Get all Items
exports.getpayments = async (req, res) => {
  try {
    const items = await Payment.find({user_id:req.params.userid});
    return items;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get Items by ID
exports.getSinglepayments = async (req, res) => {
  try {
    const id = req.params.id;
    const item = await Payment.findById(id);
    return item;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new Items to model
exports.addpayments = async (req, res) => {
  try {
    const item = new Payment(req.body);
    return item.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// To update an item by id

exports.updatepayments = async (req, res) => {
    try {
        const id = req.params.id
        const item = req.body
        const { ...updateData } = item
        const update = await Payment.findByIdAndUpdate(id, updateData, { new: true })
        return update
    } catch (err) {
        throw boom.boomify(err)
    }
}

// To Delete Item

exports.deletepayment = async (req, res) => {
    try {
        const id = req.params.id
        const item = await Payment.findByIdAndRemove(id)
        return item
    } catch (err) {
        throw boom.boomify(err)
    }
}
