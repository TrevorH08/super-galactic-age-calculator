export function roundTwoDecimal(planetAge) {
  return +(Math.round(planetAge + "e+2") + "e-2");
}
export function EarthAge(ageInput, expectancyInput) {
  this.Age = ageInput
  this.MercuryAge = roundTwoDecimal(ageInput * 0.24);
  this.VenusAge = roundTwoDecimal(ageInput * 0.62);
  this.MarsAge = roundTwoDecimal(ageInput * 1.88);
  this.JupiterAge = roundTwoDecimal(ageInput * 11.86);
  this.MercuryYearsLeft = roundTwoDecimal((expectancyInput - ageInput) * 0.24);
  this.VenusYearsLeft = roundTwoDecimal((expectancyInput - ageInput) * 0.62);
  this.MarsYearsLeft = roundTwoDecimal((expectancyInput - ageInput) * 1.88);
  this.JupiterYearsLeft = roundTwoDecimal((expectancyInput - ageInput) * 11.86);
}
