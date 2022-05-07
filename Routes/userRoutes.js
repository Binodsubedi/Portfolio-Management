const express = require('express');
const { route } = require('express/lib/router');

const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).json({
    status: 'Success',
  });
});

module.exports = router;
