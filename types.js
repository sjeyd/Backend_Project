const zod = require("zod");

const createTask = zod.object({
    taskId : zod.string(), 
    taskName : zod.string(),
    description : zod.string(), 
    date: zod.date(),
    taskStatus: zod.boolean(),
    user: zod.string(), 
    project: zod.string()
})

const updateTask = zod.object({
    id : zod.string()
})

module.export = {
    createTask : createTask,
    updateTask : updateTask
}