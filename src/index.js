import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAFL-9e4RiP-hHKFJxsmASdgTi6sxlMWek';

const App = () => {
    return (
        <div>
          <SearchBar />
        </div>
    );
 }
ReactDOM.render(<App />, document.querySelector('.container'));
