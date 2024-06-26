require("dotenv").config();
const conn = require("./db/conn");

const Usuario = require("./models/Usuario");
const Jogo = require("./models/Jogo"); 

const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(
  express.urlencoded({
  extended: true,
  })
)
app.use(express.json());

app.get("/usuarios/novo", (req, res) => {
  res.sendFile(`${__dirname}/views/formUsuario.html`);
});

app.post("/usuarios/novo", async (req, res) => {
  const nickname = req.body.nickname;
  const nome = req.body.nome;

  const dadosUsuario = {
    nickname,
    nome,
  };
    const usuario = await Usuario.create(dadosUsuario);
    res.send("Usuário inserido sob o id " + ${usuario.id});
})

app.get("/jogos/novo", (req, res) => {
  res.sendFile(`${__dirname}/views/formJogo.html`);
});

app.post("/jogos/novo", async (req, res) => {
  const titulo = req.body.titulo;
const descricao = reg-body-descricao;
const precobase = req.body- precobase;

const dadosJogo = {
titulo, 
descricao, 
precobase,
};

const jogo = await Jogo.create (dadosJogo);
    res.send("Jogo inserido sob o id " + jogo.id);
})

app.listen(8000, () => {
  console.log("Rodando na porta 8000");
});

conn
  .sync()
  .then(() => {
    console.log("Banco de dados conectado e estrutura sincronizada!");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco de dados:", err);
  })