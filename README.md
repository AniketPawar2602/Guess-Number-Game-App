# Guess the Number Game

This is a simple number-guessing game built using HTML, CSS, and JavaScript. The player tries to guess a randomly generated number within a given range. The game provides feedback on whether the guessed number is too high, too low, or correct.

## Features

- Random number generation within a specified range.
- Real-time feedback on the player's guesses.
- Keeps track of the number of attempts.
- Disabling the check button after guessing the right number.
- Responsive design that works on various devices.

## Demo

You can try the live demo of the game here: https://aniketpawar2602.github.io/Guess-Number-Game-App/ .

## Screenshots

![image](https://github.com/user-attachments/assets/fa435ffa-8742-4f82-946f-184e90312dbf)
![image](https://github.com/user-attachments/assets/8d64b2d3-8d3c-4aa3-be5c-a5994ca55fda)
![image](https://github.com/user-attachments/assets/a1b8cc94-001b-4ef2-9c74-646b4b6120fd)


## Tech Stack

- **HTML**: For structuring the game interface.
- **CSS**: For styling the game layout and making it responsive.
- **JavaScript**: To handle game logic, such as random number generation, input validation, and feedback.

## Setup and Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/guess-number-game.git
    ```

2. Open the `index.html` file in your web browser:
    ```bash
    open index.html
    ```

## Gameplay Instructions

1. The game generates a random number within a specified range (e.g., 1-100).
2. Enter your guess in the input field and click "Check" or press Enter.
3. The game will tell you if your guess is too high, too low, or correct.
4. Keep guessing until you find the correct number.
5. After guessing the right number check button will get disabled.

## Customization

You can adjust the range of numbers and game difficulty by modifying the JavaScript file:

```javascript
const minNumber = 1;
const maxNumber = 100;
