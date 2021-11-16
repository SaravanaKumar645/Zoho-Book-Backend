// Import controller
const estimateController = require("../controllers/estimateController");

const routes = [
  {
    method: "GET",
    url: "/api/allestimates/:userid",
    handler: estimateController.getEstimate,
  },
  {
    method: "GET",
    url: "/api/estimates/:id",
    handler: estimateController.getSingleEstimate,
  },
  {
    method: "POST",
    url: "/api/estimates",
    handler: estimateController.addEstimate,
  },
  {
        method: 'PUT',
        url: '/api/upadteestimates/:id',
        handler: estimateController.updateEstimate
    },
    {
        method: 'DELETE',
        url: '/api/edeletestimates/:id',
        handler: estimateController.deleteEstimate
    }
];

module.exports = routes;