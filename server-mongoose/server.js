// const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://127.0.0.1/ToDoAppMongoose')

// var schema = new Schema({
//     name:    String,
//     binary:  Buffer,
//     living:  Boolean,
//     updated: { type: Date, default: Date.now },
//     age:     { type: Number, min: 18, max: 65 }
// });

// var toDO = mongoose.model('ToDoMongoose',schema);

// var todoObj = new toDO({
//     name: 'Mauls',
//     age: '23'
// });
//  todoObj.save().then((data) => {
//      console.log('data saved:', data);
//  }, 
//  (error) => {
//     console.log('error in saving:', error);
//  });



//**********structured code with model and moongoseconfiguration**************
// const {todoObj} = require('./model/todo');

// todoObj.save().then((data) => {
//     console.log('data saved:', data);
// }, 
// (error) => {
//    console.log('error in saving:', error);
// });
//*************************************************
const express = require('express');
const bodyParser = require('body-parser');
const getToDoObj = require('./model/todo');

var expressApp = express();
expressApp.use(bodyParser.json());

//*************POST REQUEST **************
/*var toDo = getToDoObj('addTODOschema');
expressApp.post('/toDos',(req, res)=>{
    console.log('i am here',req.body);
    
    var todoObj = new toDo({
        'name': req.body.name
    });
    todoObj.save().then((doc)=>{
        res.send(doc);
    },(e)=> {
        res.status(400).send(e);
    });
}) */

//*************GET ALL REQUEST **************

/*var toDo = getToDoObj('getAllTODOSchema')
expressApp.get('/toDos',(req, res)=>{
    console.log('i am here', req.body);
    
    toDo.find().then((doc)=>{
        res.send(doc);
    },(e)=> {
        res.status(400).send(e);
    });
})

expressApp.listen('3000',()=>{
    console.log('listening on prt');
}); */

//*************GET ALL REQUEST **************

var toDo = getToDoObj('getAllTODOSchema')
expressApp.get('/toDos',(req, res)=>{
    console.log('i am here', req.body);
    
    toDo.find().then((doc)=>{
        res.send(doc);
    },(e)=> {
        res.status(400).send(e);
    });
})

expressApp.listen('3000',()=>{
    console.log('listening on prt');
});


 