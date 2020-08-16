const express = require("express");
const router = express.Router();

// @route ---- GET api/auth
// @Desc --- Get logged in user
// @access --- Private

router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// @route ---- POST api/auth
// @Desc --- Auth user & logged in
// @access --- Public

router.post("/", (req, res) => {
  res.send("log in user");
});

module.exports = router;
