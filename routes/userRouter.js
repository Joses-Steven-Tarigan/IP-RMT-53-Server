

const router = require('express').Router();
const { register } = require('../controllers/userController');
const errorHandler=require('../middlewares/errorHandler');


router.post("/register", register)
router.post("/login")




router.use(errorHandler);
module.exports = router;