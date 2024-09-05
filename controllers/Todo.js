// import schema
const Todo = require("../models/todo");


// create todo
exports.createTodo = async (req,res)=>{
    try{
        // extract data from req ki body
        const {title,description} = req.body;
        // insert in db 
        const data = await Todo.create({
            title:title,
            description:description
        });
        return res.status(200).json({
            success:true,
            data:data,
            message:"todo created successfully"
        });

    } catch(error){
        console.log(error);
        return res.status(500).json({
            success:true,
            message:"something went wrong during creating todo"
        });
    }
}
// update todo
// delete todo
// get all todo
exports.getAllTodo = async (req,res)=>{
    try{
        // search in db 
        const data = await Todo.find({}).sort({createdAt:-1});
        return res.status(200).json({
            success:true,
            data:data,
            message:"todo fetched successfully"
        });

    } catch(error){
        console.log(error);
        return res.status(500).json({
            success:true,
            message:"something went wrong during creating todo"
        });
    }
}

// get single todo
exports.getTodo = async (req,res)=>{
    try{
        // fetch todo id
        const {id} = req.params;
        // search in db 
        const data = await Todo.findById({_id:id});
        return res.status(200).json({
            success:true,
            data:data,
            message:"todo fetched successfully"
        });

    } catch(error){
        console.log(error);
        return res.status(500).json({
            success:true,
            message:"something went wrong during creating todo"
        });
    }
}