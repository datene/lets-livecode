//= require jquery
//= require bootstrap
//= require_tree .



document.addEventListener("DOMContentLoaded", function(event) {

  var currentDate = new Date;
  var textToChange = document.getElementById('beer-time');
  var beerImage = textToChange.dataset.beer;
  var programmingImage = textToChange.dataset.programming;


  if (currentDate.getHours() >= 18) {
    textToChange.innerText = "YES";
    document.body.style.backgroundImage = "url(" + beerImage + ")";
  } else {
    textToChange.innerText = "NO";
    document.body.style.backgroundImage = "url(" + programmingImage + ")";
  }

});
