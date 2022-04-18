<?php
	require_once '../includes/verifyRequest.php';
	require_once '../includes/dbOperations.php';

	$response = array();

	// Verify provided inputs to API
	$valid = new VerifyRequest();
	if($valid->verifyGetLeaderboard()){
		$db = new DBOperations();

		$response = $db->getScores($_POST['g_id'], $_POST['quantity']);
	}else{
		$response['error'] = true;
		$response['message'] = "Invalid input";
	}

		echo json_encode($response);

?>