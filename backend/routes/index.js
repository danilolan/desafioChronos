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
    try{
      await db.insertClient(client)
      console.log('----INSERT INTO clients----')
      res.send('Cliente inserido')
    }
    catch(err){
      console.log('----ERRO----')
      console.log(err)
      res.send(err)
    }
  })()
});

router.put("/client", (req, res) => {
  (async () =>{
    const client = req.body
    try{
      await db.updateClient(client)
      console.log('----UPDATE clients----')
      res.send('Cliente atualizado')
    }
    catch(err){
      console.log('----ERRO----')
      console.log(err)
      res.send(err)
    }
  })()
});

router.delete("/client", (req, res) => {
  (async () =>{
    const clientId = req.query.id
    try{
      await db.deleteClient(clientId)
      console.log('----DELETE FROM clients----')
      res.send('Cliente deletado')
    }
    catch(err){
      console.log('----ERRO----')
      console.log(err)
    }
  })()
});

//-----------------------------------------------------------

module.exports = router;