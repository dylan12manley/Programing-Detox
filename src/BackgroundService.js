export class BackgroundService {
  async getBackground(searchKeyword) {
    try {
      let randomNumberThree = Math.floor((Math.random()*5));
      let response = await fetch(`https://api.unsplash.com/photos/?query=${searchKeyword}&per_page=30&page=${randomNumberThree}&client_id=${process.env.API_B}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
