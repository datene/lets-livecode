//= require jquery
//= require bootstrap
//= require_tree .



document.addEventListener("DOMContentLoaded", function(event) {

  const currentDate = new Date;
  const textToChange = document.getElementById('beer-time');
  const beerImage = textToChange.dataset.beer;
  const programmingImage = textToChange.dataset.programming;


  if (currentDate.getHours() > 18) {
    textToChange.innerText = "YES";
    document.body.style.backgroundImage = `url(${beerImage})`;
  } else {
    textToChange.innerText = "NO";
    document.body.style.backgroundImage = `url(${programmingImage})`;
  }

});
