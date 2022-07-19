const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

// All remaining requests return the React app, so it can handle routing.
router.get("*", (request, response) => {
  response.sendFile(path.resolve(__dirname, "../react-ui/build", "index.html"));
});

module.exports = router;
