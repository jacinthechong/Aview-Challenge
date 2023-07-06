# WittyWorld: The Multilingual Joke Vault

A random joke generator that can be translated into different languages.

## Getting Started

This guide will help you get started with the app and start exploring its features.

### Prerequisites

Before you begin, you'll need to make sure you have the following installed:

- Node.js
- Docker (if using Docker to download LibreTranslate image)

### Installation

To install and run the app, follow these steps:

1. Run `npm install` to install all dependencies.
2. Follow the instructions on [LibreTranslate's Repository](https://github.com/LibreTranslate/LibreTranslate) to host a local version of the translation API. For this project, port 8000 was used, and it can be changed in `constants.js`.
3. Run `npm run build` to build the application.
4. Run `npm run preview` to preview the project.

## Approach and Design Decisions

### Architecture

- Used Vite for quick setup of frontend development environment.
- Utilized React for functional component architecture, allowing for component reuse.

### Error Handling

- Implemented try-catch blocks for API calls.
- Error notifications are displayed to the user in addition to being logged to the console.
- Separate error messages provided depending on whether Joke API or Translation API is causing the error.
- Translation API error will still display joke to user in the original language.
- Overarching error boundary wrapping App.jsx to handle any other possible errors not already handled.

### UI/UX Design

- Styled the application with clean and visually appealing colors that match Aview International's website design.
- Included animated Loader component to inform user that request is in progress.

## Additional Information

This project relies on the following external APIs:

- [Jokes API](https://jokesapi.dev/): Provides the random jokes used in the generator.
- [LibreTranslate API](https://libretranslate.com/): Powers the translation functionality of the application.

For further details or inquiries, please refer to the project repository or contact the project maintainers.
