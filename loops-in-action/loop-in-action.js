// access the button element
const calculateSumButtonElement = document.querySelector("#calculator button");

// create function ,
// 1. by accessing element on by one then assign their value to variable
// 2. assign start result variable (0)
// 3. for loop initiation
// 4. access output element
// 5. assign summed result to its textcontent value
// 6. update the style display of html via javascript

function calculateSumNumber() {
  const userEnterNumberElement = document.getElementById("user-number");
  const enteredNumber = userEnterNumberElement.value;

  let sumUpToNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }

  const outputSumUpElement = document.getElementById("calculated-sum");
  outputSumUpElement.textContent = sumUpToNumber;
  outputSumUpElement.style.display = "block";
}

// call addeventlistener
calculateSumButtonElement.addEventListener("click", calculateSumNumber);

// Highlight the links (for ... of use for array element loop)

const highlightBtnElement = document.querySelector("#highlight-links button");

function highlightBg() {
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}

highlightBtnElement.addEventListener("click", highlightBg);

// Display User Data , use for... in on key:values , properties of the objects.

const dummyData = {
  Name: "Nanami",
  Lastname: "Kento",
  Age: "36",
};

const displayUserDataButtonElement =
  document.querySelector("#user-data button");

function displayOutput() {
  const outputDataElement = document.getElementById("output-user-data");

  outputDataElement.innerHTML = "";

  for (const key in dummyData) {
    const newUserDataListElement = document.createElement("li");
    const outputData = key.toUpperCase() + " : " + dummyData[key];
    newUserDataListElement.textContent = outputData;
    outputDataElement.append(newUserDataListElement);
  }
}

displayUserDataButtonElement.addEventListener("click", displayOutput);

// Statistics / Roll the Dice

const rollDiceButtonElement = document.querySelector("#statistics button");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1; // Math.floor(): 5.64 => 5
}

function deriveNumberOfDiceRolls() {
  const targetNumberInputElement =
    document.getElementById("user-target-number");
  const diceRollsListElement = document.getElementById("dice-rolls");

  const enteredNumber = targetNumberInputElement.value;
  diceRollsListElement.innerHTML = "";

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();
    // if (rolledNumber == enteredNumber) {
    //   hasRolledTargetNumber = true;
    // }
    numberOfRolls++;
    const newRollListItemElement = document.createElement("li");
    const outputText = "Roll " + numberOfRolls + ": " + rolledNumber;
    newRollListItemElement.textContent = outputText;
    diceRollsListElement.append(newRollListItemElement);
    hasRolledTargetNumber = rolledNumber == enteredNumber;
  }

  const outputTotalRollsElement = document.getElementById("output-total-rolls");
  const outputTargetNumberElement = document.getElementById(
    "output-target-number"
  );

  outputTargetNumberElement.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceButtonElement.addEventListener("click", deriveNumberOfDiceRolls);
