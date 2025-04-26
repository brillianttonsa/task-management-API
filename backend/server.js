import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
const port = 3000;

app.get("/users", (req, res) => {
    res.json([{
        id: 1,
        name: "Tonsa",
        age: 23,
    },{
        id: 2,
        name: "peter",
        age: 25,
    },{
        id: 3,
        name: "john",
        age: 30,
    },{
        id: 4,
        name: "jane",
        age: 28,
    },{
        id: 5,
        name: "doe",
        age: 35,
    }]);
});

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`);
})

