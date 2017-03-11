import React, { Component } from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

// App is not a container it's only purpose is to render the BookList.

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail/>
      </div>
    );
  }
}
