<?php

    error_reporting(E_ALL);
    ini_set("display_errors", 1);

    // Operations supported by the API
    class DBOperations{
        private $con;
        
        // Object constructor
        function __construct(){
            require_once dirname(__FILE__).'/dbConnect.php';
            $db = new DBConnect();
            $this->con = $db->connect();
        }

        function getLeaderboard($days){
            $response = array();
            $stmt = $this->con->prepare("SELECT * FROM high_scores /*WHERE id=?*/");
            //$stmt->bind_param("i", $days);

            if($res = $stmt->execute()){
                $results = $stmt->get_result();
                $rows = $results->fetch_all(MYSQLI_ASSOC);
                
                if(count($rows) == 0){
                    $response['error'] = false;
                    $response['message'] = "No scores yet!";
                    $response['quantity'] = 0;
                }else{
                    $response['error'] = false;
                    $response['message'] = "Got scores";
                    $response['quantity'] = count($rows);
                    $response['scores'] = $rows;
                }
            }
            return $response;
        }

		// Compare new score with score in BD for a given game
        function compareScoresFromGame($g_id, $score){ 
			$high = 0;
            $stmt = $this-> con->prepare("SELECT * FROM names WHERE g_id=?");
            $stmt->bind_param("i", $g_id);

            if($res = $stmt->execute()){
				$results = $stmt->get_result();
				$rows = $results->fetch_all(MYSQLI_ASSOC);

				foreach ($rows as $row){
					$high = max($high, $row['score']);
				}

				// Check if score is greater than current high
				if($score > $high){
					return true;
				}else{
					return false;
				}

            }
        }

        // Insert data to the data base
        function insertScore($g_id, $score, $name){
            $now = date("Y-m-d H:i:s");
            $stmt = $this-> con->prepare("INSERT INTO names (id, name, score, g_id, date) VALUES (NULL, ?, ?, ?, NOW())");
            $stmt->bind_param("sii", $name, $score, $g_id);

            if ($res = $stmt->execute()){
                return true;
            }else{
                return false;
            }
        }
    }
?>