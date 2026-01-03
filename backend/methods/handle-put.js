const bodyParser = require("../utils/body-parser");
const validateData = require("../utils/validate-data");
const fs = require("fs");

const handlePut = async (req, res) => {
  const id = req.url.split("/")[2];

  const body = await bodyParser(req);

  validateData(body, res);

  const movies = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));

  const index = movies.findIndex((movie) => movie.id === id);

  movies[index] = {
    ...body,
    id,
  };

  fs.writeFileSync("./data/movies.json", JSON.stringify(movies), "utf-8");

  return res.end(JSON.stringify(movies[index]));
};

module.exports = handlePut;
