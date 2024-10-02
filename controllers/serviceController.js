const {Service} = require('../models');


exports.addService = async (req, res, next) => {
    let { name, region, price, description, imageUrl, type, amount } = req.body
    try {
        let newService = await Service.create({ name, region, price, description, imageUrl, type, amount })
        res.status(201).json({ message: 'Post has been created' })
    } catch (error) {
        next(error)
    }
}


exports.getService = async (req, res, next) => {
    try {
        const { filter } = req.query
        let services = await Service.findAll()
        res.status(200).json(services)
    } catch (error) {
        next(error)
    }
}

exports.getServiceById = async (req, res, next) => {
    try {
        let services = await Service.findByPk(req.params.id, {
            include: [User]
        })
        if (!services) throw { name: "NotFound" }
        res.status(200).json(services)
    } catch (error) {
        next(error)
    }
}

exports.putServiceById = async (req, res, next) => {
    let { title, content, imgUrl, categoryId, AuthorId } = req.body
    let { id } = req.params
    try {
        let posts = await Post.findByPk(id)
        if (!posts) throw { name: "NotFound" }
        await Post.update({ title, content, imgUrl, categoryId, AuthorId }, {
            where:  {id}
        })
        res.status(201).json({ message: 'Post has been updated' })
    } catch (error) {
        next(error)
    }
}