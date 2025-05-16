// function sumEvenNumbers(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// console.log(sumEvenNumbers([1, 2, 3, 6, 8, 9, 10, 16, 18]));

// function countEvenNumbers(arr) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       count++;
//     }
//   }
//   return count;
// }

// function countVowels(str) {
//   let count = 0;

//   for (let index = 0; index < str.length; index++) {
//     let char = str[index];
//     if ("aeiou".includes(char)) count++;
//   }
//   return count;
// }

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("Ashley"));
// console.log(reverseString("Oscar"));

// function analyzeGrades(students) {
//   //calculates each students average
//   const studentAverages = students.map((student) => {
//     const total = student.grades.reduce((sum, grade) => sum + grade, 0);
//     const average = total / student.grades.length;
//     return {
//       name: student.name,
//       average: average,
//     };
//   });

//   // filter students with average >= 85
//   const topStudents = studentAverages
//     .filter((student) => student.average >= 85)
//     .map((student) => student.name);
//   // calculate overall class average

//   const allGrades = students.flatMap((student) => student.grades);
//   const totalGrades = allGrades.reduce((sum, grade) => sum + grade, 0);
//   const classAverage = totalGrades / allGrades.length;

//   return {
//     topStudents: topStudents,
//     classAverage: parseFloat(classAverage.toFixed(1)),
//   };
// }

// console.log(
//   analyzeGrades([
//     { name: "Alice", grades: [88, 92, 79, 93] },
//     { name: "Bob", grades: [70, 85, 78, 80] },
//     { name: "Charlie", grades: [90, 95, 91, 89] },
//   ])
// );

// function evaluateEmployees(employees) {
//   // calculate each employees average score

//   const employeeScores = employees.map((employee) => {
//     const total = employee.performance.reduce((sum, score) => sum + score, 0);
//     const score = total / employee.performance.length;

//     return {
//       name: employee.name,
//       performance: score,
//     };
//   });

//   //top performers
//   const topEmployees = employeeScores
//     .filter((employee) => employee.performance >= 4.5)
//     .map((employee) => employee.name);
//   // under performers
//   const underEmployees = employeeScores
//     .filter((employee) => employee.performance <= 3.0)
//     .map((employee) => employee.name);

//   // calculate All employee performance
//   const allPerformances = employees.flatMap((employee) => employee.performance);
//   const totalPerformances = allPerformances.reduce(
//     (sum, score) => sum + score,
//     0
//   );
//   const storeAverage = totalPerformances / allPerformances.length;

//   return {
//     topEmployees: topEmployees,
//     underEmployees: underEmployees,
//     AverageStorePerformance: parseFloat(storeAverage.toFixed(2)),
//   };
// }

// console.log(
//   evaluateEmployees([
//     { name: "Alice", performance: [5, 5, 4, 5] },
//     { name: "Bob", performance: [3, 2, 4, 3] },
//     { name: "Carol", performance: [2, 2, 2, 3] },
//     { name: "Dan", performance: [4, 4, 5, 5] },
//   ])
// );

// function groupAnagrams(words) {
//   const map = {};

//   for (let word of words) {
//     const sorted = word.split("").sort().join("");
//     if (!map[sorted]) {
//       map[sorted] = [];
//     }
//     map[sorted].push(word);
//   }
//   return Object.values(map);
// }

// const students = [
//   { name: "Alice", scores: [90, 85, 88] },
//   { name: "Bob", scores: [65, 70, 60] },
//   { name: "Charlie", scores: [95, 100, 98] },
//   { name: "David", scores: [68, 64, 72] },
// ];
// function getTopStudents(students) {
//   //calculate average test scores of each student
//   const averageScores = students.map((student) => {
//     const score = student.scores.reduce((sum, grade) => sum + grade, 0);
//     const average = parseFloat((score / student.scores.length).toFixed(2));

//     return {
//       name: student.name,
//       scores: average,
//     };
//   });

//   //filter out students with an average score below 70

//   const topStudents = averageScores
//     .filter((student) => student.scores >= 70)
//     .sort((a, b) => a.scores - b.scores);

//   //sort students in list from highest average to lowest

//   return topStudents;
// }
// console.log(getTopStudents(students));

function getHonorRollStudents(students) {
  //calculate scores of each student
  const studentScores = students.map((student) => {
    const total = student.scores.reduce((sum, grade) => sum + grade, 0);
    const average = total / student.scores.length;

    return {
      name: student.name,
      average: average,
    };
  });

  const topStudents = studentScores
    .filter((student) => student.average >= 80)
    .map((student) => student.name);

  return topStudents;
}

console.log(
  getHonorRollStudents([
    { name: "Alice", scores: [85, 90, 78] },
    { name: "Bob", scores: [60, 65, 70] },
    { name: "Charlie", scores: [95, 100, 98] },
    { name: "Diana", scores: [50, 55, 58] },
  ])
);
