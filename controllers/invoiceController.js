// External boom dependency (error objects)
const boom = require("boom");

// Acquire Data Model
const Invoice = require("../models/Invoice");

// Get all cars
exports.getInvoice = async (req, res) => {
  try {
    const invoices = await Invoice.find({user_id:req.params.useid});
    return invoices;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get car by ID
exports.getSingleInvoice = async (req, res) => {
  try {
    const id = req.params.id;
    const invoice = await Invoice.findById({_id:req.params.invoiceid});
    return invoice;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new car to model
exports.addInvoice = async (req, res) => {
  try {
    const invoice = new Invoice(req.body);
    return invoice.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// To update an invoice by id

exports.updateInvoice = async (req, res) => {
    try {
        const id = req.params.id
        const invoice = req.body
        const { ...updateData } = invoice
        const update = await Invoice.findByIdAndUpdate(id, updateData, { new: true })
        return update
    } catch (err) {
        throw boom.boomify(err)
    }
}

// To Delete invoice

exports.deleteInvoice = async (req, res) => {
    try {
        const id = req.params.id
        const invoice = await Invoice.findByIdAndRemove(id)
        return invoice
    } catch (err) {
        throw boom.boomify(err)
    }
}
