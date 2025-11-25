
import { Navigate, useNavigate } from "react-router-dom";
import taskDetail from '../pages/TaskDetail'
import Button from "./Button";
function Card({task}) {
  const navigate=useNavigate()
  return (
    <>
      <div className="w-72 bg-white rounded-b-lg border-t-8 border-green-400 px-4 py-5 flex flex-col justify-around shadow-md"
      onClick={()=> navigate(`/task/${task._id}`)}
      >
        
        <p className="text-lg font-bold font-sans">{task.taskTitle || "No Title"}</p>
        <div className="py-3">
          <p >
            {task.taskDescription || "No description for this task"}
          </p>
          <p className="text-gray-400 text-sm">Task Status: {task.isCompleted ? "Completed ✅" : "Pending ⏳"}</p>
        </div>
        <div className="flex justify-between">
        
          <div className="text-sm flex gap-2">
            <Button text="Hi" colour='bg-green-600 hover:bg-green-700 focus:ring-green-300'/>
            {/* For gray colour: bg-gray-600 hover:bg-gray-700 focus:ring-gray-300 */}
            <Button text='Mark as read' colour='bg-gray-600 hover:bg-gray-700 focus:ring-gray-300'/>
          </div>
        </div>
      </div>

    </>
  );
}

export default Card;
