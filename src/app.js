const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

const routes = require('./routes/routes')

app.use('/', routes)

app.listen(3000, ()=>{
    console.log('servidor corriendo')
})
