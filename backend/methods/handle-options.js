const handleOptions = (req, res) => {
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");

  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  res.end();
};

module.exports = handleOptions;
