const mongoose = require("mongoose");

const AdSchema = new mongoose.Schema({
  primaryText: {
    type: String,
    required: true,
  },
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "company",
    required: true,
  },
  headline: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
    default: "",
  },
  CTA: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

AdSchema.index({ primaryText: 'text', headline: 'text', description: 'text' });
const Ad = mongoose.model("ad", AdSchema);

module.exports = { Ad };
