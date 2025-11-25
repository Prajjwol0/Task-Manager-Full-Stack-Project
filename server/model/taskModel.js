const mongoose=require('mongoose');
const taskSchema = new mongoose.Schema({
    taskTitle:{
        type:String,
        required:true
    },
    taskDescription:{
         type:String,
        required:false
    },
    isCompleted:{
        type:Boolean,
        default:false,
        required:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

});
module.exports=mongoose.model('Task',taskSchema)
