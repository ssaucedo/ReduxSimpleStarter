import React, { Component } from 'react';


export default class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { term: ''};

    // Blowmind! Take the existing function bind it to SearchBar and then 'override'
    // the existing function.
    // Check js bind.
    // Whenever you have a callback that
    //make a reference to 'this' you need
    //to bind the context.
    this.onInputChange = this.onInputChange.bind(this);
  }

  // All dom event handler come along with this event object.
  // SetState is only defined in Component.
  onInputChange(event) {
      this.setState( { term: event.target.value});
  }

  onFormSubmit(event) {
    // Dont submit the form.
    event.preventDefault();
    // We need to fo and fetch weather data

  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
