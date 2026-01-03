const keys = [
  "title",
  "year",
  "genre",
  "rating",
  "description",
  "duration",
  "cast",
  "language",
  "director",
  "image",
];

const validateData = (body, res) => {
  const missingFields = keys.filter((key) => !body[key]);

  if (missingFields.length > 0) {
    res.writeHead(400);
    return res.end(
      JSON.stringify({
        success: false,
        message: "Gönderdiğiniz bilgiler eksik",
        missingFields,
      })
    );
  }
};

module.exports = validateData;
