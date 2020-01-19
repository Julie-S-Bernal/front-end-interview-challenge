## Candidate Notes

### Overview

This app is build with react-tabs, react-hooks and styled-components. I have been working a lot with firebase and redux in my other repositery so I wanted to go back to the basics for this single page application. As somebody who did a cooding bootcamp I tend to heavily relly on framework so I wanted to improve my knowledge about tables so I created my own tables. This project took between 3-4hours to complete. it was mainly on the longer side because of my lack of experience with tables.

### What can be improved:

-Add error handlers
-Add tests( I haven't experience testing with hooks yet but it is on my list of skills to acquire rather sooner than later)
-Clean up code. The code needs to be broken down in smaller chunks to improve clarity
-How to deal with ids when using conditional rendering and mapping?
-Issue with onClick() buttons that could not be fixed with event.stopPropagation or event.preventDefault(). They currently require a double click.
-Replace broken images with an empty image icon
-Improve styling

### Positive things
 
A lot of learning was achieved
Task is completed
Current style looks clean but can be improved
UI responsiveness of data and clear display of it.(If more data was used a loading spinner should be added as well as pagination)
 

## Cleo Frontend Interview - Bills
### Get Started
1. Fork or clone this repo (a simple [`create-react-app`](https://github.com/facebook/create-react-app) extended with [`json-server`](https://github.com/typicode/json-server) and some Cleo-specific goodies)
1. Install dependencies via `yarn` (or `npm`)
1. Run `yarn start` to start the dev server
1. Run `yarn api` in a different terminal to start the json-api server

### The Task
1. Create a Tabs component that allows multiple pages to be switched between.
1. One tab should show a list of bills. These can be found at http://localhost:3002/bills/. Bills have a flag `isBill` set to `true`.
1. Another tab should show a list of transactions which are potential bills. These can also be found at http://localhost:3000/bills/. Potential bills have a flag `isBill` set to `false`.
1. Under each bill row for both lists, should be a hidden list of transactions for that bill. This should show when the bill row is clicked.
1. Under the name of each bill should show a count of the transactions for it
1. Add an action to the bills tab for each bill called "remove bill" which updates the relevant bill's `isBill` flag to `false`. You can use a `PATCH` request to `http://localhost:3000/bills/:id` using the id of the bill to update the bill resource.
1. Add an action to the potential bills tab for each potential bill called "Add as bill" which updates the relevant bill's `isBill` flag to `true`.
1. After each action, the lists should reflect the changes.

### Notes
- Please aim to spend 2-3 hours completing this task
- Feel free to use state management tools, and think about how the application might be testable
- Style the components however you see fit, SASS, PostCSS or maybe even CSS in JS
- The API contains other data, feel free to use this creatively if you have the time
