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

        // TODO... work with data base and insert high scores here!
    }


?>