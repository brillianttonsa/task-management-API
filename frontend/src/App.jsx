import { useEffect, useState } from "react";
import TaskBox from "./components/TaskBox";
import SubHeader from "./components/SubHeader";

function App() {
  const [users, setUsers] = useState([]);

  // Fetch data (Uncomment when backend is available)
  // useEffect(() => {
  //   fetch('http://localhost:3000/users')
  //     .then(response => response.json())
  //     .then(data => setUsers(data))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  return (
    <main className="bg-gray-200 min-h-screen m-0 w-full p-8">
      <div className="w-full max-w-2xl mx-auto">


        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-center">Task Management</h1>
        </div>
        
        {/* SubHeader Component */}
        <div>
          <SubHeader />
        </div>
        
        {/* Task List */}
        <div className="space-y-4">
          {/* Each TaskBox component should have a unique key */}
          <TaskBox title={"tonsa"} dateCalendar={"22/2/2023"} content={"work on myself"} />
          <TaskBox title={"tonsa"} />
         
          {/* <TaskBox key={index} title={task.title} dateCalendar={task.date} content={task.content} /> */}

        </div>
      </div>
    </main>
  );
}

export default App;
