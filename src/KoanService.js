export class KoanService {
  async getKoan(koanNumber) {
    try {
      let response = await fetch(`http://poetrydb.org/title/${koanNumber}`);
      if (response === "undefined") {
        console.log("Poem not found");
      }
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
