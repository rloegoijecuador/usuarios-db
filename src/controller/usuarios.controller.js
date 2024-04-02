const catchError = require('../utils/catchError');
const Usuarios = require('../models/Usuarios');

const getAll = catchError(async(req, res) => {
    const usuario = await Usuarios.findAll();
    return res.json(usuario)
});

const create = catchError(async(req, res) => {
    const { first_name, last_name, email, passoword, birthday } = req.body;
    const ususarios = await Usuarios.create({
      first_name,
      last_name,
      email,
      passoword,
      birthday,  
    });
    return res.status(201).json(ususarios)
});

const getOne = catchError(async(req, res) => {
    const  { id } = req.params;
    const usuario = await Usuarios.findByPk(id);
    return res.json(usuario);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Usuarios.destroy({ where: {id: id}});
});

const upDate = catchError(async(req, res) => {
    const { id } = req.params;
    const {first_name, last_name, email, passoword, birthday } = req.body;
    const usuario = await Usuarios.update({
        first_name,
        last_name ,
        email,
        passoword,
        birthday,
    } ,{where:{ id: id}, return: true});
    return res.json(usuario);
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    upDate,
    
}