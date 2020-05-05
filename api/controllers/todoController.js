const mongoose = require('mongoose');
const task = mongoose.model('todos');

// const loadTodos = (res) => {
//   task.find({}, (err, tasks) => {
//     if (err) res.send(err);
//     res.json(tasks);
//   });
// }

exports.list_all_tasks = (req, res) => {
  task.find({}, (err, tasks) => {
    if (err) res.send(err);
    res.json(tasks);
  });
};

exports.create_a_task = (req, res) => {
  const newTask = new task({
      title: req.body.title || "Untitled Todo",
      project: req.body.project,
      done: req.body.done
  });

  newTask.save((err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.read_a_task = (req, res) => {
  task.findById(req.params.id, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.update_a_task = (req, res) => {
  console.log(req.body)
  task.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, task) => {
      if (err) res.send(err);
      res.json(task);
    }).then(
      list_all_tasks(req, res)
    );
};

exports.delete_a_task = (req, res) => {
  task.deleteOne({ _id: req.params.id }, err => {
    
    if (err) res.send(err);
    res.json({
      message: 'task successfully deleted',
     _id: req.params.id
    });
  });
};