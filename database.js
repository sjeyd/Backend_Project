const mongoose = require("mongoose");
const { boolean } = require("zod");
mongoose.connect("mongodb+srv://sjd:8AcT5tT5L06lD0EI@cluster0.j9jajuz.mongodb.net/TaskManagement")

// Role Schema
const roleSchema = new mongoose.Schema({
  name: String,
});

// Task Schema
const taskSchema = new mongoose.Schema({
    taskId : Number,
    taskName: String,
    description: String,
    dueDate: Date,
    status: String,
    user: String,
    project: String
});

// User Schema
const userSchema = new mongoose.Schema({
    userId : Number,
    username: String,
    password: String,
    email: String,
    roles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'role' }],
});

// Project Schema
const projectSchema = new mongoose.Schema({
    projectId : Number,
    projectName: String,
    description: String,
    startDate: Date,
    endDate: Date,
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'task' }],
});

// Create models
const role = mongoose.model('role', roleSchema);
const task = mongoose.model('task', taskSchema);
const user = mongoose.model('user', userSchema);
const project = mongoose.model('project', projectSchema);

module.exports = { role, task, user, project };
