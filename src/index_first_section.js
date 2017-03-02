// Create a new component.
// JSX ---> Vanilla js use  https://babeljs.io/
//         <li>1</li> ------> React.createElement("li",null,1)

// Go find the library React installed in my app as a dependency (/.node_modules) and assign to a variable 'react'
import React from 'react';
import ReactDOM from 'react-dom';

// I need to import react library, as it's not imported in index.html
// Js Module (ES6) ---> Encapsulates the idea of that the code in any module is isolated from other files.
// We need to explicitly import the modules to have access to the code.

// This is a type of component this is a class not an instance, think this as a factory not an instance.
// To the render we need to pass intances to the render.

// OLD WAY TO DECLARE A FUNCTION.
//const App = function() {
    //return <div>Hi!</div>;
//}


// ES6 style, different in the management of 'this'.
const App = () => {
    return <div>Hi!</div>;
}

// when we write <App></App> we create an instance of App.
// <div></div> when we write JSX and write a component
//name (which is a component class) in JSX we create an instance of the component.

// Take this componet's generated HTML and put it on the page

// When we want to interact direcly with the DOM we use ReactDOM
// REACT is used to create or interact with the components

// First try. We are passing a class.
//ReactDOM.render(App);

// Second try. We are passing an instance. When we want to use an instance just wrap in JSX.
// React does not know where to render the produced HTML. We need to set the target.
// check <div class="container"></div> in index.html. This is the root of the app.
// https://www.w3schools.com/jsref/dom_obj_document.asp
ReactDOM.render(<App />, document.querySelector('.container'));
