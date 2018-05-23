//const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb'); //object destructuring


MongoClient.connect('mongodb://127.0.0.1/ToDoApp', (err,db)=>{
if(err){
    console.log('Got connection error', err);
}   
else{
    console.log('connected to server yee');
    db.collection('TodoCollection1').find({age:'29'}).toArray().then((docs)=>{
        console.log('results', docs);
    },
    (err)=>{
        console.log('errror in finding', err);
    }
)
    db.close();
} 
})