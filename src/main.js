import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { GiphyService } from './giphy.js';
import { KoanService } from './KoanService.js'


function arrayToStrings(practiceArray) {
  let mapVariable = practiceArray.map(function(i) {
    return "<p>" + i + "</p>"
  });
  return mapVariable;
}

$(document).ready(function() {
  $('#start').click(function() {
    let randomNumber = Math.floor((Math.random()*10));
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
      $('#showKoanAuthor').text(response[randomNumber].author).val();
      $('#showKoanTitle').text(response[randomNumber].title).val();
      $('#showKoanLines').html(arrayToStrings(response[randomNumber].lines)).val();
    }
  });
});
