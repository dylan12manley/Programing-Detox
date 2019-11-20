import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { GiphyService } from './giphy.js';

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
    const bikeYear = $('#bikeYearInput').val();
    $('#bikeYearInput').val("");

    (async () => {
      let bikeService = new BikeService();
      const response = await bikeService.getBike(bikeColor, bikeCity, bikeYear);
      getElements(response);
    })();
    function getElements(response) {
      $('#showBikeNumber').html(response.?);
    }

  });
});

// (async () => {
  //   let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
  //   let jsonifiedResponse = await response.json();
  //   console.log(jsonifiedResponse);
  //   getElements(jsonifiedResponse);
  // })();
