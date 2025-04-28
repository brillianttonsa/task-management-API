import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import SubHeader from "../components/SubHeader";

function Home() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [checkedTasks, setCheckedTasks] = useState([]);
    const navigate = useNavigate();

    const fetchMyTasks = async ()=> {
      setLoading(true);
      try{
        const response = await fetch("http://localhost:3000/users");
        if(!response){
          throw new Error ("Failed to fetch tasks");
        }
        const result = await response.json();
        setTasks(result);
      }catch(error){
        console.log("Error: ", error);
        setError(error.message);
      }finally{
        setLoading(false)
      }
    }

    useEffect(() => {
        fetchMyTasks();
    }, []);

    const handleEditTask = (id) => {
        navigate(`/edit/${id}`); 
    };

    const handleDeleteTask = async (id) => {
        try {
          const response = await fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE",
        });
        if (response.ok) {
            setTasks(tasks.filter((task) => task.id !== id));
        }
        } catch (error) {
          console.error(error);
        }
    };
    
    const handleTaskDone = (taskId) => {
      if (checkedTasks.includes(taskId)) {
        setCheckedTasks(checkedTasks.filter(id => id !== taskId));
        console.log(checkedTasks);
      } else {
        setCheckedTasks([...checkedTasks, taskId]); // add a new checked task in the list
      }
    };
    


    return (
      <div>
        <SubHeader />
        {loading && <p className="text-center text-green-500">Loading tasks...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {tasks.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">No tasks available.</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="task-container-box">
              <div className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  id="heading"
                  onChange={() => handleTaskDone(task.id)} 
                  checked={checkedTasks.includes(task.id)}
                />
                <h1 className="text-2xl font-semibold">{task.title}</h1>
              </div>
              <div className="ml-4">
                <h3>{task.content}</h3>
              </div>

              <div className="ml-2 flex items-center text-gray-400 w-auto p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                  </svg>

                  <span>{new Date(task.date).toLocaleDateString()}</span>
              </div>

              <div className="flex space-x-1 justify-end">
                <Button
                  btnText={"Edit"}
                  onClick={() => handleEditTask(task.id)}
                  children={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                }
                  className="flex-center btn-with-icon p-2 bg-yellow-300 hover:bg-yellow-400
                  w-auto"
                />

                <Button
                  btnText={"Delete"}
                  onClick={() => handleDeleteTask(task.id)}
                  children={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
                }
                  className="flex-center btn-with-icon p-2 bg-red-500 hover:bg-red-600 w-auto"
                />
              </div>
            </div>
          ))
        )}
      </div>
  );
}

export default Home;
