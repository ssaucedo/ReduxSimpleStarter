import React, { Component} from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';


class PostsNew extends Component {
  render() {

    // ES6 const handleSubmit = this.props.handleSubmit;
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    console.log(title);
    return(
      <form onSubmit={handleSubmit(this.props.createPost)} >
        <h3> Create a new Post </h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
             {title.touched ? title.error : ''}
          </div>
        </div>
        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content} />
        </div>
        <button type="submit" className="btn btn-primary"> Submit </button>
      </form>
    );
  }
}

function validate(values){
    const errors = {};
    console.log(values);

    if(!values.title) {
       errors.title = 'Enter a title';
    }

    return errors;
}

// between '{}' we pass reduxForm the configuration
// reduxForm injects some helpers for validation.
export default reduxForm({
        form: 'PostNewForm',
        fields: ['title', 'categories', 'content'],
        validate
}, null, { createPost })(PostsNew);
