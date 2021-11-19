const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

// ---------------- TABELA CLIENTS ------------------------ //

router.get("/clients", (req, res) => {
  const clients = {}

  //INTEGRAÇÃO MYSQL // OBTER TABELA CLIENTS

  res.send(clients);
});

router.post("/client", (req, res) => {
  const client = req.body

  //INTEGRAÇÃO MYSQL // ADICIONAR CLIENT NA TABELA CLIENTS

  res.send(client);
});

router.put("/client", (req, res) => {
  const client = req.body

  //INTEGRAÇÃO MYSQL // ATUALIZAR CLIENT NA TABELA CLIENTS

  res.send(client);
});

router.delete("/client", (req, res) => {
  const clientId = req.query.id

  //INTEGRAÇÃO MYSQL // deletar client

  res.send(clientId);
});

//-----------------------------------------------------------

module.exports = router;