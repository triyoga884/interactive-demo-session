// Game state variables
let targetNumber;
let attemptsLeft;
let gameActive;
let previousGuesses;

// DOM elements
const guessInput = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitBtn');
const feedback = document.getElementById('feedback');
const attemptsLeftSpan = document.getElementById('attemptsLeft');
const gameContainer = document.getElementById('gameContainer');
const gameOverContainer = document.getElementById('gameOverContainer');
const gameOverMessage = document.getElementById('gameOverMessage');
const resetBtn = document.getElementById('resetBtn');
const previousGuessesList = document.getElementById('guessList');
const previousGuessesContainer = document.getElementById('previousGuesses');

/**
 * Initialize a new game
 * Sets up all game variables and resets the UI
 */
function initGame() {
  // Generate random number between 1 and 100
  targetNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 10;
  gameActive = true;
  previousGuesses = [];

  // Reset UI elements
  guessInput.value = '';
  guessInput.disabled = false;
  submitBtn.disabled = false;
  attemptsLeftSpan.textContent = attemptsLeft;

  // Hide/show appropriate containers
  gameContainer.classList.remove('hidden');
  gameOverContainer.classList.add('hidden');
  feedback.classList.add('hidden');
  previousGuessesContainer.classList.add('hidden');

  // Clear previous guesses display
  previousGuessesList.innerHTML = '';

  // Focus on input for better UX
  guessInput.focus();

  console.log('New game started! Target number:', targetNumber); // For debugging (remove in production)
}

/**
 * Validate user input
 * @param {string} input - The user's input
 * @returns {object} - Validation result with isValid boolean and message
 */
function validateInput(input) {
  // YOUR CODE HERE
  const tempInput = parseInt(input);
  if (
    tempInput >= 1 &&
    tempInput <= 100 &&
    !previousGuesses.includes(tempInput)
  ) {
    return { isValid: true, number: parseInt(tempInput) };
  } else if (tempInput < 1 || tempInput > 100) {
    return {
      isValid: false,
      message: 'Please enter a number between 1 and 100!',
    };
  } else if (previousGuesses.includes(tempInput)) {
    return { isValid: false, message: 'You already guessed that number!' };
  } else return { isValid: false, message: 'Please enter a number!' };
}

/**
 * Display feedback message to the user
 * @param {string} message - The message to display
 * @param {string} type - The type of message (success, error, info)
 */
function showFeedback(message, type = 'info') {
  feedback.textContent = message;
  feedback.classList.remove(
    'hidden',
    'bg-green-100',
    'text-green-800',
    'bg-red-100',
    'text-red-800',
    'bg-blue-100',
    'text-blue-800',
    'bg-yellow-100',
    'text-yellow-800'
  );

  // Apply appropriate styling based on message type
  switch (type) {
    case 'success':
      feedback.classList.add('bg-green-100', 'text-green-800');
      break;
    case 'error':
      feedback.classList.add('bg-red-100', 'text-red-800');
      break;
    case 'high':
      feedback.classList.add('bg-yellow-100', 'text-yellow-800');
      break;
    case 'low':
      feedback.classList.add('bg-blue-100', 'text-blue-800');
      break;
    default:
      feedback.classList.add('bg-blue-100', 'text-blue-800');
  }
}

/**
 * Add a guess to the previous guesses display
 * @param {number} guess - The number that was guessed
 */
function addToPreviousGuesses(guess) {
  previousGuesses.push(guess);

  // Create a span element for the guess
  const guessSpan = document.createElement('span');
  guessSpan.textContent = guess;
  guessSpan.className = 'px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm';

  previousGuessesList.appendChild(guessSpan);
  previousGuessesContainer.classList.remove('hidden');
}

/**
 * Process the user's guess
 * @param {number} guess - The user's guess
 */
function processGuess(guess) {
  // YOUR CODE HERE
  addToPreviousGuesses(guess);
  attemptsLeft--;
  attemptsLeftSpan.textContent = attemptsLeft;
  if (guess === targetNumber) {
    showFeedback('🎉 Congratulations! You guessed it!', 'success');
    endGame(true);
  } else if (guess > targetNumber && attemptsLeft > 0) {
    showFeedback('📉 Too high! Try a lower number.', 'high');
  } else if (guess < targetNumber && attemptsLeft > 0) {
    showFeedback('📈 Too low! Try a higher number', 'low');
  } else {
    // showFeedback('😞 Game Over! The number was X.', 'error');
    endGame(false);
  }
  guessInput.value = '';
}

/**
 * End the current game
 * @param {boolean} won - Whether the player won or lost
 */
function endGame(won) {
  gameActive = false;
  guessInput.disabled = true;
  submitBtn.disabled = true;

  // Show game over container
  gameContainer.classList.add('hidden');
  gameOverContainer.classList.remove('hidden');

  // Set appropriate game over message
  if (won) {
    const attempts = 10 - attemptsLeft;
    gameOverMessage.innerHTML = `
            <h2 class="text-2xl font-bold text-green-600 mb-2">🏆 You Won!</h2>
            <p class="text-gray-700">You guessed the number <strong>${targetNumber}</strong> in <strong>${attempts}</strong> attempt${
      attempts === 1 ? '' : 's'
    }!</p>
        `;
  } else {
    gameOverMessage.innerHTML = `
            <h2 class="text-2xl font-bold text-red-600 mb-2">💔 Game Over</h2>
            <p class="text-gray-700">The number was <strong>${targetNumber}</strong>. Don't give up!</p>
        `;
  }
}

/**
 * Handle the submit button click or Enter key press
 */
function handleSubmit() {
  if (!gameActive) return;

  const userInput = guessInput.value;
  const validation = validateInput(userInput);

  if (!validation.isValid) {
    showFeedback(validation.message, 'error');
    guessInput.focus();
    return;
  }

  processGuess(validation.number);
}

// Event listeners
// YOUR CODE HERE
submitBtn.addEventListener('click', () => handleSubmit());
guessInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    handleSubmit();
  }
});

resetBtn.addEventListener('click', () => initGame());

// Initialize the game when page loads
initGame();
