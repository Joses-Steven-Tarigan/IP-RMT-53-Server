const {User}= require('../models');



exports.register = async (req, res, next) => {
    const { username, email, password } = req.body
    try {
        await User.create({ username, email, password })
        res.status(201).json({ message: 'User has been registered' })
    } catch (error) {
        next(error)
    }
}