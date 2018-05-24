//const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb'); //object destructuring



//delete many
// MongoClient.connect('mongodb://127.0.0.1/ToDoApp', (err,db)=>{
// if(err){
//     console.log('Got connection error', err);
// }   
// else{
//     console.log('connected to server yee');
//     db.collection('TodoCollection1').deleteMany({age:'25'}).then((result)=>{
//         console.log('results', result);
//     },
//     (err)=>{
//         console.log('errror in deleting', err);
//     }
// )
//     db.close();
// } 
// })



//delete one
// MongoClient.connect('mongodb://127.0.0.1/ToDoApp', (err,db)=>{
// if(err){
//     console.log('Got connection error', err);
// }   
// else{
//     console.log('connected to server yee');
//     db.collection('TodoCollection1').deleteOne({age:'25'}).then((result)=>{
//         console.log('results', result);
//     },
//     (err)=>{
//         console.log('errror in deleting', err);
//     }
// )
//     db.close();
// } 
// })


//find one and delete - combination of find one + delete one
MongoClient.connect('mongodb://127.0.0.1/ToDoApp', (err,db)=>{
if(err){
    console.log('Got connection error', err);
}   
else{
    console.log('connected to server yee');
    db.collection('TodoCollection1').findOneAndDelete({age:'29'}).then((result)=>{
        console.log('results', result);
    },
    (err)=>{
        console.log('errror in deleting', err);
    }
)
    db.close();
} 
})
