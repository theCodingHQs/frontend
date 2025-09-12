const showResult = (marks) => {
    const input = document.getElementsByClassName("marks-input");
//   const marks = input[0].value;

//   const input = document.getElementById("inputelement");
//   const marks = input.value;

// const input  = document.querySelectorAll('#inputelement')
// console.log(input)
// const marks = 100


  let grade;

  if (marks > 80) {
    grade = "A";
  } else if (marks > 75) {
    grade = "B";
  } else if (marks > 60) {
    grade = "C";
  } else if (marks < 60) {
    grade = "F";
  }

  switch (grade) {
    case "A": {
      console.log("A Grade");
      break;
    }
    case "B": {
      console.log("B Grade");
      break;
    }
    case "C": {
      console.log("C Grade");
      break;
    }
    case "F": {
      console.log("Fail");
      break;
    }

    default: {
      console.log("Please Provide correct marks");
    }
  }
};

// showResult("abc");
