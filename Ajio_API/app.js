let express = require('express');
let app = express();
let port = 9121;
let Mongo = require('mongodb');
let bodyParser = require('body-parser');
let cors = require('cors');
let {dbConnect, getData} = require('./Controller/dbController');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

app.get('/', (req,res) => {
    res.send("Hi from Test")
})

app.get('/men', async(req,res) => {
    let query ={};
    let collection = "men";
    let output = await getData(collection, query);
    res.send(output)
});

app.get('/men', async(req,res) => {
    let query ={};
    if(req.query.categoryId) {
        query = {"category_id": (req.query.categoryId)}
    }
    let collection = "men";
    let output = await getData(collection, query);
    res.send(output)
});

app.get('/women', async(req,res) => {
    let query ={};
    let collection = "women";
    let output = await getData(collection, query);
    res.send(output)
});

app.get('/women', async(req,res) => {
    let query ={};
    if(req.query.categoryId) {
        query = {"category_id": (req.query.categoryId)}
    }
    let collection = "women";
    let output = await getData(collection, query);
    res.send(output)
});

app.get('/women', async(req,res) => {
    let query ={};
    if(req.query.size) {
        query = {"size":(req.query.size)}
    }
    let collection = "women";
    let output = await getData(collection, query);
    res.send(output)
});

app.get('/kids', async(req,res) => {
    let query ={};
    let collection = "kids";
    let output = await getData(collection, query);
    res.send(output)
});

app.get('/jewellery', async(req,res) => {
    let query ={};
    let collection = "jewellery";
    let output = await getData(collection, query);
    res.send(output)
});

app.get('/beauty', async(req,res) => {
    let query ={};
    let collection = "beauty";
    let output = await getData(collection, query);
    res.send(output)
});

app.get('/accessories', async(req,res) => {
    let query ={};
    let collection = "accessories";
    let output = await getData(collection, query);
    res.send(output)
});

app.get('/Home&Lifestyle', async(req,res) => {
    let query ={};
    let collection = "Home&Lifestyle";
    let output = await getData(collection, query);
    res.send(output)
});


app.listen (port,(err) => {
    dbConnect;
    if(err) throw err;
    console.log('Server is running on port ${port}')
})