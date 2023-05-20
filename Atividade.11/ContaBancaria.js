function Usuario_Conta() {
  var Nome;
  var Agencia;
  var Conta;
  var Saldo;

  this.CliCorrente = function () {
    alert(
      "Conta Corrente" +
        this.Nome +
        " " +
        this.Agencia +
        " " +
        this.Conta +
        " " +
        this.Saldo
    );
    var slc = `${clienteC}`;
  };
  //   this.CliPoupanca = function () {
  //     var clienteP =
  //       "Conta Poupança" +
  //       this.Nome +
  //       " " +
  //       this.Agencia +
  //       " " +
  //       this.Conta +
  //       " " +
  //       this.Saldo;
  //     var slp = `${clienteP}`;
  //   };
}
// Usuario_Conta.Nome = prompt("Digite seu nome: ");
// Usuario_Conta.Agencia = parseInt(prompt("Código da Agencia: "));
// Usuario_Conta.Conta = parseInt(prompt("Código da Conta: "));
// var Deposito = parseFloat(prompt("Digite o valor a ser depositado: "));
// var saldTt = console.log((this.Saldo = Saldo + Deposito));

// var vaiParaoHTML = document.querySelector("clienteP").value;
