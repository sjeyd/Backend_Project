//express code with express.json middleware
const express = require("express");
const { role, task, user, project} = require("./database");
const app = express();
app.use(express.json());

//Task 1
app.post("/api/tasks", async(req,res)=>{
    const createPayload = req.body;
    await task.create({
        taskId : createPayload.taskId,
        taskName : createPayload.taskName,
        description : createPayload.description,
        dueDate : createPayload.dueDate,
        taskStatus : createPayload.taskStatus,
        user : createPayload.user,
        project : createPayload.project
    })
    res.json({
        msg : "Task Created"
    })
})

//Task 2
app.get("/api/tasks/:id", async(req,res)=>{   
    const ind = Number(req.params.id);
    const response = await task.find({taskId : ind});
    res.json({
        response
    })
})

//Task 3
app.get("/api/tasks",async(req,res)=>{
     const response = await task.find({});
     res.json({
        response
     })
})

//Task 4
app.delete("/api/tasks/:id", async(req,res)=>{
    const ind = Number(req.params.id);
    const taskIndex = tasks=>task.taskId===ind;
    console.log(taskIndex);
    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found.' });
    }
    const deletedTask = task.splice(taskIndex, 1)[0];

    res.json({ message: 'Task deleted successfully', deletedTask });
})

//Task 5
//app.put("/api/tasks/:id", (req,res)=>{})

//Task 6
//app.get("/api/tasks/in-progress-or-todo-beyond-due-date", async(req,res)=>{})

app.get("/api/tasks/search", async(req,res)=>{
    const name = req.query.search
    if (name) {
        return res.status(400).json({ error: 'Task name is required for search.' });
      }
    
      const filteredTasks = task.filter(task => task.taskName.includes(taskName));
      res.json(filteredTasks);
})

app.get("/api/tasks/admin-tasks", (req,res)=>{

})

app.post("/api/projects/",(req,res)=>{

})

app.get("/api/projects/{id}", (req,res)=>{

})

app.get("/api/projects/", (req,res)=>{

})

app.put("/api/projects/{id}", (req,res)=>{

})

app.get("/api/projects/{id}/tasks", (req,res)=>{

})

app.listen(3000);