//= require jquery
//= require bootstrap
//= require_tree .


function getRandomGiphy(tag) {
  fetch("http://api.giphy.com/v1/gifs/random?api_key=mdOEurpRKHYZZilfsXO7DV1vbdDsZSdU&tag=" + tag)
  .then(function(response) { return response.json() })
  .then(function(data) {
    console.log(data.data.image_url);
    document.body.style.backgroundImage = "url(" + data.data.image_url + ")";
  });
}

function getFromSoundcloud(tag) {
  SC.initialize({
    client_id: 'YOUR_CLIENT_ID'
  });

  // find all sounds of buskers licensed under 'creative commons share alike'
  SC.get('/tracks', {
    q: 'buskers', license: 'cc-by-sa'
  }).then(function(tracks) {
    console.log(tracks);
  });
}


document.addEventListener("DOMContentLoaded", function(event) {
  var currentDate = new Date;
  var textToChange = document.getElementById('beer-time');


  if (currentDate.getHours() >= 18) {
    textToChange.innerText = "YES";
    getRandomGiphy("beer") 
  } else {
    textToChange.innerText = "NO";
    getRandomGiphy("boring") 
  }

});
