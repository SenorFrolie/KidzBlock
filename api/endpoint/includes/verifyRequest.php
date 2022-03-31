<?php

    require_once 'api.php';

    class VerifyRequest{
        function __construct(){

        }

        function verifyPostScore(){
            if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['api_token']) && $_POST['api_token'] == API_KEY && isset($_POST['name']) && isset($_POST['score'])){
                return true;
            }
        }
    }

?>