<?php

    require_once '../includes/verifyRequest.php';
    require_once '../includes/dbOperations.php';

    $response = array();

	// Verify that all requiered post fields are provided
    $valid = new VerifyRequest();
    if($valid->verifyPostScore()){
    	$db = new DBOperations();
        $newHigh = $db->compareScoresFromGame($_POST['g_id'], $_POST['score']);

        // Inset new scores into the database
        if ($newHigh){
        	if($db->insertScore($_POST['g_id'], $_POST['score'], $_POST['name'])){
            	$response = array();
            	$response['error'] = false;
            	$response['message'] = "New high score saved!";
            	$response['new_h_score'] = true;
          	}else{
				$response = array();
            	$response['error'] = true;
            	$response['message'] = "Error comincatig with data base.";
        	}	
        }else{
        	$response = array();
        	$response['error'] = false;
        	$response['message'] = "Higher score found, no new high score.";
        	$response['new_h_score'] = false;
        }

	}else{
    	$response['error'] = true;
        $response['message'] = "Invalid input.";
    }

    echo json_encode($response);
?>