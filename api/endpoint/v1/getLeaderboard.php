<?php
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        require_once '../includes/dbOperations.php';
        require_once '../includes/api.php';

        $response = array();
        if(isset($_POST['api_token']) && $_POST['api_token'] == API_KEY){
            $db = new DBOperations();
            $response = $db->getLEaderboard(1);

            echo json_encode($response);
        }
    }else{
        echo 'Bad request';
    }


?>