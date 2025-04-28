import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/Button';

function EditTask() {
    const { id } = useParams(); // get the task id from the URL
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchTaskToEdit = async () => {
      try {
        const res = await fetch(`http://localhost:3000/users/${id}`);
        if (res.ok) {
          const data = await res.json();
          setTitle(data.title);
          setContent(data.content);
          setDate(data.date);
        } else {
          setError('Failed to fetch task data');
        }
      } catch (err) {
        console.error(err);
        setError('Something went wrong');
      }
    };
    
    useEffect(() => {
      fetchTaskToEdit()
    }, [id]);

    const handleUpdate = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError(null);
  
      try {
        const res = await fetch(`http://localhost:3000/users/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, content, date }),
        });
  
        if (res.ok) {
          navigate('/');
        } else {
          const errorData = await res.json();
          setError(errorData.error || 'Failed to update task');
        }
      } catch (err) {
        console.error(err);
        setError('Something went wrong');
      } finally {
        setLoading(false);
      }
    };
  

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold text-center mb-6">Edit Task</h1>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <form onSubmit={handleUpdate} className="space-y-4">
        
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

        {/* Content Input */}
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
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus-input"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button 
            btnText={loading ? 'Updating...' : 'Update Task'} 
            className={'bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 cursor-pointer'}
            type="submit"
            onClick={handleUpdate}
          />
        </div>
      </form>
    </div>
  );
}

export default EditTask;
