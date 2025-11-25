
const express=require('express');
const { createTask, getTasks, getSingleTask, updateTask, deleteTask } = require('../controller/taskController');
const router=express.Router();

router.post('/task',createTask)
router.get('/getTasks',getTasks)
router.get('/getatask/:id',getSingleTask)
router.patch('/update/:id',updateTask)
router.delete('/delete/:id',deleteTask)


module.exports=router;
