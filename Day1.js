import {readFileSync} from "fs";

let data = readFileSync("./InputText/Day1.txt", "utf8").split("\n");

// For Part 1
function part1() {
  let sum = 0;
  data.forEach((line) => {
    line = line.trim();
    let digits = [];

    for (let char in line) {
      if (!isNaN(line[char])) {
        digits.push(line[char]);
      }
    }

    let number = digits[0] + digits[digits.length - 1];

    sum += parseInt(number);
  });

  console.log(sum);
}



// For Part 2
function part2() {

    const numberWords = {
        one: "1",
        two: "2",
        three: "3",
        four: "4",
        five: "5",
        six: "6",
        seven: "7",
        eight: "8",
        nine: "9"
    };

  let sum = 0;
  data.forEach((line) => {
    line = line.trim();
    let digits = [];

    // replace all word numbers with digits - The replacement is such that it is o1e for one
    // t2o for two and so one because if just replaced it with twone, we might get tw1 or 2ne
    // because they share same letter
    for (let word in numberWords) {
        if (line.includes(word)) {
            let intermediate = word[0] + numberWords[word] + word.slice(-1)
            line = line.replace(new RegExp(word, 'g'), intermediate)
        }

    }

    for (let char in line) {
      if (!isNaN(line[char])) {
        digits.push(line[char]);
      }
    }

    let number = digits[0] + digits.slice(-1);

    sum += parseInt(number);
  });

  console.log(sum);
}

part2();