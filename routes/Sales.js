const saleController = require("../controllers/saleController");

const routes = [
  {
    method: "GET",
    url: "/salesall/:userid",
    handler: saleController.getSale,
  },
  {
    method: "GET",
    url: "/sales/:saleid",
    handler: saleController.getSingleSale,
  },
  
  {
    method: "POST",
    url: "/sales",
    handler: saleController.addSale,
  },
  {
        method: 'PUT',
        url: '/sales/:id',
        handler: saleController.updateSale,
    },
    {
        method: 'DELETE',
        url: '/sales/:id',
        handler: saleController.deleteSale,
    }
];

module.exports = routes;