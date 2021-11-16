// Import controller
const paymentController = require("../controllers/payementrecved");

const routes = [
  {
    method: "GET",
    url: "/paymentall/:userid",
    handler: paymentController.getpayments,
  },    
  {
    method: "GET",
    url: "/payments/:id",
    handler: paymentController.getSinglepayments,
  },
  {
    method: "POST",
    url: "/payments",
    handler: paymentController.addpayments,
  },
  {
    method: "PUT",
    url: "/payments/:id",
    handler: paymentController.updatepayments,
  },
  {
    method: "DELETE",
    url: "/payments/:id",
    handler: paymentController.deletepayment,
  },
];

module.exports = routes;