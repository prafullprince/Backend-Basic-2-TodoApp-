// import instances
const express = require("express");
// make router at which we can make request like get,post,put,delete
const router = express.Router();

// import login according to routes
const { createTodo, getAllTodo, getTodo, updateTodo } = require("../controllers/Todo");

// make api routes
router.post('/createTodo',createTodo);
router.get('/getAllTodo',getAllTodo);
router.get('/getTodo/:id',getTodo);
router.put('/updateTodo/:id',updateTodo);

// export router
module.exports = router;
