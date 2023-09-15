exports.notFound404 = (req, res, next) => {
  // res.status(404).send("Page not found 404");

  res
    .status(404)
    .render("404", { pageTitle: "Page Not Found", path: "notfound" }); // miss path passing here - solution 1
};
