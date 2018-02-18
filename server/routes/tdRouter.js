const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

router.post('/add', function (req, res) { 
    const item = req.body;
    console.log(item);
    const sqlText = `INSERT INTO todos
        (task, duedate, complete) 
        VALUES ($1, $2, $3)`;
    pool.query(sqlText, [item.task, item.duedate, item.complete])
    .then ((result) => {
        console.log(`added item`);
        res.sendStatus(201);
    }).catch ((error) => {
        console.log(`error on posting new item`);
        res.sendStatus(500);
    })
})

router.get('/getitems', function (req, res) {
    const sqlText = `SELECT * FROM todos
    LEFT JOIN categories on categories.task_id = todos.id ORDER BY complete`;
    pool.query(sqlText)
    .then(function (result) {
        console.log('got items');
        res.send(result.rows);
    }).catch (function (error) {
        console.log(`error on get`);
        res.sendStatus(500);
    })
})

router.post('/addcategory', function (req, res) {
    let item = req.body;
    const sqlText = `INSERT INTO categories (category, task_id)
        VALUES ($1, (SELECT id FROM todos WHERE task = $2))`
    pool.query(sqlText, [item.category, item.task])
    .then(function (result) {
        console.log('added category ');
        res.sendStatus(201);
    }).catch(function (error) {
        console.log('error on category');
        res.sendStatus(500);
    })
})

router.delete('/delete', function (req, res){
    let id = req.body.itemId;
    console.log(id);
    
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

router.put('/incomplete', function (req, res) {
    let id = req.body.itemId;
    const sqlText = `UPDATE todos SET complete = 'no' WHERE id= $1`;
    pool.query(sqlText, [id])
    .then(function (result) {
    console.log('item no longer completed ');
    res.sendStatus(200);
}).catch (function (error) {
    console.log('error on incomplete');
    res.sendStatus(500);
    })
})


module.exports = router;