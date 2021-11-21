// Require external mongoose modules
const mongoose = require("mongoose");
const fastify = require("fastify")({ logger: true });
require("dotenv").config();
const fastifyCors = require("fastify-cors");
const boom = require("boom");
fastify.register(require("fastify-jwt"), {
  secret: "test@#$%$",
});
fastify.register(require("./fastroute.js/auth"));
fastify.register(require("./fastmiddleware.js/authmiddleware"));
// /heroku logs -a zoho-books-server --tail
// Connect to DB
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.8sjto.mongodb.net/Zoho-Books?retryWrites=true&w=majority`,
    { useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB connected…"))
  .catch((err) => console.log(err));

// Require the fastify framework and instantiate it

fastify.register(fastifyCors, { origin: "*" });
// Import routes
const Item = require("./routes/Item");
const estimates = require("./routes/Estimate");
const customer = require("./routes/Customer");
const sale = require("./routes/Sales");
const invoice = require("./routes/Invoice");
const purchase = require("./routes/PurchaseOrder");
const vendor = require("./routes/Vendor");
const user = require("./routes/user");
const payment = require("./routes/payementrecved");
const pay = require("./routes/paymentmade");

Item.forEach((route) => {
  fastify.route(route);
});
pay.forEach((route) => {
  fastify.route(route);
});
payment.forEach((route) => {
  fastify.route(route);
});
estimates.forEach((route) => {
  fastify.route(route);
});
customer.forEach((route) => {
  fastify.route(route);
});
sale.forEach((route) => {
  fastify.route(route);
});
invoice.forEach((route) => {
  fastify.route(route);
});
purchase.forEach((route) => {
  fastify.route(route);
});
vendor.forEach((route) => {
  fastify.route(route);
});
user.forEach((route) => {
  fastify.route(route);
});

// Decalaring a route
fastify.get("/", async (req, res) => {
  return { hello: "world" };
});
fastify.register(require("fastify-nodemailer"), {
  pool: true,
  service: "gmail",
  secure: true,
  // use TLS
  auth: {
    user: "techpiratesteam@gmail.com",
    pass: "Pirates@123",
  },
});

fastify.post("/sendmail/:email", (req, reply, next) => {
  let { nodemailer } = fastify;
  let recipient = req.params.email;
  let { body } = req.body;
  let { subject } = req.body;

  nodemailer.sendMail(
    {
      from: "techpiratesteam@gmail.com",
      to: recipient,
      subject: subject,
      text: body,
    },
    (err, info) => {
      if (err) next(err);
      reply.send({
        messageId: info.messageId,
      });
    }
  );
});
fastify.post("/sendsalemail/:email", (req, reply, next) => {
  let { nodemailer } = fastify;
  let recipient = req.params.email;
  let { content } = req.body;

  nodemailer.sendMail(
    {
      from: "techpiratesteam@gmail.com",
      to: recipient,

      text: `Hello ${content.customername} ,\n You have Purchaced a Item ${content.itemName} of rupees ${content.amount}  with quantity of ${content.quantity} Your Reference id is : ${content.sreference} Estimated Date : ${content.estimateDate}\n Thank you , Welcome Back - Techpirates`,
    },
    (err, info) => {
      if (err) next(err);
      reply.send({
        messageId: info.messageId,
      });
    }
  );
});
// Import Swagger Options
const swagger = require("./config/swagger");
// Register Swagger
fastify.register(require("fastify-swagger"), swagger.options);

// Running the server
const start = async () => {
  try {
    // process.env.PORT,'0.0.0.0'
    await fastify.listen(process.env.PORT || 4000, "0.0.0.0");
    fastify.swagger();
    fastify.log.info(`listening on ${fastify.server.address().port}`);
  } catch (err) {
    throw boom.boomify(err);
  }
};
start();
