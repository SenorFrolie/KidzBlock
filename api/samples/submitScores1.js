var formData = new FormData();

formData.append("api_token", "8b444736f91f991ce2ab67da833d8d784674a546f8b27d12461dd58992bb20b9");
formData.append("name", "Name");
formData.append("score", 13);
formData.append("g_id", 1);


var request = new XMLHttpRequest();
request.open("POST", "https://txstate.oscarfortanel.dev/CS3398/kidzblocks/api/v1/highScoreSubmit.php");
request.send(formData);

request.onload = () => console.log(request.response);