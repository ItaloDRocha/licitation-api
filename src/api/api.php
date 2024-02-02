<?php

$licitacao = $_POST['licitacao'];

$html = $licitacao->html;
$tipo = $licitacao->tipo;

$arquivo_html_licitacao = "licitacao.html"; // or .php   
$fh = fopen($arquivo_html_licitacao, 'w'); // or die("error");  
fwrite($fh, $html);
fclose($fh);
// header("Content-Type: application/json");
$result = ['Message' => 'Arquivo recriado com sucesso'];

echo json_encode($result);