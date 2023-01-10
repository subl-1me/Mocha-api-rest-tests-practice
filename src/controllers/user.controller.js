const UserService = require('../services/user.service');

const users = async function(_, res){
    try{
        const serviceRes = await UserService.items();
        return res.status(200).send({
            users: serviceRes
        })
    }catch(err){
        return res.status(500).send(err);
    }
}

const create = async function(req, res){
    const { username, email } = req.body;

    if(!username || !email) {
        return res.status(200).send({
            errorCode: 100,
            message: 'All params are required.',
            bodyRecieved: { username, email },
            bodyRequired: 'email & username'
        })
    }

    try{
        const serviceRes = await UserService.insert({username, email});
        return res.status(200).send({
            user: serviceRes
        })
    }catch(err){
        console.log(err);
        return res.status(500).send(err);
    }
}

const getById = async function(req, res){   
    const idParam = req.params.id;
    if(!idParam || idParam === 'undefined'){
        return res.status(200).send({ 
            errorCode: 201,
            message: 'User ID is required'
        });
    }

    const serviceRes = await UserService.getById(idParam);
    return res.status(200).send(serviceRes)
    // try{
    //     const serviceRes = await UserService.getById(id);
    //     return res.status(200).send({
    //         user: serviceRes
    //     })
    // }catch(err){
    //     return res.status(500).send({
    //         message: 'Something went wrong.'
    //     })
    // }
}

module.exports = {
    users,
    create,
    getById
}