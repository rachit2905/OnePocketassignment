const readline = require('readline');

function sumArrayIntegers() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter the size of the array: ', (size) => {
    if (!Number.isInteger(+size) || +size <= 0) {
      console.log('Invalid size. Size must be a positive integer.');
      rl.close();
      return;
    }

    const arr = [];
    let currentIndex = 0;

    function getInput() {
      if (currentIndex >= size) {
        rl.close();
        calculateSum();
        return;
      }

      rl.question(`Enter integer ${currentIndex + 1}: `, (input) => {
        const num = +input;

        if (!Number.isInteger(num)) {
          console.log('Invalid input. Please enter an integer.');
          getInput();
          return;
        }

        arr.push(num);
        currentIndex++;
        getInput();
      });
    }

    function calculateSum() {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      console.log('Sum:', sum);
    }

    getInput();
  });
}

// Call the function to start the input process
sumArrayIntegers();
