const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new mongoose.Schema(
  {

    userId: {
      type: String
    },
    email: {
      type: String
    },
    paymentAmt: {
      type: Number
    },
    plan: {
      type: String
    },
    lastBillingDate: {
      type: Date
    },
    isAnnual: {
      type: Boolean
    },
    validUntil: {
      type: Date
    },
  },
);

const paymentModel = mongoose.model("Payment", paymentSchema);

module.exports = paymentModel;   // payment export

