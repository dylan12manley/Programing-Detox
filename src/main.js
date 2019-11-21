import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { GiphyService } from './giphy.js';
import { BikeService } from './BikeServices.js'
import { KoanService } from './KoanService.js'


function arrayToStrings(practiceArray) {
  let mapVariable = practiceArray.map(function(i) {
    return "<p>" + i + "</p>"
  });
  return mapVariable;
}


$(document).ready(function() {
  $('#start').click(function() {

    const giphyKeyword = $('#giphyKeyword').val();
    $('#giphyKeyword').val("");
    (async () => {
      let giphyService = new GiphyService();
      const response = await giphyService.getGiphy(giphyKeyword);
      getElements(response);
    })();
    function getElements(response) {
      $('#showGif').attr('src', response.data[0].images.original.url);
    }

    const bikeColor = $('#bikeColorInput').val();
    $('#bikeColorInput').val("");
    const bikeCity = $('#bikeCityInput').val();
    $('#bikeCityInput').val("");

    (async () => {
      let bikeService = new BikeService();
      const response = await bikeService.getBike(bikeColor, bikeCity);
      getBikeElements(response);
    })();
    function getBikeElements(response) {
      console.log(response.bikes.length);
      $('#show-bike-number').text(response.bikes.length).val();
    }

    const koanNumber = $('#koanInput').val();
    $('#koanInput').val("");

    (async () => {
      let koan = new KoanService();
      let response = await koan.getKoan(koanNumber);
      getKoanElements(response);
    })();
    function getKoanElements(response) {
      console.log(response[0].lines);
      $('#showKoanTitle').text(response[0].title).val();
      $('#showKoanAuthor').text(response[0].author).val();
      $('#showKoanLines').html(arrayToStrings(response[0].lines)).val();
    }

  });
});

// (async () => {
  //   let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
  //   let jsonifiedResponse = await response.json();
  //   console.log(jsonifiedResponse);
  //   getElements(jsonifiedResponse);
  // })();
