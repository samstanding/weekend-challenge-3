const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

const tdRouter = require('./routes/tdRouter');
app.use('/todo', tdRouter);

const port =5000;

app.use(express.static('server/public'));

app.listen(port, function () {
    console.log(`listening on port ${port}`);
})