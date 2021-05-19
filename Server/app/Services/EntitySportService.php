<?php

namespace App\Services;

use Exception;

const DEBUG_LOG = true;

class EntitySportService
{

    /**
     *
     * @param $endpoint
     * @param array $params
     * @return object|false
     */
    public static function getApiCall($endpoint, $params=[]){
        try{
            $curl = curl_init();

            $token = "921282c3c57e5ab61a5cb0c96fb16842";
            $url = "https://rest.entitysport.com/v2/${endpoint}/?token=${token}";
            foreach ($params as $key => $value ){
                $url .= "&${key}=${value}";
            }

            curl_setopt_array($curl, array(
                CURLOPT_URL => $url,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'GET',
            ));

            $resp = curl_exec($curl);
            curl_close($curl);

            $response = json_decode(json_encode(json_decode($resp)), true);
            if($response['status'] == "ok"){
                return $response['response'];
            }

            if(DEBUG_LOG){
                dump($response);
            }
            return false;
        } catch (Exception $e) {
            if(DEBUG_LOG){
                dump($e);
            }
            return false;
        }
    }
}
