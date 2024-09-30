# Quiz App

This is a Quiz App built with React. The app fetches questions from an API and allows users to answer them within a time limit. The app tracks the user's score and displays a final screen with the results.

## Table of Contents

- [Quiz App](#quiz-app)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
    - [Components](#components)
    - [State Management](#state-management)
    - [API Integration](#api-integration)
    - [Styling](#styling)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/quiz-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd quiz-app
   ```
3. Install the dependencies:
   ```sh
   pnpm install
   ```

## Usage

1. Start the development server:
   ```sh
   pnpm run dev
   ```
2. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
use-quiz/
├── .gitignore
├── biome.json
├── eslint.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
├── public/
├── README.md
├── src/
│   ├── App.jsx
│   ├── assets/
│   ├── components/
│   │   ├── Error.jsx
│   │   ├── FinishScreen.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Loader.jsx
│   │   ├── Main.jsx
│   │   ├── NextButton.jsx
│   │   ├── Options.jsx
│   │   ├── Progress.jsx
│   │   ├── Question.jsx
│   │   ├── StartScreen.jsx
│   │   ├── Timer.jsx
│   ├── index.css
│   ├── main.jsx
├── vite.config.js
```

### Components

- **App.jsx**: The main component that manages the state and renders other components based on the state.
- **Error.jsx**: Displays an error message when data fetching fails.
- **FinishScreen.jsx**: Displays the final score and a restart button.
- **Footer.jsx**: The footer of the app.
- **Header.jsx**: The header of the app.
- **Loader.jsx**: Displays a loading spinner while data is being fetched.
- **Main.jsx**: The main container for the app content.
- **NextButton.jsx**: A button to proceed to the next question.
- **Options.jsx**: Displays the answer options for a question.
- **Progress.jsx**: Displays the progress of the quiz.
- **Question.jsx**: Displays the current question.
- **StartScreen.jsx**: Displays the start screen with a button to start the quiz.
- **Timer.jsx**: Displays the remaining time for the current question.

### State Management

State management is handled using the [`useReducer`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fuse-quiz%2Fsrc%2FApp.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A0%2C%22character%22%3A20%7D%7D%5D%2C%225ffd1416-6b49-4c04-8091-edcdea6c469c%22%5D "Go to definition") hook in [`App.jsx`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fuse-quiz%2Fsrc%2FApp.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%225ffd1416-6b49-4c04-8091-edcdea6c469c%22%5D "/Users/karbi/Documents/GitHub/use-quiz/src/App.jsx"). The state includes:

- [`questions`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fuse-quiz%2Fsrc%2FApp.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A16%2C%22character%22%3A2%7D%7D%5D%2C%225ffd1416-6b49-4c04-8091-edcdea6c469c%22%5D "Go to definition"): An array of questions fetched from the API.
- [`status`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fuse-quiz%2Fsrc%2FApp.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A17%2C%22character%22%3A2%7D%7D%5D%2C%225ffd1416-6b49-4c04-8091-edcdea6c469c%22%5D "Go to definition"): The current status of the app ([`loading`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fuse-quiz%2Fsrc%2FApp.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A17%2C%22character%22%3A11%7D%7D%5D%2C%225ffd1416-6b49-4c04-8091-edcdea6c469c%22%5D "Go to definition"), [`error`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fuse-quiz%2Fsrc%2FApp.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A103%2C%22character%22%3A15%7D%7D%5D%2C%225ffd1416-6b49-4c04-8091-edcdea6c469c%22%5D "Go to definition"), [`ready`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fuse-quiz%2Fsrc%2FApp.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A31%2C%22character%22%3A17%7D%7D%5D%2C%225ffd1416-6b49-4c04-8091-edcdea6c469c%22%5D "Go to definition"), [`active`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fuse-quiz%2Fsrc%2FApp.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A41%2C%22character%22%3A17%7D%7D%5D%2C%225ffd1416-6b49-4c04-8091-edcdea6c469c%22%5D "Go to definition"), [`finished`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fuse-quiz%2Fsrc%2FApp.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A65%2C%22character%22%3A17%7D%7D%5D%2C%225ffd1416-6b49-4c04-8091-edcdea6c469c%22%5D "Go to definition")).
- [`index`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fuse-quiz%2Fsrc%2FApp.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A18%2C%22character%22%3A2%7D%7D%5D%2C%225ffd1416-6b49-4c04-8091-edcdea6c469c%22%5D "Go to definition"): The index of the current question.
- [`answer`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fuse-quiz%2Fsrc%2FApp.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A19%2C%22character%22%3A2%7D%7D%5D%2C%225ffd1416-6b49-4c04-8091-edcdea6c469c%22%5D "Go to definition"): The user's current answer.
- [`points`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fuse-quiz%2Fsrc%2FApp.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A20%2C%22character%22%3A2%7D%7D%5D%2C%225ffd1416-6b49-4c04-8091-edcdea6c469c%22%5D "Go to definition"): The user's current score.
- [`highscore`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fuse-quiz%2Fsrc%2FApp.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A21%2C%22character%22%3A2%7D%7D%5D%2C%225ffd1416-6b49-4c04-8091-edcdea6c469c%22%5D "Go to definition"): The user's highest score.
- [`secondsRemaining`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fuse-quiz%2Fsrc%2FApp.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A22%2C%22character%22%3A2%7D%7D%5D%2C%225ffd1416-6b49-4c04-8091-edcdea6c469c%22%5D "Go to definition"): The remaining time for the current question.

### API Integration

Questions are fetched from an API using the [`fetchQuestions`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fuse-quiz%2Fsrc%2FApp.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A98%2C%22character%22%3A10%7D%7D%5D%2C%225ffd1416-6b49-4c04-8091-edcdea6c469c%22%5D "Go to definition") function in [`App.jsx`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fuse-quiz%2Fsrc%2FApp.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%225ffd1416-6b49-4c04-8091-edcdea6c469c%22%5D "/Users/karbi/Documents/GitHub/use-quiz/src/App.jsx"). The API URL is stored in the environment variable [`VITE_API_URL`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fuse-quiz%2Fsrc%2FApp.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A100%2C%22character%22%3A53%7D%7D%5D%2C%225ffd1416-6b49-4c04-8091-edcdea6c469c%22%5D "Go to definition").

### Styling

Styling is managed using CSS. The main stylesheet is [`index.css`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fuse-quiz%2Fsrc%2FApp.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A18%2C%22character%22%3A2%7D%7D%5D%2C%225ffd1416-6b49-4c04-8091-edcdea6c469c%22%5D "Go to definition").

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
