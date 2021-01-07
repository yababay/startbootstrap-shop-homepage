const express = require('express'),
    db = require('./db'),
    router = express.Router();

router.post('/id', (req, res)=> {
    const {body} = req
    body.created = true
    db.query('INSERT INTO orders SET ?', [body], err => {
        if(err) throw err 
              db.query('SELECT LAST_INSERT_ID()', function(err, data) {
              const id = data[0]['LAST_INSERT_ID()']  
              res.json({id})
        })  
    })
})

const addLine = (line) => {
    return new Promise ((resolve, reject) => {
        db.query('INSERT INTO orderlines SET ?', [line], err => {
            if(err) reject(err)
            else resolve()
        })
    })
}

router.post('/lines', (req, res)=> {
    const {id, basket} = req.body
    const order_id = id
    const lines = basket.map(({id, qnty, price}) => ({product_id: id, order_id, price, qnty}))
    Promise.all(lines.map(line => addLine(line)))
    .then(()=> {
        res.json({
          status: 200,
          message: "New order is added successfully."
        })
    })
});

module.exports = router;

