export class KoanService {
  async getKoan(koanNumber) {
    try {
      let response = await fetch(`http://poetrydb.org/title/${koanNumber}`);
      let jsonifiedResponse = await response.json();
      // const response = JSON.parse(this.response);
      console.log(jsonifiedResponse);
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
