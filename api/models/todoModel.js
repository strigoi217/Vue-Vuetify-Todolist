const mongoose = require('mongoose');

const { Schema } = mongoose;

const todoSchema = new Schema(
  {
    title: String,
    project: String,
    done: Boolean
  },
  { collection: 'todos' }
);

module.exports = mongoose.model('todos', todoSchema);