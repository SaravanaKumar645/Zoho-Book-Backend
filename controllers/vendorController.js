// External boom dependency (error objects)
const boom = require("boom");

// Acquire Data Model
const Vendor = require("../models/Vendor");

// Get all vendor
exports.getVendor = async (req, res) => {
  try {
    const vendors = await Vendor.find({user_id:req.params.userid});
    return vendors;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get vendor by ID
exports.getSingleVendor = async (req, res) => {
  try {
    const id = req.params.id;
    const vendor = await Vendor.findById(id);
    return vendor;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new vendor to model
exports.addVendor = async (req, res) => {
  try {
    const vendor = new Vendor(req.body);
    return vendor.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// To update an vendor by id

exports.updateVendor = async (req, res) => {
  try {
    const id = req.params.id;
    const vendor = req.body;
    const { ...updateData } = vendor;
    const update = await Vendor.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// To Delete vendor

exports.deleteVendor = async (req, res) => {
  try {
    const id = req.params.id;
    const vendor = await Vendor.findByIdAndRemove(id);
    return vendor;
  } catch (err) {
    throw boom.boomify(err);
  }
};
