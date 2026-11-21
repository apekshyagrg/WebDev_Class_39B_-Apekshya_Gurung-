const calculateTotal = (m1, m2, m3) => m1 + m2 + m3;
const calculateAverage = (m1, m2, m3) => {
  return calculateTotal(m1, m2, m3) / 3;
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
const processResult = (name, m1, m2, m3, divisionRule) => {
  const average = calculateAverage(m1, m2, m3);
  const division = divisionRule(average);

  console.log(`Student: ${name}`);
  console.log(`Average: ${average}`);
  console.log(`Division: ${division}`);
};
processResult("Kashu", 90, 85, 70, getDivision)
