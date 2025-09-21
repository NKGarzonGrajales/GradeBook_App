
const getAverage = require("./getAverage.js");

// # 2 getGrade  

function getGrade(score) {
  
  if(score === 100){
    return "A++";
  } else if(score >= 90 && score <= 99){
    return "A";
  } else if (score >=80 && score <= 89){
    return "B"; 
  } else if(score >=70 && score <= 79){
    return "C";
  }else if(score >=60 && score <= 69){
    return "D"; 
  }else if (score >=0 && score <= 59){
    return "F"; 
  }

}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));


// #3 Ejercicio usando la funcion getGrade, A passing grade is anything that is not an "F".

function hasPassingGrade(score) {
  if(getGrade(score) !== "F"){
    return true; 
  } return false; 
  
  
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

function studentMsg(totalScores, studentScore) {
  const average = getAverage(totalScores);   
  const grade = getGrade(studentScore);                 
  const status = hasPassingGrade(studentScore)
    ? "You passed the course."
    : "You failed the course.";

return "Class average: " + average + ". Your grade: " + grade + ". " + status;

}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));