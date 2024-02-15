<?php
header("Access-Control-Allow-Origin:* ");

header("Access-Control-Allow-Headers:* ");

header("Access-Control-Allow-Methods:* ");

$retorno = ["message" => "testeronisonildoson"];

echo json_encode($retorno);

// $licitacao = $_POST['licitacoes'];

// $retorno = var_dump($licitacao);

// return json_encode($retorno);

// $html = $licitacao->html;
// $tipo = $licitacao->tipo;

// $arquivo_html_licitacao = "licitacao.html"; // or .php   
// $fh = fopen($arquivo_html_licitacao, 'w'); // or die("error");  
// fwrite($fh, $html);
// fclose($fh);
// // header("Content-Type: application/json");
// $result = ['Message' => 'Arquivo recriado com sucesso'];

// echo json_encode($result);
