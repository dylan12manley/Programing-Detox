export class BikeService {
  async getBike(bikeColor, bikeCity) {
    try {
      let response = await fetch(`https://bikeindex.org/api/v3/search?location=97201&distance=1&stolenness=proximity&color=Red&access_code=5f1812606c637a072c56027f4855fe9a717831421245f455ff5f5945bdb6169d`);
      console.log(response);
      let jsonifiedResponse = await response.json();
      console.log(jsonifiedResponse);
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
//
// https://bikeindex.org/api/v3/search?location=${bikeCity}&distance=1&stolenness=proximity&color=${bikeColor}&access_token=${process.env.BIKE_API_KEY}
