import React from "react";
import { image } from "../data/user";
/*
 The function itself is just `returning` the html string you see in the very first line
2. Then it's calling the rendering engine (react) to render the html string in the main.js and return a div root node
    (div id="about")
3. Then, the div node is being appended to the body (document.getElementById('body').appendChild(div))
4. Finally, react is rendering the div (now with the content) on the page

## Why React?
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

## Getting Started
The best way to get started with React is to start over and write a brand new app.
React offers a simple way to create a new app in a single file, and you can use it for 
most new projects. In addition to the React library, you’ll need to install some additional npm packages. These are:

- react-dom - A library that can be used to render React components, attach them to the DOM, and manipulate the DOM in
    response to application state changes.
- babel-preset-react - A preset that includes Babel plugins needed to compile React JSX code
- babel-preset-es2015 - A preset that configures Babel for you to use ES2015 features today, the CommonJS API, and more.

So run this command in terminal:
```bash
npm install -g create-react-app
npm install -g babel-preset-react
npm install -g babel-preset-es2015
```

Then run this command in terminal to create a new app:
```bash
create-react-app my-app
```

Now, you'll find a directory named my-app in the current working directory that contains the following:
```bash
my-app/
├── my-app.css  
├── my-app.js   
├── public      
│   ├── index.html         
│   └── manifest.json      
├── src      
│   ├── App.css             
│   ├── App.test.js         
│  
*/ 
function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
