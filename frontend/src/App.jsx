import { use, useEffect, useState } from "react";
import TaskBox from "./components/TaskBox";

function App(){
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3000/users')
  //     .then(response => response.json())
  //     .then(data => setUsers(data))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  return (
    <>
      <TaskBox title={'Finishing Project'}/>
      <div className="p-6">
        <h1 className="text-3xl">User List</h1>
        <table className="w-4xl border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 p-4">ID</th>
              <th className="border border-gray-300 p-4">Name</th>
              <th className="border border-gray-300 p-4">Age</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td className="border border-gray-300 p-4">{user.id}</td>
                <td className="border border-gray-300 p-4">{user.name}</td>
                <td className="border border-gray-300 p-4">{user.age}</td>
              </tr>
            ))}
          </tbody>
          </table>
      </div>
    </>
  )
}

export default App;