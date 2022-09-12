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

  test("will display the users age in Venus Years", () => {
    const userAge = new EarthAge(22);
    expect(userAge.VenusAge).toEqual(13.64);
  })

  test("will display the users age in Mars Years", () => {
    const userAge = new EarthAge(22);
    expect(userAge.MarsAge).toEqual(41.36);
  })

  test("will display the users age in Jupiter Years", () => {
    const userAge = new EarthAge(22);
    expect(userAge.JupiterAge).toEqual(260.92);
  })

  test("will display how many years left the user has on Mercury", () => {
    const userAge = new EarthAge(22, 78.9);
    expect(userAge.MercuryYearsLeft).toEqual(13.66);
  })

  test("will display how many years lef the user has on Venus", () => {
    const userAge = new EarthAge(22, 78.9);
    expect(userAge.VenusYearsLeft).toEqual(35.28);
  })
  
  test("will display how many years left the user has on Mars", () => {
    const userAge = new EarthAge(22, 78.9);
    expect(userAge.MarsYearsLeft).toEqual(106.97);
  })

  test("will display how many years left the user has on Jupiter", () => {
    const userAge = new EarthAge(22, 78.9);
    expect(userAge.JupiterYearsLeft).toEqual(674.83);
  })

  test("if result of ageInput is greater than expectancyInput, it will convert negative output to positive")
  const userAge = new EarthAge(80, 78.9);
  expect(userAge.MarsAge).toEqual(0.26)
})


describe ('roudnTwoDecimal', () => {

  test("should round inputted number to the nearest second decimal", () => {
    expect(roundTwoDecimal(1.77777)).toEqual(1.78)
  })
})
