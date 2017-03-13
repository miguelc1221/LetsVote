const express = require("express");
const router = express.Router();

const savePoll = require("./savePoll");
const getPolls = require("./getPolls");
const editPoll = require("./editPoll");
const deletePoll = require("./deletePoll");
const getSinglePoll = require("./getSinglePoll");

router.post("/", savePoll);
router.get("/", getPolls);
router.get("/vote/:id", getSinglePoll);
router.patch("/vote", editPoll);
router.delete("/:id", deletePoll);

module.exports = router;
