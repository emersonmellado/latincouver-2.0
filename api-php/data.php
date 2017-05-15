<?php

header('Access-Control-Allow-Origin: *');  
header('Content-type: application/json');

// $data = fopen('data.json', "r");
// $data = file_get_contents('./data.json', true);

// echo $data;

$json = new API_CALL(array(
   'url' => 'http://latincouver.er7.ca/api/api.php/',
));
echo $json->generate();

class API_CALL {
  protected $settings;
  public function __construct($config) {
    extract($config);

    // initialize
    $url = isset($url) ? $url : null;
    $this->settings = compact('url');
  }  

  function generate(){   
    $data = $this->getUserById();
    return $data;
  }

  function getUserById(){
    extract($this->settings);
    $userData = $this->call('GET', $url . '/user?include=userprofile&filter=userid,eq,1&transform=1');
    return $userData;
  }

  function call($method, $url, $data = false) {
      $ch = curl_init();
      curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
      curl_setopt($ch, CURLOPT_URL, $url);
      if ($data) {
          curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
          $headers = array();
          $headers[] = 'Content-Type: application/json';
          $headers[] = 'Content-Length: ' . strlen($data);
          curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
      }
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      $response = curl_exec($ch);
      curl_close($ch);
      return $response;
      //return json_decode($response, true);
  }
}