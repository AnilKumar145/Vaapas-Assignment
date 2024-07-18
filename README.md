# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Steps to Complete the Assignment

1. **Environment Setup:**
    - **Node.js**: Make sure you have Node.js installed on your machine.
    - **React**: Create a new React project using the Create React App.
2. **Creating the Search Bar:**
    - Design and implement a search bar where users can enter a movie name.
    - When a user submits a query, construct a URL for the Open Library Search API to fetch data about the movie.
3. **Fetching Data from the Open Library API:**
    - Use the endpoint `https://openlibrary.org/search.json` to search for movies.
    - Example URL format:
        - `https://openlibrary.org/search.json?q=the+lord+of+the+rings`
        - You will append the movie name entered in the search bar to this URL to fetch the relevant data.
4. **Handling API Response:**
    - Process the API response to retrieve relevant information such as the title, author, publication date, etc.
    - If the API returns multiple books, handle it to manage o- r filter the results as needed.
5. **Creating Cards for Display:**
    - For each movie retrieved, create a card component.
    - Each card should have an image and relevant movie data.
    - Fetch a random dog image from `https://dog.ceo/api/breeds/image/random` for each card.
6. **Displaying the Cards:**
    - Display the cards dynamically based on the search results.
    - Ensure each card shows at least the title and a random dog image.
7. **Making Components Generic:**
    - Design your React components in a reusable manner. This means crafting components that can easily be adapted for different data rather than hardcoding specifics.

### Additional Features:

- Implement basic form validation to check if the search input is empty.
- Handle loading states and display a message or indicator while data is being fetched.
- Implement error handling to manage any possible issues with API requests.
