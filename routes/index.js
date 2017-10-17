const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200);
  res.send('Message from NodeCI');
});

module.exports = router;
