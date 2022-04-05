<?php

    require_once '../includes/verifyRequest.php';
    require_once '../includes/dbOperations.php';

    $response = array();

	// Verify that all requiered post fields are provided
    $valid = new VerifyRequest();
    if($valid->verifyCheckScore()){
        $db = new DBOperations();
        $newHigh = $db->compareScoresFromGame($_POST['g_id'], $_POST['score']);

        if ($newHigh)
            echo 'new high!';
        else
            echo 'neh';

	}else{
        $response['error'] = true;
        $response['message'] = "Invalid input";
    }

    echo json_encode($response);
?>