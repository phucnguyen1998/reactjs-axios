import React, { Component } from 'react';
import {connect} from 'react-redux';
import Case from './component/Cases';
import Country from './component/Country';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      seachForm: ''
    }
  }

 

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
        [name]:value
    });
  }

  seachCountry = () => {
    this.props.seach(this.state.seachForm);
    
  }

  showData = () => {
    if(this.props.country === ''){}else{
      return(<Case/>)
    }
  }
  
  
  render() {
    return ( 
      <div className="container mt-5">
        <div className="col-lg-3 col-md-3 col-sm-12 m-auto">
          <Country/>
          <form className="d-flex">
            <input className="form-control" type="text" placeholder="Search" aria-label="Search" name="seachForm" onChange={(event) => this.isChange(event)}/>
            <button type="reset" className="btn btn-primary ml-2" onClick={() => this.seachCountry()}>Seach</button>
          </form>
          </div>
        {this.showData()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    country: state.country
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    seach: (countryCov) => {
      dispatch({
        type: "SEACH_COUNTRY",countryCov
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

