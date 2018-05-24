const {mongoose} = require('../db/mongooseConf');

var addTODOschema = mongoose.Schema({
    name:    {type: String, required: true},
    binary:  Buffer,
    living:  Boolean,
    updated: { type: Date, default: Date.now },
    age:     { type: Number, min: 18, max: 65 }
});

var getTODOSchema = mongoose.Schema({
    name:    {type: String, required: true},
});

var getAllTODOSchema = mongoose.Schema({});


var getToDoObj = (schemaName) => {
    if(schemaName === 'addTODOschema'){
        return mongoose.model('ToDoMongoose', addTODOschema);
    }
    else if(schemaName === 'getTODOSchema'){
        return mongoose.model('ToDoMongoose', getTODOSchema);
    }
    else if(schemaName === 'getAllTODOSchema'){
        return mongoose.model('ToDoMongoose', getAllTODOSchema);
    }

}
//var toDo = mongoose.model('ToDoMongoose', );

module.exports = getToDoObj;