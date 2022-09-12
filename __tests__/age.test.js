import { EarthAge } from './../src/js/EarthAge.js'

describe ('EarthAge', () => {
  
  test("display the users Age on Earth as 22", () => {
    const userAge = new EarthAge(22);
    expect(userAge.Age).toEqual(22);
  });

  test("Will display users age in Mercury Years", () => {
    const userAge = new EarthAge(22);
    expect(userAge.MercuryAge).toEqual(5.28);
  })
})
