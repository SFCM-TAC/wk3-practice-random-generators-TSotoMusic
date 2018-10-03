
// TODO: Use constructor notation to create an object
// with properties and methods that can be shared by both
// diceRollGenerator and eightBallGenerator.
function Generator(name, min, max, options) {
this.name = name;
this.max = max;
this.min = min;
this.options = options || [];
this.randomResult = function() {
  var x = math.random()* (max-min) + min;
  return options[x]
};
// TODO: Initialise diceRollGenerator and eightBallGenerator
// using the constructor notation and the Generator object
// you just created
const diceRollGenerator = new Generator("Dice roll", 1, 6, [1, 2, 3, 4, 5, 6
]);
const eightBallGenerator = null;

function handleDiceRoll() {
  const resultElement = document.getElementById('diceResult');

  // TODO: call a method on diceRollGenerator to populate result with a random value
  const result = "result";
  resultElement.innerHTML = result;
}

function handleEightBallShake() {
  const resultElement = document.getElementById('eightBallResult');

  // TODO: call a method on eightBallGenerator to populate result with a random value
  const result = "result: ";
  resultElement.innerHTML = result;
}

document.addEventListener("DOMContentLoaded", function() {
  // this code block runs when the page finishes loading
  // and attaches listeners for button clicks
  // e.g. when the diceButton is clicked, it will run the handleDiceRoll function
  const diceButton = document.getElementById('diceButton');
  if (diceButton) {
    diceButton.addEventListener('click', handleDiceRoll);
  }

  const eightBallButton = document.getElementById('eightBallButton');
  if (eightBallButton) {
    eightBallButton.addEventListener('click', handleEightBallShake);
  }
});
