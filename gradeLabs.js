let studentLabs2 = [
  {
    student: "Blake",
    myCode: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Jessica",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Mya",
    runLab: function (num) {
      return num * num;
    },
  },
];

function gradeLabs(labs) {
    let number = +prompt("Please enter a number:");
    for (const item of labs) {
        try {
            if (typeof item.runLab !== 'function') {
                throw new Error("Error Thrown");
            }
            let result = item.runLab(number);
            console.log(`${item.student}'s code works: ${result === 4}`);
            console.log(`${item.student}'s result is: ${result}`)
        } 
        
        catch (error) {
            console.log(`${item.student} - Error thrown: ${error.message}`);
        }
    }
}

