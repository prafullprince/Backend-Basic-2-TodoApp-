// import instances
const express = require("express");
// make router at which we can make request like get,post,put,delete
const router = express.Router();

// import login according to routes
const { createTodo } = require("../controllers/Todo");

// make api routes
router.post('/createTodo',createTodo);

// export router
module.exports = router;
