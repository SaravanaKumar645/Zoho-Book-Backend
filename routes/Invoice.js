// Import controller
const invoiceController = require("../controllers/invoiceController");

const routes = [
  {
    method: "GET",
    url: "/invoicesall/:useid",
    handler: invoiceController.getInvoice,
  },
  {
    method: "GET",
    url: "/invoices/:invoiceid",
    handler: invoiceController.getSingleInvoice,
  },
  {
    method: "POST",
    url: "/invoices",
    handler: invoiceController.addInvoice,
  },
  {
    method: "PUT",
    url: "/updateinvoices/:id",
    handler: invoiceController.updateInvoice,
  },
  {
    method: "DELETE",
    url: "/deleteinvoices/:id",
    handler: invoiceController.deleteInvoice,
  },
];

module.exports = routes;
