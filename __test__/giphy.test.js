import { GiphyService } from './../src/giphy.js';

describe('elephant', () =>{
  let newGiphyService;

  beforeEach(function() {
    newGiphyService = new GiphyService();
  });
  test('return the url of the first element in the json file from giphy', () => {
    expect(newGiphyService.getGiphy("elephant")).toEqual("https:\/\/media1.giphy.com\/media\/SWKyABQ08mbXW\/giphy.gif?cid=0272742c37fb16a0ae9f45defded3d606e41fc8689862132&rid=giphy.gif")
  })
})
