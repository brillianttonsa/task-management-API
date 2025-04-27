import { useEffect, useState } from "react";
import SubHeader from "./components/SubHeader";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import EditTask from "./pages/Edit";
import AddTask from "./pages/AddTask";
import Home from "./pages/Home";

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
        <Router>
          <SubHeader/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/add/:id" element={<AddTask/>}/>
            <Route path="/edit/:id" element={<EditTask/>}/>
          </Routes>
        </Router>

      </div>
    </main>
  );
}

export default App;
