export class GiphyService {
  async getGiphy(keyword) {
    try {
      let response = await fetch(`api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${keyword}&limit=1`);
      console.log(response);
      let jsonifiedResponse = await response.json();
      console.log(jsonifiedResponse);
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
