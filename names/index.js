const peoplesnames = require("../country/state/city/index");
const first = require("../utilities/utils/index");

const getPeopleInCity = (peoplesnames) => {
  return first(peoplesnames);
};
module.exports = getPeopleInCity;
