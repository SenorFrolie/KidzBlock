<?php

	header("Access-Control-Allow-Origin: *");

    require_once '../includes/verifyRequest.php';
    require_once '../includes/dbOperations.php';

    $response = array();

	// Verify that all required post fields are provided
    $valid = new VerifyRequest();
    if($valid->verifyPostScore()){
    	$db = new DBOperations();
        $newHigh = $db->compareScoresFromGame($_POST['g_id'], $_POST['score']);

        // Inset new scores into the database
        if ($newHigh){
        	if($db->insertScore($_POST['g_id'], $_POST['score'], $_POST['name'])){
            	$response['error'] = false;
            	$response['message'] = "New high score saved!";
            	$response['new_h_score'] = true;
          	}else{
            	$response['error'] = true;
            	$response['message'] = "Error communicating with data base.";
        	}	
        }else{
			if($db->insertScore($_POST['g_id'], $_POST['score'], $_POST['name'])){
            	$response['error'] = false;
            	$response['message'] = "Score saved, no new high score.";
            	$response['new_h_score'] = false;
          	}else{
            	$response['error'] = true;
            	$response['message'] = "Error communicating with data base.";
        	}
        }

	}else{
    	$response['error'] = true;
        $response['message'] = "Invalid input.";
    }

    echo json_encode($response);
?>