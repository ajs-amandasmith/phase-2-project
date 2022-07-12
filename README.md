# New York Times Reading List Tracker

This project lets the user view the current New York Times Hardcover Best Sellers List and add the books to lists based on if the user wants to read, is currently reading, or has read them.

## Resources

- New York Times API
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

To start the app in the browser, run:

```bash
npm start
```

To run the db.json (backend):

```bash
npm server
```

Data is fetched from The New York Times book API.

Click "Log In" to act as if you are logged in.

Click "Show More Info?" to have more book data appear.

Select a list and click "Add to List" from the Home page to make a POST request to the db.json file and move the book to that list.

Select a list from any other page and click "Move to List" to make a PATCH request to the db.json file and move the book to that list and remove it from the current list.

Click "Delete Book" to remove the book from all lists and make a DELETE request to the db.json file.

On the Have Read page, Add or Update a rating with the relevant button, and make a PATCH request to the db.json file.

On the Have Read page, Submit, Edit, or Delete a review based on the relevant button(s).