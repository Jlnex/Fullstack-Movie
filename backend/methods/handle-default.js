const handleDefault = (req, res) => {
  res.statusCode = 404;

  res.write(
    JSON.stringify({
      success: false,
      message: "İstek attığınız endpoint mevcut değil",
    })
  );

  return res.end();
};

module.exports = handleDefault;
