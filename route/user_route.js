// user router here

const router = require('express').Router();
//const router = express.Router();

router.get('/login', (req, res) => {

    res.send('login page');
});
router.get('/logout', (req, res) => {

    res.send('logout page');
});
router.get('/signup', (req, res) => {

    res.send('signup page');
});



//end user router


module.exports = router;