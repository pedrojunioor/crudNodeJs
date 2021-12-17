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

async function cadastrarSetor(setor){

    const { setor_name, empresa_id} = setor;
    const conn = await connect();
    const sql = `INSERT INTO teste_empresa.tbsetor(setor_name, empresa_id) VALUES ("${setor_name}",${empresa_id});`;
    return conn.query(sql);
}

async function buscarSetores(){
    const conn = await connect();
    const sql = 'SELECT * FROM teste_empresa.tbsetor;';
    return conn.query(sql)
}

async function deletarSetor(id){
    const conn = await connect();
    const sql = `DELETE FROM teste_empresa.tbsetor WHERE (setor_id="${id}")`
    return conn.query(sql)

}

async function alterarSetor(id,setor){
    const { setor_name} = setor;
    const conn = await connect();
    const sql = `UPDATE teste_empresa.tbsetor SET setor_name="${setor_name}" WHERE setor_id="${id}"`
    return conn.query(sql)

}

module.exports = {cadastrarSetor,buscarSetores,deletarSetor, alterarSetor}