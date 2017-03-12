import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex  extends Component {

  // LifeCycle method, it's call when the component is about to be render to the document
  // for fitst time.
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return(
      <div>
        <div className="text-xs-right" >
          <Link to="/posts/new" className="btn btn-primary">
            Add a post.
          < /Link>
        </div>
          List of blog Posts
      </div>
    );
  }
}

// Same that { fetchPosts } in conenct.
//function mapDispatchToProps(dispatch){
//  return bindActionCreators({ fetchPost}, dispatch);
//}

export default connect(null, { fetchPosts })(PostsIndex);
