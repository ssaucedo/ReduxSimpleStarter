import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from'./components/posts_new';

//     '/' ---> App
//     '/greet' ---> App, Greeting
//     '/greet2' ---> App, Greeting
//     '/greet3' ---> App, Greeting
// If the path is '/' shows App, PostsIndex
export default (
<Route path="/" component={App} >
  <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={PostsNew} />
</ Route>
);
