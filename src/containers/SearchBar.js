import React, { Component  } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  };

  onInputChange(event) {
    this.setState({ term: event.target.value });
  };

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);

    this.setState({ term: '' });
  }

  render() {
    return (
      <form 
        className="input-group" 
        onSubmit={this.onFormSubmit.bind(this)} >
        <input 
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange.bind(this)} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  };
};

// binds actioncreator fetchWeather to our SearchBar container
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// null is saying 'we dont need any state here'
export default connect(null, mapDispatchToProps)(SearchBar);