import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mSTP = state => ({
  users: state.entities.users
})

const mDTP = dispatch => ({

})


class SearchResults extends React.Component {

  
  componentWillUnmount() {
    this.setState({
      results: [],
      query: '',
      barFocused: false
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      barFocused: false,
      query: ''
    }

    this.handleInput = this.handleInput.bind(this);
  }

   
  handleInput(e) {
    let queryString = e.target.value.toLowerCase();
    if (queryString.length < 1) {
      this.setState({
        results: []
      })
    } else {

      let results = [];
      this.setState({
        query: e.target.value.toLowerCase()
      })
      Object.values(this.props.users).forEach(user => {
        
        if (
          queryString.includes(user.fname.toLowerCase()) || 
          queryString.includes(user.lname.toLowerCase()) ||
          queryString===(user.fname.toLowerCase().slice(0, queryString.length )) ||
          queryString===(user.lname.toLowerCase().slice(0, queryString.length)) &&
          queryString.length >= 1
          ){
            results.push(user)
        }
        //debugger;
      })
      this.setState({
        results: results
      })
    }
  }


  render() {

    let results = this.state.results.map((result, idx) => {
      return (
        <li className='search-result' key={idx}>
          <Link to={`/users/${result.id}`}>{result.fname  + " " + result.lname}</Link></li>
      )
    });
    return (
      <div className='search-container'>
        <input onBlur={() => this.setState({barFocused: false})} onChange={this.handleInput} onFocus={() => this.setState({barFocused: true})} type='text' placeholder='Search Fitbook'></input>
        {this.state.barFocused ? <div className='search-results'>
          <ul>
            {results}
          </ul>
        </div>: null}
      </div>
    )
  }
}


export default connect(mSTP, mDTP)(SearchResults);