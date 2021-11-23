const express = require("express");
const db = require('../config/db')
const router = express.Router();


router.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

// ---------------- TABELA CLIENTS ------------------------ //

router.get("/client", (req, res) => {
  (async () => {
    const client = await db.selectClient(req.query.id)
    console.log('----SELECT * FROM clients WHERE id----')
    console.log(client)
    res.send(client);
  })()
});

router.get("/clients", (req, res) => {
  (async () => {
    const clients = await db.selectClients()
    console.log('----SELECT * FROM clients----')
    console.log(clients)
    res.send(clients);
  })()
});


router.post("/client", (req, res) => {
  (async () =>{
    const client = req.body
    if (!client.nome || !client.email || !client.estado || !client.cidade){
      res.send({msg: 'Preencha os campos corretamente', code: 200})
    }
    else{
      try{
        await db.insertClient(client)
        console.log('----INSERT INTO clients----')
        res.send({msg: 'Cliente inserido', code: 100})
      }
      catch(err){
        console.log('----ERRO----')
        console.log(err)
        if(err.code === 'ER_DUP_ENTRY') res.send({msg: 'Este cliente já está cadastrado', code: 201})
        else res.send({msg: 'Tente novamente', code: 202})
      }
    }
  })()
});

router.put("/client", (req, res) => {
  (async () =>{
    const client = req.body
    try{
      await db.updateClient(client)
      console.log('----UPDATE clients----')
      res.send({msg: 'Cliente atualizado', code: 100})
    }
    catch(err){
      console.log('----ERRO----')
      console.log(err)
      res.send({msg: 'Tente novamente', code: 200})
    }
  })()
});

router.delete("/client", (req, res) => {
  (async () =>{
    const clientId = req.query.id
    try{
      await db.deleteClient(clientId)
      console.log('----DELETE FROM clients----')
      res.send({msg: 'Cliente deletado', code: 100})
    }
    catch(err){
      console.log('----ERRO----')
      console.log(err)
      console.log({msg: 'Tente novamente', code: 200})
    }
  })()
});

//-------------------ROTAS LOCALIZAÇÃO-------------------------

router.get("/estados", (req, res) => {
  (async () => {
    const estados = await db.selectEstados()
    console.log('----SELECT * FROM estados----')
    console.log(estados)
    res.send(estados);
  })()
});

router.get("/cidades", (req, res) => {
  (async () => {
    const id = req.query.id
    const cidades = await db.selectCidades(id)
    console.log('----SELECT * FROM cidades WHERE id----')
    console.log(cidades)
    res.send(cidades);
  })()
});

module.exports = router;