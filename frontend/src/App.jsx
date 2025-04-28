import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import EditTask from "./pages/EditTask";
import AddTask from "./pages/AddTask";
import Home from "./pages/Home";

function App() {

  return (
    <main className="bg-gray-200 min-h-screen m-0 w-full p-8">
      <div className="w-full max-w-2xl mx-auto">
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/add/" element={<AddTask/>}/>
            <Route path="/edit/:id" element={<EditTask/>}/>
          </Routes>
        </Router>

      </div>
    </main>
  );
}

export default App;
