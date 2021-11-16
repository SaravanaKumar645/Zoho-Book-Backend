// Import controller
const vendorController = require("../controllers/vendorController");

const routes = [
  {
    method: "GET",
    url: "/vendorsall/:userid",
    handler: vendorController.getVendor,
  },
  {
    method: "GET",
    url: "/vendors/:id",
    handler: vendorController.getSingleVendor,
  },
  {
    method: "POST",
    url: "/vendors",
    handler: vendorController.addVendor,
  },
  {
    method: "PUT",
    url: "/vendors/:id",
    handler: vendorController.updateVendor,
  },
  {
    method: "DELETE",
    url: "/vendors/:id",
    handler: vendorController.deleteVendor,
  },
];

module.exports = routes;
