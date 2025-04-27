import { useState } from 'react';
import Button from '../components/Button';

function AddTask() {
  // State to hold the form input values
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [done, setDone] = useState(false);

  // Handle form submission
  const handleSubmit = async(event) => {
    event.preventDefault();
    
    
    const newTask = { title, content, date };
    console.log('New Task:', newTask);

    setLoading(true);
    setError(null);

    try{
        const response = await fetch('http://localhost:3000/users',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTask),
        });

        if(response.ok){
             // Reseting my form fields
            setDone(true);
            setTitle('');
            setContent('');
            setDate('');
        }
    }catch(error){
        console.log(`Error: ${error}`);
        setError('An error occurred while adding the task');
    }finally{
        setLoading(false)
    }

  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold text-center mb-6">Add New Task</h1>

        
      {/* Displaying error or the done message */}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {done && <p className="text-green-500 text-center">Task added successfully!</p>}

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Title Input */}
        <div>
          <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">Title</label>
          <input 
            type="text" 
            id="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus-input"
          />
        </div>

        {/* Content Textarea */}
        <div>
          <label htmlFor="content" className="block text-lg font-medium text-gray-700 mb-2">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus-input"
          />
        </div>

        {/* Date Input */}
        <div>
          <label htmlFor="date" className="block text-lg font-medium text-gray-700 mb-2">Date</label>
          <input 
            type="date" 
            id="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            required 
            className="w-full p-3 border border-gray-300 rounded-md focus-input"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button 
            btnText={loading? 'Adding...': 'Add Task'} 
            className={'bg-indigo-600 text-white px-6 py-3 rounded-lg focus-input hover:bg-indigo-700 cursor-pointer'}
            type={'submit'}
            disabled={loading}/>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
