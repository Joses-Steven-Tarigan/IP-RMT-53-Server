

const router = require('express').Router();
const { addService, getService } = require('../controllers/serviceController');
const { register, login } = require('../controllers/userController');
const errorHandler=require('../middlewares/errorHandler');


router.post("/register", register)
router.post("/login", login)
router.post("/service", addService)
router.get("/service", getService)




router.use(errorHandler);
module.exports = router;