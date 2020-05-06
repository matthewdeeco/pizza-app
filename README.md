# zebu-pizza-app
## An app where you can create your own pizza

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Structural Overview

The following libraries were used:
  - `react` for view rendering
  - `redux` for state management
  - `@emotion/styled` for CSS-in-JS

Special care was put into:
  - mobile-first design
  - accessibility (navigable via keyboard)
  - observing unidirectional data flow
  - breaking down reusable components
  - maintaining a flat, noninde-redundant data structure

Potential improvements include:
  - moving hardcoded data in `reducers.ts` to a dedicated backend
  - handling of the POST request to `/api/order-pizza` upon confirming the order
  - making a dedicated route for each step of the process
