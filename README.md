# My name is the React project "Phonebook"

The project allows you to add and remove your contact list.

The aim of the project was to create an application that allows you to easily
add a new contact to the phone book, as well as remove a given contact from it.

This app consolidates material from your online course. This project was created
with [Create React App](https://github.com/facebook/create-react-app)

A code refactor of the "Phonebook" application was carried out, adding state
management using the Redux Toolkit library.

This project is a continuation of task 6 "Phonebook", which used hooks and
Redux/Redux Toolkit technologies.

## What was created in the application

- The store has been created with configureStore().
- An action for saving and deleting a contact and refreshing a filter has been
  created.
- Contact and filter reducers have been created. The createSlice() function was
  used.
- React components and Redux logic have been linked using react-redux library
  hooks.
- The application saves contacts using the backend.
- The backend for the project was created using the mockapi.io UI website.
- The createAsyncThunk function was used to work with the backend and
  asynchronous queries.

![Alt text](image.phonebook7.png)

## Technologies

- "JavaScript"
- "react": "^18.1.0",
- "nanoid": "^5.0.4",
- "node": "v18.16.1",
- "react-dom": "^18.1.0",
- "react-redux": "^9.0.2",
- "react-scripts": "5.0.1",
- "redux": "^5.0.0",
- "redux-persist": "^6.0.0",
- "prop-types": "^15.8.1",
- "components": "^0.1.0",
- "eslint-config-react-app":"^7.0.1",
- "@reduxjs/toolkit": "^2.0.1",
- "axios": "^1.6.2",

## Organize something

- git clone - clone the remote repository locally to your computer;
- npm install - create dependencies;
- npm start - run the application, access to it will be possible at
  localhost:3000;
