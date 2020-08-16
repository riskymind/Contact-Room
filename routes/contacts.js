const express = require("express");
const router = express.Router();

// @route ---- GET api/contacts
// @Desc --- Get all user contacts
// @access --- Private

router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route ---- POST api/contacts
// @Desc --- Add new contact
// @access --- Private

router.post("/", (req, res) => {
  res.send("Add contacts");
});

// @route ---- PUT api/contacts/:id
// @Desc --- Update contact
// @access --- Private

router.put("/:id", (req, res) => {
  res.send("Update contacts");
});

// @route ---- DELETE api/contacts/:id
// @Desc --- Delete a contact
// @access --- Private

router.delete("/", (req, res) => {
  res.send("Delete contacts");
});
module.exports = router;
