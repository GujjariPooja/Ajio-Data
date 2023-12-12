let express = require('express');
let app = express();
let port = 3002
let Mongo = require('mongodb');
let {ObjectId} = require('mongodb')
let bodyParser = require('body-parser');
let cors = require('cors');
let {dbConnect, getData, postData, updateData, deleteData} = require('./Controller/dbController');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

app.get('/', (req, res) => {
    res.send("Hi from Express")
})

app.get('/men', async(req,res) => {
    let query = {};
    let collection = "Men";
    let output = await getData(collection, query);
    res.send(output)
});

app.get('/rating', async(req,res) => {
    let query = {};
    if(req.query.average_rating){
        query = {"average_rating": (req.query.average_rating)}
        console.log(query);
        console.log(req.query.average_rating);
    }
    let collection = "Men";
    let output = await getData(collection, query);
    console.log(output);
    res.send(output)
});

app.get('/average_rating', async(req,res)=> {
    let query = {};
    if(req.query.average_rating){
        query = {"average_rating": (req.query.average_rating)}
    }else if(req.query.price){
        query = {"price": (req.query.price)}
    }
    let collection = "Men";
    let output = await getData(collection, query);
    res.send(output);
});

app.get('/mens', async(req, res) => {
    let query = {};
    if(req.query.average_rating && req.query.price){
        query = {
            "average_rating": (req.query.average_rating),
            "price": (req.query.price)
        }
    }
    else if(req.query.average_rating){
        query = {"average_rating": (req.query.average_rating)}
    }else if(req.query.price) {
        query = {"price": (req.query.price)}
    }
    let collection = "Men";
    let output = await getData(collection, query);
    res.send(output);
});

app.get('/id', async(req, res) => {
    let query = {};
    if(req.query.category_id && req.query.average_rating && req.query.price){
        query = {
            "category_id": Number(req.query.category_id),
            "average_rating": (req.query.average_rating),
            "price": (req.query.price)
        }
    }
    else if(req.query.category_id){
        query = {"category_id": Number(req.query.category_id)}
    }
    else if(req.query.average_rating){
        query = {"average_rating": (req.query.average_rating)}
    }else if(req.query.price) {
        query = {"price": (req.query.price)}
    }
    let collection = "Men";
    let output = await getData(collection, query);
    res.send(output);
});


app.get('/women', async(req,res) => {
    let query = {};
    let collection = "Women";
    let output = await getData(collection, query);
    res.send(output)
});

app.get('/categoryId', async(req, res) => {
    let query = {};
    let collection = "Women";
    if(req.query.category_id){
        query = {"category_id": Number(req.query.category_id)}

    }
    let output = await getData(collection, query);
    res.send(output)
});
app.get('/details/:id', async(req, res) => {
    let id = Number(req.params.id);
    let collection = "Women";
    let query = {"id": id}
    let output = await getData(collection, query);
    res.send(output)
});

app.get('/Second/:id', async(req, res) => {
    let id = Number(req.params.id);
    let collection = "Women";
    let query = {"id": id}
    let output = await getData(collection, query);
    res.send(output)
});

app.get('/user', async(req,res) => {
    let query = {};
    if(req.query.average_rating){
        query = {"average_rating": (req.query.average_rating)}
        console.log(query);
        console.log(req.query.average_rating);
    }
    let collection = "Women";
    let output = await getData(collection, query);
    console.log(output);
    res.send(output)
});

app.get('/size', async(req,res) => {
    let query = {};
    let collection = "Women";
    if(req.query.size){
        query = {"size": (req.query.size)}
        console.log(query);
        console.log(req.query.size);
    }
    let output = await getData(collection, query);
    console.log(output);
    res.send(output)
});

app.get('/Second', async(req,res) => {
    let query = {};
    let collection = "Women";
    if(req.query.size){
        query = {"size": (req.query.size)}
        console.log(query);
        console.log(req.query.size);
    }
    let output = await getData(collection, query);
    console.log(output);
    res.send(output)
});

app.get('/SecondPage/:size', async(req, res) => {
    let size = (req.params.size);
    let collection = "Women";
    let query = {"size": size}
    let output = await getData(collection, query);
    res.send(output)
});

app.get('/sizes', async(req,res) => {
    let query = {};
    let collection = "Women";
    if(req.query.size){
        query = {"size": Number(req.query.size)}
        console.log(query);
        console.log(req.query.size);
    }
    let output = await getData(collection, query);
    console.log(output);
    res.send(output)
});


app.get('/kids', async(req,res) => {
    let query = {};
    let collection = "Kids";
    let output = await getData(collection, query);
    res.send(output)
});

app.get('/length', async(req,res) => {
    let query = {};
    let collection = "Kids";
    if(req.query.size){
        query = {"size": (req.query.size)}
        console.log(query);
        console.log(req.query.size);
    }
    let output = await getData(collection, query);
    console.log(output);
    res.send(output)
});

app.get('/jewellery', async(req,res) => {
    let query = {};
    let collection = "Jewellery";
    let output = await getData(collection, query);
    res.send(output)
});

app.get('/home&lifestyle', async(req,res) => {
    let query = {};
    let collection = "Home&Lifestyle";
    let output = await getData(collection, query);
    res.send(output)
});

app.get('/beauty', async(req,res) => {
    let query = {};
    let collection = "Beauty";
    let output = await getData(collection, query);
    res.send(output)
});

app.get('/accessories', async(req,res) => {
    let query = {};
    let collection = "Accessories";
    let output = await getData(collection, query);
    res.send(output)
});

app.get('/accessory/:id', async(req, res) => {
    let id = Number(req.params.id);
    let collection = "Accessories";
    let query = {"id": id}
    let output = await getData(collection, query);
    res.send(output)
});

app.get('/costume/:id', async(req, res) => {
    
    let collection = "Accessories";
    let query = {"_id":new ObjectId(req.params.id)}
    let output = await getData(collection, query);
    res.send(output)
});

app.get('/access/:id', async(req, res) => {
    const validObjId = (id) => {
        const idPattern = /^[0-9a-fA-F]{24}$/
        return idPattern.test(id)
    }
    if(validObjId(req.params.id)) {
        let collection = "Accessories";
        let query = {"_id": new ObjectId(req.params.id)}
        let output = await getData(collection, query);
        res.send(output)
}else {
    res.send('Invalid Object Id')
    } 
});


app.get('/color', async(req,res) => {
    let query = {};
    let collection = "Accessories";
    if(req.query.color){
        query = {"color": (req.query.color)}
        console.log(query);
        console.log(req.query.color);
    }
    let output = await getData(collection, query);
    console.log(output);
    res.send(output)
});

app.get('/orders', async(req, res) => {
    let query= {};
    let collection = "Order";
    if(req.query.email) {
        query = {email: req.query.email}
    }
    let output = await getData(collection, query);
    res.send(output);
});

app.post('/placeOrder', async(req, res) => {
    let body = req.body;
    let collection = "Order";
    let response = await postData(collection, body);
    res.send(response)
});

app.put('/updateOrder', async(req, res) => {
    let collection = "Order";
    let condition = {"_id": new ObjectId(req.body._id)}
    let data = {
        $set : {
            "status" : req.body.status
        }
    }
    let output = await updateData(collection, condition, data)
    res.send(output)
});

app.delete('/deleteOrder', async(req, res) => {
    let collection = "Order";
    let condition = {"_id": new ObjectId(req.body._id)}
    let output = await deleteData(collection, condition)
    res.send(output)
})


app.listen(port, (err) => {
    dbConnect();
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})