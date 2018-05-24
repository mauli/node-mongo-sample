//const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb'); //object destructuring




//find one and delete - combination of find one + delete one
MongoClient.connect('mongodb://127.0.0.1/ToDoApp', (err,db)=>{
if(err){
    console.log('Got connection error', err);
}   
else {
    console.log('connected to server yee');
    db.collection('TodoCollection1').findOneAndUpdate({
        age:'29'
    },).then((result)=>{
        console.log('results', result);
    },
    (err)=>{
        console.log('errror in deleting', err);
    }
)
    db.close();
} 
})
