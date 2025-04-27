import express from "express";
import cors from "cors";
import axios from 'axios';
import pg, { Client } from 'pg';


const app = express();
app.use(cors());
const port = 3000;
app.use(express.json());

const db = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'TaskManagement',
    password: 'tonsa000',
    port: 2004,
});

db.connect();  


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


// Starting the server
app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
})

