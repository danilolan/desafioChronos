require('dotenv').config()
async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const userSql = process.env.USER_SQL
    const passwordSql = process.env.PASSWORD_SQL
    const ipSql = process.env.IP_SQL
    const portSql = process.env.PORT_SQL
 
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection(`mysql://${userSql}:${passwordSql}@${ipSql}:${portSql}/clients`);
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}
connect()

async function selectClients(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM clients;');
    return rows;
}

async function selectClient(id){
    const conn = await connect();
    const [rows] = await conn.query(`SELECT * FROM clients WHERE id=${id};`);
    return rows;
}

async function insertClient(client){
    const conn = await connect();
    const sql = 'INSERT INTO clients(nome,email,estado,cidade,hobbie) VALUES (?,?,?,?,?);';
    const values = [client.nome, client.email, client.estado, client.cidade, client.hobbie];
    return await conn.query(sql, values);
}

async function updateClient(client){
    const conn = await connect();
    const sql = 'UPDATE clients SET nome=?, email=?, estado=?, cidade=?, hobbie=? WHERE id=?';
    const values = [client.nome, client.email, client.estado, client.cidade, client.hobbie, client.id];
    return await conn.query(sql, values);
}

async function deleteClient(id){
    const conn = await connect();
    const sql = 'DELETE FROM clients where id=?;';
    return await conn.query(sql, id);
}

//----------------LOCALIZAÇÃO----------------------

async function selectEstados(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM estados');
    return rows;
}

async function selectCidades(id){
    const conn = await connect();
    const [rows] = await conn.query(`SELECT * FROM cidades WHERE estado_id=${id}`);
    return rows;
}

module.exports = {selectClients, selectClient, insertClient, updateClient, deleteClient, selectEstados, selectCidades}