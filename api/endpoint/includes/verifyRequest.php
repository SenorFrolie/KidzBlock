<?php

    require_once 'api.php';

    class VerifyRequest{
        function __construct(){

        }

        function verifyPostScore(){

            if($_SERVER['REQUEST_METHOD'] == 'POST'){
                if(isset($_POST['api_token']) && $_POST['api_token'] == API_KEY && isset($_POST['name']) && isset($_POST['score']) && isset($_POST['g_id'])){
					if(is_numeric($_POST['score'])){
                    	return true;
					}else{
						return false;
					}
                }else{
                    return false;
                }
            }else{
                echo 'You might have taken a wrong turn!<br> What you\'re looking for isn\'t here.';
                return false;
            }
        }

        function verifyCheckScore(){
            if($_SERVER['REQUEST_METHOD'] == 'POST'){
			    if(isset($_POST['api_token']) && $_POST['api_token'] == API_KEY && isset($_POST['score']) && isset($_POST['g_id'])){
					if(is_numeric($_POST['score'])){
                    	return true;
					}else{
						return false;
					}
                }else{
                    return false;
                }
            }else{
                echo 'You might have taken a wrong turn!<br> What you\'re looking for isn\'t here.';
                return false;
            }
        }
    }

?>