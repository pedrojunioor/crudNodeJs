const db = require('../db')

module.exports ={
    async cadastrarEmpresa (req,res){
        await db.cadastrarEmpresa(req.body);
        res.json(req.body);
    },

    async buscarEmpresas (req,res){
        const empresas = await db.buscarEmpresas()
        res.send(empresas[0]);
    },

    async deletarEmpresa (req,res){
       
        const {id} = req.params;
        const empresa = await db.deletarEmpresa(id);
        res.send(empresa);

    },

    async alterarEmpresa (req,res){
        const {id} = req.params;
        const empresa = await db.alterarEmpresa(id,req.body);
        res.send(empresa)
    }
}