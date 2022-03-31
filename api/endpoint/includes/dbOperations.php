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
    }
?>