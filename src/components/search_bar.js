//Important topics:
//    Exporting modules
//    Classes
//    State

// We need to import react whenever we are using JSX.
//  when we translate JSX to normal js ---> React.createElement
// ES6 sintax ----> const Component = React.Component;
import React, { Component } from 'react';

// This is a component created with a function.
//const SearchBar = () => {
//return <input />
//};

// Class based component, ES6 class.
//  we can declare a new instance with 'new SearchBar'
//    extends add the functionality of the parent class.
//    Component class provides the render method.
//    When the App component is going to call the render function so
//    we need to return som JSX.
//

// Good practice to start with a functional component
// and then migrate if adding extra functionality is required

class SearchBar extends Component {

   // Only class based component has state.
   // First and only function calles automatically when a new instance is created.
   constructor(props){
     // Call parent constructor function. REQUIRED.
     super(props);
     // Initialize state. Only in the constructor we manipulate state on this way.
     this.state = { term: ''};
   }

   render() {
     // element to monitor.
     //return <input onChange={this.onInputChange}/>;
     // we use setState to update state.
     return (
       <div className="search-bar">
        <input
          // Controlled component. Value set by state. Value change when state changes.
          value = {this.state.term}
          onChange={ event => this.onInputChange(event.target.value)}/>
       </div>
     );
   }

   // eventHandler,
   //     Html input elements emits events. This is an html feature. Normal browser event.
   //     Browser events: https://developer.mozilla.org/en-US/docs/Web/Events
   //     React supported events: https://facebook.github.io/react/docs/events.html
    onInputChange(term){
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
