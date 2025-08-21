# Number Guessing Game - Programming Challenge

A web-based number guessing game built with HTML, Tailwind CSS, and JavaScript. This project demonstrates input validation, game state management, and interactive user interface design.

## 🎯 Challenge Overview

Implement a fully functional number guessing game with input validation and game logic. The game allows players to guess a randomly generated target number within a limited number of attempts.

## 🚀 Quick Start

1. Open `number-guessing-game.html` in your web browser
2. Start guessing numbers between 1 and 100
3. Use the feedback to guide your next guess
4. Try to guess the number within 10 attempts!

## 📁 Project Structure

```
Interactive Demo Session/
├── number-guessing-game.html    # Main HTML file with game interface
├── game.js                      # JavaScript game logic and functionality
└── README.md                    # This documentation file
```

## 🎮 Game Features

### Core Functionality

- **Random Number Generation**: Target number between 1-100
- **Input Validation**: Comprehensive validation with clear error messages
- **Attempt Tracking**: 10 attempts maximum with countdown display
- **Previous Guesses**: Visual tracking of all previous guesses
- **Smart Feedback**: "Too high" or "too low" hints
- **Game Reset**: Complete game restart functionality
- **Responsive Design**: Works on desktop and mobile devices

## 📋 Challenge Requirements

> **⚠️ IMPORTANT FOR STUDENTS**: This project contains sections marked with `// YOUR CODE HERE` comments where you need to implement the required functionality. Look for these markers in the JavaScript file and complete the missing code according to the specifications below.

### 1. Input Validation (`validateInput` function)

- ✅ Verify field is not empty
- ✅ Validate input is a valid number (no text and no negative number)
- ✅ Check number is within range (1-100)
- ✅ Prevent duplicate guesses
- ✅ Provide clear error messages, example:
  - "Please enter a number!"
  - "Please enter a number between 1 and 100!"
  - "You already guessed that number!"

### 2. Guess Processing Logic (`processGuess` function)

- ✅ Record guesses in `previousGuesses` array
- ✅ Decrement `attemptsLeft` after each guess
- ✅ Compare guess against target number
- ✅ Check if attempts are exhausted
- ✅ Provide appropriate feedback, example:
  - "🎉 Congratulations! You guessed it!"
  - "📉 Too high! Try a lower number."
  - "📈 Too low! Try a higher number."
  - "😞 Game Over! The number was X."
- ✅ Reset input field after each guess

### 3. Event Listeners

- ✅ Submit button click handler
- ✅ Enter key submission support
- ✅ Game reset functionality
- ✅ Proper input validation on all events
- ✅ Correct game state management

## 🧪 Testing Scenarios

### Input Validation Tests

- Empty input submission
- Non-numeric input (letters, symbols)
- Numbers outside range (0, 101, negative numbers)
- Duplicate number guesses
- Valid number inputs

### Game Logic Tests

- Correct guess on first try
- Correct guess on last attempt
- Running out of attempts
- High and low number feedback
- Game reset functionality

---

**Happy Coding! 🎮**
