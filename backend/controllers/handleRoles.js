const Roles = require("../models/rolesSchema");

const handleRoles = async () => {
  const access = ["dashboard", "profile","my-tickets","my-profile"];
  const role = "submitter";
  const rolesData = new Roles({
    role,
    access,
  });
  await rolesData.save();
};
module.exports = handleRoles;
