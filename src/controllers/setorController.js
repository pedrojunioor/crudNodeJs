const db = require('../repo/dbSetor')

module.exports ={
    async cadastrarSetor (req,res){
        await db.cadastrarSetor(req.body);
        res.json(req.body);
    },

    async buscarSetores (req,res){
        const empresas = await db.buscarSetores()
        res.send(empresas[0]);
    },

    async deletarSetor (req,res){
       
        const {id} = req.params;
        const empresa = await db.deletarSetor(id);
        res.send(empresa);

    },

    async alterarSetor (req,res){
        const {id} = req.params;
        const empresa = await db.alterarSetor(id,req.body);
        res.send(empresa)
    }
}