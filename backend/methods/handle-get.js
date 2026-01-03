const fs = require("fs");

const handleGet = (req, res) => {
  const id = req.url.split("/")[2];

  if (req.url === "/movies") {
    const movies = fs.readFileSync("./data/movies.json", "utf-8");

    return res.end(movies);
  }

  if (id) {
    const movies = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));

    const movie = movies.find((movie) => movie.id === id);

    if (!movie) {
      res.writeHead(404);
      return res.end(
        JSON.stringify({
          success: false,
          message: "Aradığınız film bulunamadı",
        })
      );
    }

    return res.end(JSON.stringify(movie));
  }
};

module.exports = handleGet;
