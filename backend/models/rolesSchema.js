const mongoose = require("mongoose");
const rolesSchema = new mongoose.Schema({
  role: String,
  access:[String],
});

module.exports = mongoose.model('Roles', rolesSchema);
