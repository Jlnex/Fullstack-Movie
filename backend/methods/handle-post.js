const bodyParser = require("../utils/body-parser");
const validateData = require("../utils/validate-data");
const crypto = require("crypto");
const fs = require("fs");

const handlePost = async (req, res) => {
  const body = await bodyParser(req);

  validateData(body, res);

  body.id = crypto.randomUUID();

  let data = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));

  data.push(body);

  fs.writeFileSync("./data/movies.json", JSON.stringify(data), "utf-8");

  res.writeHead(201);
  return res.end(JSON.stringify(body));
};

module.exports = handlePost;
