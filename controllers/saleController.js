// External boom dependency (error objects)
const boom = require("boom");

// Acquire Data Model
const Sale= require("../models/Sale");

// Get all Sale
exports.getSale = async (req, res) => {
  try {
    const Sales = await Sale.find({user_id:req.params.userid});
    return Sales;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get Sale by ID
exports.getSingleSale = async (req, res) => {
  try {
    // const id = req.params.id;
    const Sales = await Sale.findById({_id:req.params.saleid});
    return Sales;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new Sale to model
exports.addSale = async (req, res) => {
  try {
    const sale = new Sale(req.body);
    return sale.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// To update an Sale by id

exports.updateSale = async (req, res) => {
    try {
        const id = req.params.id
        const Sale = req.body
        const { ...updateData } = Sale
        const update = await Sale.findByIdAndUpdate(id, updateData, { new: true })
        return update
    } catch (err) {
        throw boom.boomify(err)
    }
}

// To Delete Sale

exports.deleteSale= async (req, res) => {
    try {
        const id = req.params.id
        const Sale = await Sale.findByIdAndRemove(id)
        return Sale
    } catch (err) {
        throw boom.boomify(err)
    }
}
exports.getSalebyname = async (req, res) => {
  try {
    const Sales = await Sale.find({customer_name:req.params.customer});
    return Sales;
  } catch (err) {
    throw boom.boomify(err);
  }
};

