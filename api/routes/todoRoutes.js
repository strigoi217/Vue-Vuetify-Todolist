const taskBuilder = require('../controllers/todoController');

module.exports = app => {
  app
    .route('/api/todos/list')
    .get(taskBuilder.list_all_tasks);
  app
    .route('/api/todos/create')
    .post(taskBuilder.create_a_task);

  app
    .route('/api/todos/update/:id')
    .put(taskBuilder.update_a_task);
  app
    .route('/api/todos/delete/:id')
    .delete(taskBuilder.delete_a_task);
};
