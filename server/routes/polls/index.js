const express = require('express');
const router = express.Router();

const savePoll = require('./savePoll');
const getPolls = require('./getPolls');
const editPoll = require('./editPoll');
const deletePoll = require('./deletePoll');

router.post('/', savePoll);
router.get('/', getPolls);
router.patch('/:id', editPoll);
router.delete('/:id', deletePoll);

module.exports = router;
