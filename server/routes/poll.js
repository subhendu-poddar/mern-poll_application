const router = require('express').Router()
const handle = require('../handlers')
const auth = require('../middlewares/auth')

router.route('/')
  .get(handle.showPolls)
  .post(auth, handle.createPoll)

router.get('/user', auth, handle.userPolls)

router.route('/:id')
  .get(handle.getPolls)
  .delete(auth, handle.deletePoll)
  .post(auth, handle.vote)




module.exports = router