const route = require('express').Router()
const isLogin = require('../middlewares/isLogin')
const CommentController = require('../controllers/controllerComment')

route
  .post('/:id', isLogin, CommentController.createComment)

module.exports = route
