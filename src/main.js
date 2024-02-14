//mandar array de objetos pra api.php
// import "./api/api.js"
// // import "./style.css";
const html_path = "ata_10583.html";
gravarHTML();

let licitacoes = [];

// class Licitacao {
//   constructor(dados_array) {
//     (this.item = dados_array[0]),
//       (this.descricao = dados_array[1]),
//       (this.descricao_complementar = dados_array[2]),
//       (this.tratamento_diferenciado = dados_array[3]),
//       (this.quantidade = dados_array[4]),
//       (this.unidade_fornecimento = dados_array[5]),
//       (this.maximo_aceitavel = dados_array[6]),
//       (this.situacao = dados_array[7]),
//       (this.aplicabilidade_decreto = dados_array[8]),
//       (this.aplicabilidade_margem = dados_array[9]),
//       (this.intervalo_lances = dados_array[10]);
//   }
// }

// let licitacao = new Licitacao();
// licitacoes.push(licitacao);

async function gravarHTML(html_path) {
  const string_html = await readHtml(html_path);
  $("#app").html(string_html);
  const table_licitacoes = $("#app table").not(".tex3, .td, #loading").first();
  console.log(table_licitacoes);

  $(".td",table_licitacoes).each(function (index, element) {
    let dados_array = [];

    let item = $("td", element).eq(0).text();
    // console.log("item",item);
    dados_array.push(item);

    let dados = $(element).find("td td");
    // console.log(dados);
    // throw error();
    // console.log($(dados[0]).text());
    // console.log($(dados[1]).text());

    $.each(dados, function (index, value) {
      // console.log($(value).text().trim());
      dados_array.push($(value).text().trim());
    });

    // console.log(dados_array)
    

    let licitacao_obj = {};

    $.each(dados_array, function (index, value) {
      switch (index) {
        case 0:
          Object.assign(licitacao_obj, {"item": value});
          break;
        case 1:
          Object.assign(licitacao_obj, {"descricao": value});
          break;
        case 2:
          Object.assign(licitacao_obj, {"descricao_complementar": value});
          break;
        case 3:
          Object.assign(licitacao_obj, {"tratamento_diferenciado": value});
          break;
        case 4:
          Object.assign(licitacao_obj, {"quantidade": value});
          break;
        case 5:
          Object.assign(licitacao_obj, {"descricao_complementar": value});
          break;
        case 6:
          Object.assign(licitacao_obj, {"unidade_fornecimento": value});
          break;
        case 7:
          Object.assign(licitacao_obj, {"maximo_aceitavel": value});
          break;
        case 8:
          Object.assign(licitacao_obj, {"situacao": value});
          break;
        case 9:
          Object.assign(licitacao_obj, {"aplicabilidade_decreto": value});
          break;
        case 10:
          Object.assign(licitacao_obj, {"intervalo_lances": value});
          break;

        default:
          break;
      }
    });

    // console.log(licitacao_obj);
    

    licitacoes.push(licitacao_obj);

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
  console.log(licitacoes);
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
