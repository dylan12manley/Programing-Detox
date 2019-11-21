import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { GiphyService } from './giphy.js';
import { KoanService } from './KoanService.js'
import { BackgroundService } from './BackgroundService.js'


function arrayToStrings(practiceArray) {
  let mapVariable = practiceArray.map(function(i) {
    if (i === "") {
      return "<br>";
    } else {
    return "<p>" + i + "</p>"
  }
  });
  return mapVariable;
}

$(document).ready(function() {
  $('form#userInput').submit(function() {
    event.preventDefault();
    let randomNumber = Math.floor((Math.random()*10));
    let randomNumberTwo = Math.floor((Math.random()*30));
    const searchKeyword = $('#searchKeyword').val();
    $('#searchKeyword').val("");
    (async () => {
      let giphyService = new GiphyService();
      const response = await giphyService.getGiphy(searchKeyword);
      getElements(response);
    })();
    function getElements(response) {
      $('#showGif').attr('src', response.data[randomNumber].images.original.url);
    }

    (async () => {
      let koan = new KoanService();
      let response = await koan.getKoan(searchKeyword);
      getKoanElements(response);
    })();
    function getKoanElements(response) {
      $(".results").show();
      if (response.length === undefined) {
        $('#showKoanAuthor').text("Please enter a more common keyword to recieve a poem.").val();
        $('#showKoanTitle').text("").val();
        $('#showKoanLines').html("").val();
      } else if (response.length <= randomNumber) {
        $('#showKoanAuthor').text(`Written by: ${response[response.length - 1].author}`).val();
        $('#showKoanTitle').text(response[response.length - 1].title).val();
        $('#showKoanLines').html(arrayToStrings(response[response.length - 1].lines)).val();
      } else {
        $('#showKoanAuthor').text(`Poem by: ${response[randomNumber].author}`).val();
        $('#showKoanTitle').text(response[randomNumber].title).val();
        $('#showKoanLines').html(arrayToStrings(response[randomNumber].lines)).val();
      }
    }


    (async () => {
      let backgroundService = new BackgroundService();
      const response = await backgroundService.getBackground(searchKeyword);
      getBackgroundElements(response);
    })();

    function getBackgroundElements(response) {
      const url = response[randomNumberTwo].urls.regular;
      // $('#showGif').attr('src', response.data[randomNumber].images.original.url);
      $("body").css("background-image", `url(${url})`);
    }

  });
});
