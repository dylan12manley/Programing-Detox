import { GiphyService } from './../src/giphy.js';

describe('elephant', () =>{

  test('return the url of the first element in the json file from giphy', async () => {
    const newGiphyService = new GiphyService();
    console.log(newGiphyService);
    const result = await newGiphyService.getGiphy("elephant");
    console.log(result);
    expect(result.data[0].images.original.url).toBe("https://giphy.com/gifs/got-get-run-SWKyABQ08mbXW")
  })
})
