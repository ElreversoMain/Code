const nome = prompt("Digite seu nome");
const tipo = prompt("[IN]ternacional ou [DO]mestico");
const etapa = prompt("Semi-final [SF], Decisão Terceiro [DT] ou Final [FI]?");
const categoria = Number(prompt("Categoria 1, 2, 3 ou 4?"));
const quantidade = Number(prompt("Quantidade de ingressos?"));

let precoUnitario;

switch (etapa) {
  case "SF":
    switch (categoria) {
      case 1:
        precoUnitario = 1320;
        break;
      case 2:
        precoUnitario = 880;
        break;
      case 3:
        precoUnitario = 550;
        break;
      case 4:
        precoUnitario = 220;
        break;
      default:
        precoUnitario = 0;
        break;
    }
    break;
  case "DT":
    switch (categoria) {
      case 1:
        precoUnitario = 660;
        break;
      case 2:
        precoUnitario = 440;
        break;
      case 3:
        precoUnitario = 330;
        break;
      case 4:
        precoUnitario = 170;
        break;
      default:
        precoUnitario = 0;
        break;
    }
    break;
  case "FI":
    switch (categoria) {
      case 1:
        precoUnitario = 1980;
        break;
      case 2:
        precoUnitario = 1320;
        break;
      case 3:
        precoUnitario = 880;
        break;
      case 4:
        precoUnitario = 330;
        break;
      default:
        precoUnitario = 0;
        break;
    }
    break;
  default:
    break;
}

if (tipo === "IN") {
  precoUnitario = precoUnitario * 4.1;
}

let textoTipo;
if (tipo === "DO") {
  textoTipo = "Doméstico";
} else if (tipo === "IN") {
  textoTipo = "Internacional";
} else {
  textoTipo = "Erro";
}

let textoEtapa;
switch (etapa) {
  case "SF":
    textoEtapa = "Semi-Final";
    break;
  case "DT":
    textoEtapa = "Decisão Terceiro";
    break;
  case "FI":
    textoEtapa = "Final";
    break;
  default:
    textoEtapa = "Erro";
    break;
}

// Saídas
console.log("---Dados da compra---");
console.log("Nome do cliente:", nome);
console.log("Tipo do jogo:", textoTipo);
console.log("Etapa do Jogo:", textoEtapa);
console.log("Categoria:", categoria);
console.log("---Valores--- ");
console.log("Valor do Ingresso:", precoUnitario);
console.log("Valor Total da Compra:", precoUnitario * quantidade);
