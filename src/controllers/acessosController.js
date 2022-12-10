const acessosModel = require('../models/acessos');

const addNewVisitor = async (req, res) => {
    try {
        const {
            name,
            date,
            rg,
            entrace,
            departure,
            apartment,
        } = req.body;
        const newVisitor = new acessosModel({
            name,
            date,
            rg,
            entrace,
            departure,
            apartment,
        });
        const savedVisitor = await newVisitor.save();

        res.status(201).json({ message: "Novo visitante adicionado com sucesso!", savedVisitor });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};


const findByDate = async (req, res) => {
    try {
        const findAcesso = await acessosModel.findOne(req.query.date);
        res.status(200).json(findAcesso);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });

    }
}

const findAcessoByRG = async (req, res) => {

    
    try {
        const findAcesso = await acessosModel.find(req.query.rg);
        res.status(200).json(findAcesso);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });

    }
} 

const deleteAcesso = async (req, res) => {
    try {
        const deleteAcesso = await acessosModel.findOneAndRemove(req.query.rg);
        const message = `Acesso com o nome ${deleteAcesso.name} foi deletado com sucesso`;
        res.status(202).json({ message});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

const UpdateVisitor = async (req, res) => {
    try {
        const {
            name,
            date,
            rg,
            entrace,
            departure,
            apartment,
        } = req.body;
        const updateVisitors = await acessosModel.findByIdAndUpdate(req.params.id, {
            name,
            date,
            rg,
            entrace,
            departure,
            apartment,
        });
        res.status(200).json({ message: "Visitante atualizado com sucesso", updateVisitors });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};






module.exports = {
    addNewVisitor,
    findAcessoByRG,
    findByDate,
    UpdateVisitor,
    deleteAcesso,

}