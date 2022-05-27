const country = {
  name: "United States",
  flag: true,
};

module.exports.bd = {
  name: "Bangladesh",
  flag: true,
};

module.exports = {
  ...exports,
  country,
};
