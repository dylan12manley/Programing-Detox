export class BackgroundService {
  async getBackground(koanNumber) {
    try {
      let response = await fetch(`https://api.unsplash.com/photos/?query=red&orientation=squarish&client_id=${process.env.API_B}`);
      console.log(response);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
