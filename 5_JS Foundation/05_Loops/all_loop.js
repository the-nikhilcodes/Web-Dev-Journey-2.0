const students = [
  { name: "Ram", scores: [80, 90, 85] },
  { name: "shyam", scores: [70, 75, 78] },
  { name: "Satyam", scores: [88, 92, 95] },
];

// FOR loop (students)
for (let i = 0; i < students.length; i++) {
  let student = students[i];
  let total = 0;
  let j = 0;

  // WHILE loop (scores)
  while (j < student.scores.length) {
    total += student.scores[j];
    j++;
  }

  let average = total / student.scores.length;
  console.log(`Student: ${student.name}, Average: ${average}`);

  // FOR...OF loop + condition
  for (const score of student.scores) {
    if (score >= 90) {
      console.log("  Excellent score:", score);
    }
  }
}
