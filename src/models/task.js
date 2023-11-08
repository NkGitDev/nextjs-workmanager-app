import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    addDate:{
        type:Date,
        required:true,
        default:Date.now()
    },
    status:{
        type:String,
        enum:['Pending', 'Completed'],
        default:'Pending'
    },
    userId:{
        type:mongoose.ObjectId,
        required:true
    }
});

export const Task = mongoose.models.tasks || mongoose.model('tasks', taskSchema);