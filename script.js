const students = [
  {
    name: 'John',
    gradeOne: 5,
    gradeTwo: 7,
  },
  {
    name: 'Jane',
    gradeOne: 6,
    gradeTwo: 8,
  },
  {
    name: 'Bob',
    gradeOne: 4,
    gradeTwo: 7,
  },
  {
    name: 'Mary',
    gradeOne: 7,
    gradeTwo: 10,
  },
];

const calculateAverage = (position) => {
  const average =
    (Number(students[position].gradeOne) +
      Number(students[position].gradeTwo)) /
    2;

  if (average >= 7) {
    alert(
      `The average of ${students[position].name} is: ${average} \nCongrats ${students[position].name}, you passed!`
    );
  } else {
    alert(
      `The average of ${students[position].name} is: ${average} \nSorry ${students[position].name}, you didn't pass!`
    );
  }
};

for (let i = 0; i < students.length; i++) {
  calculateAverage(i);
}
