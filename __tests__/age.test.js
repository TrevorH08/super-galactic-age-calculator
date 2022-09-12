import { EarthAge, roundTwoDecimal } from './../src/js/EarthAge.js'

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

describe ('roudnTwoDecimal', () => {

  test("should round inputted number to the nearest second decimal", () => {
    expect(roundTwoDecimal(1.77777)).toEqual(1.78)
  })
})
