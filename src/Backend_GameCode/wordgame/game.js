// ls | perl -pi -e 's/^(.*)\.jpg/"$1",/g'

words = [
    "acorn",
    "apple",
    "backpack",
    "ball",
    "barn",
    "basket",
    "basketball",
    "bear",
    "bed",
    "bee",
    "black",
    "blue",
    "boat",
    "book",
    "brown",
    "bus",
    "cake",
    "california",
    "camera",
    "candy",
    "car",
    "cat",
    "chair",
    "cloud",
    "cow",
    "dog",
    "doll",
    "donkey",
    "duck",
    "elephant",
    "extinguisher",
    "fire",
    "firefighter",
    "fish",
    "four",
    "fox",
    "giraffe",
    "globe",
    "goat",
    "green",
    "hat",
    "horse",
    "hose",
    "house",
    "hydrant",
    "ladder",
    "leaf",
    "leaves",
    "markers",
    "monkey",
    "moose",
    "one",
    "orange",
    "orchard",
    "oregon",
    "panda",
    "people",
    "pie",
    "pig",
    "pink",
    "plane",
    "pumpkin",
    "purple",
    "rain",
    "rake",
    "red",
    "road",
    "rollercoaster",
    "room",
    "ruler",
    "saw",
    "scarecrow",
    "school",
    "seed",
    "shell",
    "snow",
    "soccerball",
    "stars",
    "sun",
    "taxi",
    "teacher",
    "three",
    "train",
    "tree",
    "truck",
    "two",
    "white",
    "yellow"
];
function speak(str) {

    var msg = new SpeechSynthesisUtterance(str);

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(msg);
}



function insertScore(g_id, highscore, name) {

    // request initializer
    const xhr = new XMLHttpRequest();
    // especify the API end-point
    xhr.open("POST", "https://txstate.oscarfortanel.dev/CS3398/kidzblocks/api/v1/highScoreSubmit.php", true);
    // declare data structure for data to be sent
    const data = new FormData();

    // debug message
    console.log("Clicked\n");
    // set requiered fields
    data.append("api_token", "8b444736f91f991ce2ab67da833d8d784674a546f8b27d12461dd58992bb20b9");
    data.append("name", name);
    data.append("score", highscore);
    data.append("g_id", 6);

    // send request
    xhr.send(data);

    // print out request response
    xhr.onload = () => console.log(xhr.response);

}



function GameCntl($scope, $timeout) {
    $scope.clue = "_ar";
    $scope.word = "car";
    $scope.letter = "c";
    $scope.index = 0;
    $scope.right_indicator = false;
    $scope.wrong_indicator = false;
    $scope.number_right = 0;
    $scope.number_Of_tries = 3;

    $scope.timeout = 0;
    $scope.mode = "any";

    $scope.setmode = function (m) {
        $scope.mode = m;
        $scope.next();
    }

    /*
    picks a random work then selects the letters will be removed 
    */
    $scope.next = function () {
        $scope.timeout = 0;

        // Pick a random word
        $scope.word = words[Math.floor(Math.random() * words.length)];

        // Select a letter
        if ($scope.mode == "any") {
            $scope.index = Math.floor(Math.random() * $scope.word.length);
        } else {
            $scope.index = 0;
        }

        $scope.letter = $scope.word[$scope.index];

        $scope.resetclue();
    };

    /*
        gives a clue if you guess an incorrect letter
    */
    $scope.resetclue = function () {
        $scope.timeout = 0;
        $scope.right_indicator = false;
        $scope.wrong_indicator = false;

        $scope.clue = $scope.word.substr(0, $scope.index) + '_'
            + $scope.word.substr($scope.index + 1);

        speak($scope.word);
    };

    /*
     once correctly guessing the letter, ignore all key presses until next
     word
     */
    $scope.keyup = function (e) {
        // If they already got it right, ignore input
        if ($scope.right_indicator) {
            return;
        }

        c = String.fromCharCode(e.keyCode);

        // Ignore key presses outside of A-Z
        if (c < 'A' || c > 'Z') {
            return;
        }

        if (c == $scope.letter.toUpperCase()) {
            $scope.correct();
        } else if (c == ' ') {
            $scope.next();
        } else {
            $scope.incorrect(c);
        }
    };

    $scope.correct = function () {

        $scope.number_right += 1;
        $scope.right_indicator = true;
        $scope.wrong_indicator = false;

        $scope.clue = $scope.word.substr(0, $scope.index) + $scope.letter
            + $scope.word.substr($scope.index + 1);

        if ($scope.timeout != 0) {
            $timeout.cancel($scope.timeout);

        }
        $scope.timeout = $timeout($scope.next, 2000);
 
        // $('#jpId').jPlayer("play");
    };

    $scope.incorrect = function (c) {
        $scope.right_indicator = false;
        $scope.wrong_indicator = true;
        $scope.number_Of_tries--;

        $scope.clue = $scope.word.substr(0, $scope.index) + c.toLowerCase()
            + $scope.word.substr($scope.index + 1);

        if ($scope.number_Of_tries == 0) {
            $timeout.cancel($scope.timeout);
            let name = window.prompt("Enter your initials: ");
            insertScore(6, $scope.number_right, name);
            $scope.number_right = 0;
        }

        $scope.timeout = $timeout($scope.resetclue, 2000);
        speak($scope.clue + "?");
    };
    $scope.next();

}