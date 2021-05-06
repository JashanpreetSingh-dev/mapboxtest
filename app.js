const express = require('express');
const app = express();

app.get('/', async (req, res) => {
    res.render('index', {title: 'Map'});
})
app.set('view engine', 'ejs');

app.listen(4000, () => console.log("server is up"));