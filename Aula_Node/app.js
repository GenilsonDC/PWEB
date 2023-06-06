var express = require("express");
var app = express(); // executando o express

const port = 3000;

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home/index");
});
app.get("/historia", function (req, res) {
  res.end(
    "<html><body><center><h2>História da Fatec Sorocaba</h2></center></body></html>"
  );
});
app.get("/cursos", function (req, res) {
  res.end(
    "<html><body><center><h2>Cursos da Fatec Sorocaba</h2></center></body></html>"
  );
});
app.get("/professores", function (req, res) {
  res.end(
    "<html><body><center><h2>Professores da Fatec Sorocaba</h2></center></body></html>"
  );
});

app.get("/Atividade12", function (req, res) {
  //res.end(atividade);
  res.render(`Atividades/Atividade.12/janela.ejs`);
});
app.get("/Atividade13", function (req, res) {
  //res.end(atividade);
  res.render(`Atividades/Atividade.13/alterarSTR.ejs`);
});

app.get("/Atividade14", function (req, res) {
  //res.end(atividade);
  res.render(`Atividades/Atividade.14/index.ejs`);
});

app.listen(port, function () {
  console.log("Servidor rodando na porta: ", port);
});
