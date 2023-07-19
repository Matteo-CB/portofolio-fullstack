const mongoose = require("mongoose");

const thingSchema = mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  coverPublic: { type: String, required: true },
  code: { type: String, required: true },
  coverStyle: { type: String, required: true },
  techno: { type: Array, required: true },
  outils: { type: Array, required: true },
  methodologies: { type: Array, required: true },
  carousel: { type: Array, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("Thing", thingSchema);
