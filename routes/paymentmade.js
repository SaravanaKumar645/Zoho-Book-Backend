// Import controller
const payController = require("../controllers/paymentmade");

const routes = [
  {
    method: "GET",
    url: "/payall/:userid",
    handler: payController.getpays,
  },    
  {
    method: "GET",
    url: "/pays/:id",
    handler: payController.getSinglepays,
  },
  {
    method: "POST",
    url: "/pays",
    handler: payController.addpays,
  },
  {
    method: "PUT",
    url: "/pays/:id",
    handler: payController.updatepays,
  },
  {
    method: "DELETE",
    url: "/pays/:id",
    handler: payController.deletepay,
  },
];

module.exports = routes;