This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Server setup

To setup the server go to the `server/` folder located at the same level than `src/` and perform an `npm install`. 
Once the installation process is finished, run `node app.js` in the same folder. The server will start listening on port `3003`.

# App overview

I've implemented both filtered an unfiltered words. 
For filtered words, it´ll need exact matches, otherwise a message stating that no matches were found will be shown.

Once that suggested words appear on the screen you can use the 5-way button on the screen to navigate them and select one.
Punctuation and space (Keys number 1 and 0 respectively) will also select the currently highlighted word, and proceed to show the possible punctuation marks or add a space, accordingly.

The navigation keys are the 5-way button and the 2 keys on each side of it. They are used to execute the options shown in the contextual menu (that is, what's shown at the bottom of the screen).

You can use the buttons with the phone and envelope icons to switch modes (filtered or 'dict' / unfiltered or 'T9') at any time, following the options in the aforementioned contextual menu.

