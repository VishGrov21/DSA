function findPowerValue(baseValue = 1, power = 1) {
  if (power >= 0) {
    if (power === 1) return baseValue;
    if (power === 0) return 1;
    // Find the value for the first half of the power & then multiply with value
    const value = findPowerValue(baseValue, Math.floor(power / 2));
    let powervalue = value * value;
    // If the power is odd number, then reduce to
    // even number then later multiply with base value
    if (power % 2 !== 0) powervalue * baseValue;
    return powervalue;
  } else {
    return 1 / findPowerValue(baseValue, Math.abs(power));
  }
}

console.log(findPowerValue(5, 5));
