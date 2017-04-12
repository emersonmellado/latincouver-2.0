<?php

header('Access-Control-Allow-Origin: *');  
header('Content-type: application/json');

$data = fopen('data.json', "r");

echo json_encode($data);
?>