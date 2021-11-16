// External boom dependency (error objects)
const boom = require("boom");

// Acquire Data Model
const Customer= require("../models/Customer");

// Get all Customer
exports.getCustomer = async (req, res) => {
  try {
    const customers = await Customer.find({user_id:req.params.userid});
    return customers;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get Customer by ID
exports.getSingleCustomer = async (req, res) => {
  try {
    const id = req.params.id;
    const customer = await Customer.findById({_id:id});
    return customer;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new Customer to model
exports.addCustomer = async (req, res) => {
  try {
    const customer = new Customer(req.body);
    return customer.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// To update an Customer by id

exports.updateCustomer = async (req, res) => {
    try {
        const id = req.params.id
        const customer = req.body
        const { ...updateData } = customer
        const update = await Customer.findByIdAndUpdate(id, updateData, { new: true })
        return update
    } catch (err) {
        throw boom.boomify(err)
    }
}

// To Delete Customer

exports.deleteCustomer= async (req, res) => {
    try {
        const id = req.params.id
        const customer = await Customer.findByIdAndRemove(id)
        return customer
    } catch (err) {
        throw boom.boomify(err)
    }
},
exports.getCustomersale = async (req, res) => {
  try {
    const customers = await Customer.find({first_name:req.params.cust});
    return customers;
  } catch (err) {
    throw boom.boomify(err);
  }
};
