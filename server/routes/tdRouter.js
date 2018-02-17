const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

router.post('/add', function (req, res) { 
    const item = req.body;
    console.log(item);
    const sqlText = `INSERT INTO todos
        (task, duedate, notes, complete) 
        VALUES ($1, $2, $3, $4)`;
    pool.query(sqlText, [item.task, item.duedate, item.notes, item.complete])
    .then ((result) => {
        console.log(`added item`);
        res.sendStatus(201);
    }).catch ((error) => {
        console.log(`error on posting new item`);
        res.sendStatus(500);
    })
})

router.get('/getitems', function (req, res) {
    const sqlText = `SELECT * FROM todos ORDER BY id ASC`;
    pool.query(sqlText)
    .then(function (result) {
        console.log('got items');
        res.send(result.rows);
    }).catch (function (error) {
        console.log(`error on post`);
        res.sendStatus(500);
    })
})

router.delete('/delete', function (req, res){
    let id = req.body.itemId;
    const sqlText = `DELETE FROM todos WHERE id = $1`;
    pool.query(sqlText, [id])
    .then(function (result) {
    console.log('deleted item');
    res.sendStatus(200);
}).catch (function (error) {
    console.log('error on delete');
    res.sendStatus(500);
    })
})

router.put('/complete', function (req, res) {
    let id = req.body.itemId;
    const sqlText = `UPDATE todos SET complete = 'yes' WHERE id= $1`;
    pool.query(sqlText, [id])
    .then(function (result) {
    console.log('completed item');
    res.sendStatus(200);
}).catch (function (error) {
    console.log('error on complete');
    res.sendStatus(500);
    })
})



module.exports = router;