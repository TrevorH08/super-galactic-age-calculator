export function roundTwoDecimal(planetAge) {
  return +(Math.round(planetAge + "e+2") + "e-2");
}

export class EarthAge {
  constructor(ageInput, expectancyInput) {
    this.Age = ageInput
    this.MercuryAge = roundTwoDecimal(ageInput * 0.24);
    this.VenusAge = roundTwoDecimal(ageInput * 0.62);
    this.MarsAge = roundTwoDecimal(ageInput * 1.88);
    this.JupiterAge = roundTwoDecimal(ageInput * 11.86);
    this.MercuryYearsLeft = roundTwoDecimal((expectancyInput - ageInput) * 0.24)
    if (ageInput > expectancyInput) {
      this.MercuryYearsLeft = roundTwoDecimal((ageInput - expectancyInput) * 0.24);
    }
    this.VenusYearsLeft = roundTwoDecimal((expectancyInput - ageInput) * 0.62)
    if (ageInput > expectancyInput) {
      this.VenusYearsLeft = roundTwoDecimal((ageInput - expectancyInput) * 0.62);
    }
    this.MarsYearsLeft = roundTwoDecimal((expectancyInput - ageInput) * 1.88)
    if (ageInput > expectancyInput) {
      this.MarsYearsLeft = roundTwoDecimal((ageInput - expectancyInput) * 1.88);
    }
    this.JupiterYearsLeft = roundTwoDecimal((expectancyInput - ageInput) * 11.86)
    if (ageInput > expectancyInput) {
      this.JupiterYearsLeft = roundTwoDecimal((ageInput - expectancyInput) * 11.86);
    }
  }
} 
