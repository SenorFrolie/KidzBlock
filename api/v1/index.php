<?php
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        require_once '../includes/dbOperations.php';
        require_once '../includes/api.php';
        if(isset($_POST['api_token']) && $_POST['api_token'] == API_KEY){
            echo 'Hello world!';
        }
    }else{
        echo 'Bad request';
    }


?>