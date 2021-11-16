// External boom dependency (error objects)
const boom = require("boom");

// Acquire Data Model
const Item = require("../models/Item");

// Get all Items
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find({user_id:req.params.userid});
    return items;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get Items by ID
exports.getSingleItem = async (req, res) => {
  try {
    const id = req.params.id;
    const item = await Item.findById(id);
    return item;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new Items to model
exports.addItem = async (req, res) => {
  try {
    const item = new Item(req.body);
    return item.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// To update an item by id

exports.updateItem = async (req, res) => {
    try {
        const id = req.params.id
        const item = req.body
        const { ...updateData } = item
        const update = await Item.findByIdAndUpdate(id, updateData, { new: true })
        return update
    } catch (err) {
        throw boom.boomify(err)
    }
}

// To Delete Item

exports.deleteItem = async (req, res) => {
    try {
        const id = req.params.id
        const item = await Item.findByIdAndRemove(id)
        return item
    } catch (err) {
        throw boom.boomify(err)
    }
}
