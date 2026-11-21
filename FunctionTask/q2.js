const calculateTotal = (a, b, c) => a + b + c;
const calculateAverage = (a, b, c) => {
  return calculateTotal(a, b, c) / 3;
};
const getDivision = (average) => {
  if (average >= 70) {
    return "First Division";
  } else if (average >= 60) {
    return "Second Division";
  } else if (average >= 50) {
    return "Third Division";
  } else {
    return "Fail";
  }
};
const processResult = (name, a, b, c, divisionRule) => {
  const average = calculateAverage(a, b, c);
  const division = divisionRule(average);

  console.log(`Student: ${name}`);
  console.log(`Average: ${average}`);
  console.log(`Division: ${division}`);
};
processResult("Kashu", 90, 85, 70, getDivision)