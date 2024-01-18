let studentList = [
  {
    studentName: 'Murilo',
    firstGrade: 6,
    secondGrade: 9,
  },

  {
    studentName: 'Ana',
    firstGrade: 5,
    secondGrade: 3,
  },

  {
    studentName: 'Sara',
    firstGrade: 8,
    secondGrade: 8,
  },
];

function calculateAverage(firstGrade, secondGrade) {
  let average = (firstGrade + secondGrade) / 2;
  return average;
}

for (let student of studentList) {
  let individualAverage = calculateAverage(
    student.firstGrade,
    student.secondGrade
  );
  let passedOrNot =
    individualAverage < 7
      ? 'Unfortunately, not this time. Study more.'
      : 'Congratulations on your approval.';

  alert(`The average grade of ${student.studentName} is ${individualAverage}.
${passedOrNot}`);
}
