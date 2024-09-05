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
// get todo
