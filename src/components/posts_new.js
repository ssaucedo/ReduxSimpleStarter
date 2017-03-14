import React, { Component, PropTypes} from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {

  // React interprets this object when instanciates a PostNew
  // it's going to see if there is a contextTypes defined.
  // and will check if we want to give access to a router property in the context.
  // React is going to check the all parents components until one has a piece of context called router.
  // In this case its going to the <Router> component. It's like props. "Please check al partents, I want to have access to this property"
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props){
    this.props.createPost(props).then(() => {
        this.context.router.push('/');
    });
  }

  render() {

    // ES6 const handleSubmit = this.props.handleSubmit;
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    console.log(title);
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
        <h3> Create a new Post </h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
             {title.touched ? title.error : ''}
          </div>
        </div>
        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
             {categories.touched ? categories.error : ''}
          </div>
        </div>
        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content} />
          <div className="text-help">
             {content.touched ? content.error : ''}
          </div>
        </div>
        <button type="submit" className="btn btn-primary"> Submit </button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
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

    if(!values.categories) {
       errors.categories = 'Enter categories';
    }

    if(!values.content) {
       errors.content = 'Enter a content';
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
