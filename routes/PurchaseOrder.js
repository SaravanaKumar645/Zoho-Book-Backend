// Import controller
const purchaseOrderController = require("../controllers/purchaseOrderController");

const routes = [
  {
    method: "GET",
    url: "/purchasesall/:userid",
    handler: purchaseOrderController.getPurchase,
  },
  {
    method: "GET",
    url: "/purchases/:id",
    handler: purchaseOrderController.getSinglePurchase,
  },
  {
    method: "POST",
    url: "/purchases",
    handler: purchaseOrderController.addPurchase,
  },
  {
    method: "PUT",
    url: "/purchases/:id",
    handler: purchaseOrderController.updatePurchase,
  },
  {
    method: "DELETE",
    url: "/purchases/:id",
    handler: purchaseOrderController.deletePurchase,
  },
];

module.exports = routes;
