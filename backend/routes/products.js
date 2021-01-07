const express = require('express'),
  db = require('./db'),
  router = express.Router()

router.get('', (req, res) => {
  let sql = `SELECT * FROM products`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Product lists retrieved successfully"
    })
  })
});

module.exports = router;

