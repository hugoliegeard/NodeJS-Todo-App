const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
   title: String,
   description: String,
   duedate: Date,
   status: { type: Boolean, default: false },
   createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Task', TaskSchema);
