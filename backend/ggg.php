<?php
  class DaDataClient {
    private $apiUrl = 'https://dadata.ru/api/v2';
    private $apiKey;
  
    public function __construct($apiKey) {
      $this->apiKey = $apiKey;
    }
  
    public function findOrganizationByINN($inn) {
      $url = $this->apiUrl . '/party';
      $data = array(
        'query' => $inn
      );
  
      $response = $this->makeRequest($url, $data);
      $suggestions = $response['suggestions'] ?? array();
  
      if (!empty($suggestions)) {
        return $suggestions[0]['value'];
      }
  
      return null;
    }
  
    public function findBankByBIK($bik) {
      $url = $this->apiUrl . '/bank';
      $data = array(
        'query' => $bik
      );
  
      $response = $this->makeRequest($url, $data);
      $suggestions = $response['suggestions'] ?? array();
  
      if (!empty($suggestions)) {
        return $suggestions[0]['value'];
      }
  
      return null;
    }
  
    private function makeRequest($url, $data) {
      $headers = array(
        'Content-Type: application/json',
        'Accept: application/json',
        'Authorization: Token ' . $this->apiKey
      );
  
      $ch = curl_init($url);
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
      curl_setopt($ch, CURLOPT_POST, true);
      curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
  
      $response = curl_exec($ch);
      curl_close($ch);
  
      return json_decode($response, true);
    }
  }
  
  // Использование класса
  
  // Создание экземпляра клиента DaData с передачей API-ключа
  $client = new DaDataClient('4b8a7b9d1a53b30e6faf1b9ebd2330e1758e5530');
  
  // Поиск организации по ИНН
  $inn = '1234567890';
  $organizationName = $client->findOrganizationByINN($inn);
  echo "Наименование организации: $organizationName\n";
  
  // Поиск банка по БИК
  $bik = '044525225';
  $bankName = $client->findBankByBIK($bik);
  echo "Наименование банка: $bankName\n";
?>