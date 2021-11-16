// Import controller
const customerController = require("../controllers/customerController");

const routes = [
  {
    method: "GET",
    url: "/api/customers/:userid",
    handler: customerController.getCustomer,
  },
  {
    method: "GET",
    url: "/api/customer/:id",
    handler: customerController.getSingleCustomer,
  },
  {
    method: "GET",
    url: "/api/customersale/:cust",
    handler: customerController.getCustomersale,
  },
  {
    method: "POST",
    url: "/api/customer",
    handler: customerController.addCustomer,
  },
  {
    method: "PUT",
    url: "/api/customerupdate/:id",
    handler: customerController.updateCustomer,
  },
  {
    method: "DELETE",
    url: "/api/customerdelete/:id",
    handler: customerController.deleteCustomer,
  },
];

module.exports = routes;
