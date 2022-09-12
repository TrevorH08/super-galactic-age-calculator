export function roundTwoDecimal(planetAge) {
  return +(Math.round(planetAge + "e+2") + "e-2");
}
export function EarthAge(ageInput) {
  this.Age = ageInput
  this.MercuryAge = roundTwoDecimal(ageInput * 0.24);
  this.VenusAge = roundTwoDecimal(ageInput * 0.62);
}