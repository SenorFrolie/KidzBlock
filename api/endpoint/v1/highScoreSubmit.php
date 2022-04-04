<?php
    require_once '../includes/verifyRequest.php';

    // Verify that all requiered post fields are provided
    $valid = new VerifyRequest();
    if($valid->verifyPostScore()){
        // verify that the value from $_POST['score'] is a number
        if(is_numeric($_POST['score'])){
            echo 'Ready for scores!';
        }

    }


?>