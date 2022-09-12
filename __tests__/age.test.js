import { EarthAge } from './../src/js/EarthAge.js'

describe ('EarthAge', () => {
  
  test("display the users Age on Earth as 22", () => {
    const userAge = new EarthAge(22);
    expect(EarthAge(userAge)).toEqual(22);
  });
})
