const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config({path : 'src/.env'});

async function connect(){

    if(global.connection && global.connection.state !== 'disconnected'){
        return global.connection;
    }

    const connection = await mysql.createConnection(`mysql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:3306/${process.env.DATABASE}`);

    // const connection = await mysql.createConnection('mysql://root:rootmysql@localhost:3306/curso_lead')
    console.log("CONECTOU")
    global.connection = connection
    return connection;
}

connect();

async function cadastrarEmpresa(empresa){
    //desestruturando informacoes
    const {empresa_name,empresa_endereco,empresa_telefone,email} = empresa
    
    //fazendo a conexao com o banco
    const conn = await connect();

    //setando query SQL
    const sql = `INSERT INTO teste_empresa.tbempresa(empresa_name, empresa_endereco, empresa_telefone, email) VALUES ("${empresa_name}","${empresa_endereco}","${empresa_telefone}","${email}")`;
    await conn.query(sql)
    
}

async function buscarEmpresas(){
    const conn = await connect();
    const sql = 'SELECT * FROM teste_empresa.tbempresa;';
    return conn.query(sql)
}

async function deletarEmpresa(id){
    const conn = await connect();
    const sql = `DELETE FROM teste_empresa.tbempresa WHERE (empresa_id="${id}")`
    return conn.query(sql)

}

async function alterarEmpresa(id,empresa){
    const {empresa_name,empresa_endereco,empresa_telefone,email} = empresa
    const conn = await connect();
    const sql = `UPDATE teste_empresa.tbempresa SET empresa_name="${empresa_name}", empresa_endereco="${empresa_endereco}", empresa_telefone="${empresa_telefone}", email="${email}" WHERE empresa_id="${id}"`
    return conn.query(sql)

}

module.exports = {cadastrarEmpresa,buscarEmpresas,deletarEmpresa, alterarEmpresa}