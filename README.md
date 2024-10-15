# WeMovies web-app


## Introduction

This app is built to manage movies and allow users to see the current top rated movie,
Navigate through the list of their favorite movies

## Main features
- Show the current Top Rated movie
- List of genres
- List the movies by genre
- Search movies by keyword
- Rate Movies

## Technical details
Technical stack
- React 18
- TypeScript 4.9 
- Webpack

I have adopted the principle of Separation of Concerns (SoC) by clearly separating 
the API logic from the components and styling. 
This approach enhances maintainability and scalability, 
allowing for easier updates and better organization of code. 
By keeping these concerns distinct, 
I ensure that each part of the application focuses on its specific responsibility, 
which improves overall code quality and facilitates collaboration.

## How to run the app

### `npm install`

This will install all the necessary node modules needed to run the app

### `npm run start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\