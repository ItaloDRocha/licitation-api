// import "./api/api.js"
// // import "./style.css";
const html_path = "ata_10583.html";
gravarHTML();

class Licitacao {
  constructor(dados_array) {
    (this.item = dados_array[0]),
      (this.descricao = dados_array[1]),
      (this.descricao_complementar = dados_array[2]),
      (this.tratamento_diferenciado = dados_array[3]),
      (this.quantidade = dados_array[4]),
      (this.unidade_fornecimento = dados_array[5]),
      (this.maximo_aceitavel = dados_array[6]),
      (this.situacao = dados_array[7]),
      (this.aplicabilidade_decreto = dados_array[8]),
      (this.aplicabilidade_margem = dados_array[9]),
      (this.intervalo_lances = dados_array[10]);
  }
}

let licitacoes = [];

// let licitacao = new Licitacao();
// licitacoes.push(licitacao);

async function gravarHTML(html_path) {
  const string_html = await readHtml(html_path);
  $("#app").html(string_html);
  $("#app table .td").each(function (index, element) {
    let dados_array = [];

    let item = $("td", element).html();
    dados_array.push(item);

    let dados = $(element).find("td td");
    console.log(dados);
    // throw error();
    // console.log($(dados[0]).text());
    // console.log($(dados[1]).text());

    

    $.each(dados, function (index, value) {
      dados_array.push($(value).text())
    });

    // console.log(dados_array)

    licitacoes.push(new Licitacao(dados_array))
    


    // let descricao = dados[0];
    // console.log(descricao)

    // let descricao_complementar = $("td tr td", this).html();
    // let tratamento_diferenciado = $("td tr td", this).html();
    // console.log(descricao_complementar)
    // console.log($(this).html())
    // let quantidade = $("td td", this).html();
    // let unidade_fornecimento = $("td td", this).html();
    // let maximo_aceitavel = $("td td", this).html();
    // let situacao = $("td td", this).html();
    // let aplicabilidade_decreto = $("td td", this).html();
    // let aplicabilidade_margem = $("td td", this).html();
    // let intervalo_lances = $("td td", this).html();
    // console.log($("#app table .td ").eq(0).html());
    
  });
  console.log(licitacoes)
}

function readHtml(html) {
  return new Promise((resolve, reject) => {
    $.get("ata_10583.html", function (data) {
      resolve(data);
    });
  });
}

// async function getFile() {
//   let myPromise = new Promise(function(resolve) {
//     let req = new XMLHttpRequest();
//     req.open('GET', "ata_10583.html");
//     req.onload = function() {
//       if (req.status == 200) {
//         resolve(req.response);
//       } else {
//         resolve("File not Found");
//       }
//     };
//     req.send();
//   });
//   $("#app").append(await myPromise);
//   let body = $("#app body").html()
//   $("#app").html(body)
//   $("table .td").each(function (index, element) {
//     console.log(element)
//   });
// }
// getFile();

// const itens [];

let lote_licitacao = 0; //0 = SEM LOTE , 1 = COM LOTE
