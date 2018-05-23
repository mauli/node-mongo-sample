//const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb'); //object destructuring


MongoClient.connect('mongodb://127.0.0.1/ToDoApp', (err,db)=>{
if(err){
    console.log('Got connection error', err);
}   
else{
    console.log('connected to server yee');
    db.collection('TodoCollection1').insertOne({
        name: 'Mauli',
        age: '29'
    }, (err,result) => {
        if(err){
            console.log('Got error in inserting');
        }
        else{
            console.log(result.ops);
        }
    })
    db.close();
} 
})