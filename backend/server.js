import express from "express";
import cors from "cors";
import axios from 'axios';
import pg, { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(cors());
const port = 3000;
app.use(express.json());

const db = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

db.connect();  

app.get('/users', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM tasks ORDER BY date ASC');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
});

// GET a single task
app.get('/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query('SELECT * FROM tasks WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching task:', error);
    res.status(500).json({ error: 'Failed to fetch task' });
  }
});




// My DB for TASK
app.post('/users', async(req, res) =>{
    const {title, content, date} = req.body;

    try{
        const result = await db.query(`INSERT INTO tasks (title, content, date) VALUES ($1, $2, $3) RETURNING id;
        `, [title, content, date]);
        res.status(201).json({ id: result.rows[0].id });
    }catch(error){
        console.log('Error adding task:', error);
        res.status(500).json({ error: 'Failed to add task' }); 
    }
})

// Server.js (backend)

// PATCH /tasks/:id
app.patch('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content, date } = req.body; // or whatever fields you allow editing

  try {
    const result = await db.query(
      'UPDATE tasks SET title = $1, content = $2, date = $3 WHERE id = $4 RETURNING *',
      [title, content, date, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json(result.rows[0]); // return updated task
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

  


// Recording done task




app.delete('/users/:id', async(req,res) => {
  const {id} = req.params;
  try{
    await db.query('DELETE FROM tasks WHERE id = $1', [id]);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
  }
)

// Starting the server
app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
})

