const data = [
  { id: 1, firstName: "Hobert", lastName: "Rarężlak", marks: [3, 3.5, 3, 5] },
  { id: 2, firstName: "Basia", lastName: "Kasińska", marks: [5, 4.5, 3, 5] },
  { id: 3, firstName: "Haciej", lastName: "Mubert", marks: [2, 2.5, 5, 5] },
  { id: 4, firstName: "Hawid", lastName: "Dolisz", marks: [5, 4.5, 5, 5] },
  { id: 5, firstName: "Dateusz", lastName: "Mobija", marks: [2, 5, 2, 5] },
];

let sum = 0;

const averageGrade = data.reduce((previousValue, currentValue) => {
  const totalMarks = currentValue.marks.reduce((sum, element) => sum + element);
  const studentAverage = totalMarks / currentValue.marks.length;
  sum = sum + studentAverage;
  return sum / data.length;
}, 0);

console.log(averageGrade);
