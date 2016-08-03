# Boilerplate for making Small but Modern Web Apps

Libraries/Tools used:

- Webpack 2
- TypeScript 2
- Live Server
- Postcss (used like sass here)
- Babel without commonjs for Webpack 2 tree shaking support
- React and ReactDOM for Development
- Preact (through preact-compat) for Production

Since it uses React and ReactDOM for development and Preact for production, you can develop with ease using the React Chrome tools but output into production a very small bundle.js file.

The result is that you can compare the difference between the 1.8mb development bundle.js file with a 28kb minified production file.

# Installation

Make sure you have Node 6 installed (since the webpack config files uses es6 syntax).

Clone the repository, then run `npm i` which will install everything including typings.

It is recommended to use [Visual Studio Code](https://code.visualstudio.com/) or IntelliJ so that you get the full advantage of intellisense for TypeScript.

The source files are in `src/ts` and `src/sass`.

# Development

To start developing, run `npm start`. This will launch the auto refreshing live-server and webpack with debug and watch mode. Any changes you make will automatically will be compiled and the webpage will refresh.

# Production/Release

To build for production, run either `npm run prod` or `npm run prod-serve`.

`npm run prod` will just build the compiled file using preact and uglify, while `npm run prod-serve` will start the server after compiling so you can test it.

The built file is not watched, so you'll have to `ctrl-c` (if you are using the `npm run prod-serve` command) and run the command again to build it again.
