const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/task-manager', { useNewUrlParser: true, useUnifiedTopology: true });

const taskSchema = new mongoose.Schema({
    title: String,
    description: String
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;