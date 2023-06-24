# React App README

This README provides an overview of the React application that you have shared. It includes information about the file structure, components, functionality, and setup instructions for the application.

## Table of Contents
- [Introduction](#introduction)
- [File Structure](#file-structure)
- [Components](#components)
- [Functionality](#functionality)
- [Setup and Installation](#setup-and-installation)

## Introduction
This React application is a simple reading list app that allows users to create, edit, and delete books. It provides a user interface to add books to a list, edit existing books, and remove books from the list. The application utilizes React functional components, hooks (such as `useState` and `useEffect`), Axios for making HTTP requests, and json-server to replicate a server for handling book data.

## File Structure
The file structure of the React application is as follows:

```
- src
    - components
        - BookCreate.js
        - BookEdit.js
        - BookList.js
        - BookShow.js
    - App.js
- db.json
```

- The `src` directory contains all the source code files for the application.
- The `components` directory holds the React components used in the application.
- The `App.js` file is the main entry point of the application.
- The `db.json` file acts as a mock server and holds the book data.

## Components
The React application consists of the following components:

### `BookCreate`
This component renders a form to create a new book. It takes an `onCreate` prop, which is a function to handle the creation of a new book.

### `BookEdit`
This component renders a form to edit an existing book. It takes a `book` prop, which represents the book to be edited, and an `onSubmit` prop, which is a function to handle the submission of the edited book.

### `BookList`
This component renders a list of books. It takes a `books` prop, which is an array of book objects, and `onDelete` and `onEdit` props, which are functions to handle the deletion and editing of books, respectively.

### `BookShow`
This component displays a single book. It takes a `book` prop, which represents the book to be displayed, and `onDelete` and `onEdit` props, which are functions to handle the deletion and editing of the book.

## Functionality
The React application provides the following functionality:

- Fetching and displaying a list of books from the `db.json` file using the `useState` and `useEffect` hooks.
- Creating a new book by sending a POST request to the `db.json` file.
- Editing a book by sending a PUT request to the `db.json` file with the book ID and the updated title.
- Deleting a book by sending a DELETE request to the `db.json` file with the book ID.

The application utilizes Axios to make the HTTP requests and update the state of the book list accordingly. The `db.json` file acts as a mock server and stores the book data.

## Setup and Installation
To set up and run the React application, follow these steps:

1. Ensure you have Node.js and npm (Node Package Manager) installed on your machine.
2. Clone the project repository.
3. Open a terminal and navigate to the project directory.
4. Run the following command to install the dependencies:
   ```
   npm install
   ```
5. Start the json-server with the following command to replicate the server:
   ```
   n

px json-server --watch db.json --port 3001
   ```
   This will start the server and use the `db.json` file as the data source.
6. In a separate terminal window, start the React development server with the following command:
   ```
   npm start
   ```
7. The application will be accessible at `http://localhost:3000` in your web browser.

Make sure both the React development server and the json-server are running for the application to interact with the book data.

That's it! You now have the React application up and running on your local machine, using json-server and the `db.json` file to replicate a server for handling book data.