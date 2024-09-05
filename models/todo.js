// require instances
const mongoose = require('mongoose');

// make schema of todo
const todosSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        required:true,
        default:Date.now,
    }
});

// export schema
module.exports = mongoose.model("Todo",todosSchema);
