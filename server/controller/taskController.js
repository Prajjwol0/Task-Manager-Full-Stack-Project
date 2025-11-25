
const Task=require('../model/taskModel')

// Create task
exports.createTask = async (req, res) => {
  try {
    const { taskTitle, taskDescription, isCompleted } = req.body;

    if (!taskTitle || !taskDescription) {
      return res.status(400).json({ message: "taskTitle and taskDescription are required" });
    }

    // req.user.id comes from auth middleware
    const task = await Task.create({
      taskTitle,
      taskDescription,
      isCompleted: Boolean(isCompleted),
      userId: req.user.id, 
    });

    res.status(201).json(task);
  } catch (error) {
    console.log("Error while creating task: ", error);
    res.status(500).json({ error: "Failed to create task" });
  }
};

// Get all tasks for logged-in user
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json({ tasks });
  } catch (error) {
    console.log("Error while fetching tasks: ", error);
    res.status(500).json({ error: "Failed to get tasks" });
  }
};

// Get a single tasks
exports.getSingleTask=async (req,res) => {
    
    try {
        const aTask=await Task.findById(req.params.id)
        if(!aTask){
            return res.status(400).json({
                error:"No task found with this id"

             })
             
        }
             res.status(200).json({aTask})
             
    } catch (error) {
         console.log("Error while fetching task: ",error);
          res.status(500).json({
            message:error
        })
        
    }
}

// update a task
exports.updateTask=async(req,res)=>{
    try {
        const {taskTitle,taskDescription}=req.body;
        const aTask=await Task.findById(req.params.id)
    if(!aTask){
       return res.status(404).json({
                error:"No task found with this id"

             })
             
        }
            const newTask=await Task.findByIdAndUpdate(
                req.params.id,
                req.body,
                {new:true}
            )
            res.status(200).json({
                message:"Task updated successfully",
                newTask
            })
        
    } catch (error) {
                console.log("Error while updating task: ",error);
          res.status(500).json({
            message:error
        })
    }
}

// Delete tasks
exports.deleteTask=async(req,res)=>{
   try {
     const aTask=await Task.findById(req.params.id)
      if(!aTask){
       return res.status(404).json({
                error:"No task found with this id"
             })
        }
           await Task.findByIdAndDelete(req.params.id)
           res.status(200).json({
            message:`Deleted ${req.params.id}`
           })
        
   } catch (error) {
             console.log("Error while deleting task: ",error);
          res.status(500).json({
            message:error
        })
   }
}
