const router = require('express').Router();
//const router = express.Router();

const {
    getAllPost,
    singlaePost,
    createNewPost,
    updateNewPost,
    deletePost,

} = require('./postController')

router.get('/', getAllPost);
router.get('/:postId', singlaePost);
router.post('/', createNewPost);
router.put('/:postId', updateNewPost);
router.delete('/:postId', deletePost);



//end user router


module.exports = router;