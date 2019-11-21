export class KoanService {
  async getBike(koanNumber) {
    try {
      let response = await fetch(`https://fastapi.metacpan.org/source/LUKEC/Zen-Koans-0.05/lib/Zen/Koans.pm`);
      console.log(response);
      let jsonifiedResponse = await JSON.parse(response.json());
      // const response = JSON.parse(this.response);
      console.log(jsonifiedResponse);
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
