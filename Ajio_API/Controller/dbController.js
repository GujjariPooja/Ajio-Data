let mongo = require('mongodb');
let {MongoClient} = require('mongodb');
let mongoUrl = "mongodb+srv://user:pooja123@cluster0.fuxqfwy.mongodb.net/?retryWrites=true&w=majority";
let Client = new MongoClient(mongoUrl);

async function dbConnect() {
    await Client.connect();
}

let db = Client.db('Ajio_App');

async function getData(colName, query) {
    let output =[];
    try {
        const cursor = db.collection(colName).find(query);
        for await (const data of cursor) {
            output.push(data)
        }
        cursor.closed
    }catch(err) {
        output.push({"Error":"Error in getting data"})
    }
    return output
}

async function postData(colName, data) {
    let output;
    try {
        output = await db.collection(colName).insertOne(data);
    }catch(err) {
        output = {"response" : "Error in post data"}
    }
    return output
}

async function updateData(colName, condition, data) {
    let output;
    try {
        output = await db.collection(colName).updateOne(condition, data);
    }catch(err) {
        output = {"response" : "Error in update data"}
    }
    return output
}

async function deleteData(colName, condition) {
    let output;
    try {
        output = await db.collection(colName).deleteOne(condition);
    }catch(err) {
        output = {"response" : "Error in delete data"}
    }
    return output
}

module.exports = {
    dbConnect,
    getData,
    postData,
    updateData,
    deleteData
}