import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom';
import LoginComponent from './components/login';
import DashboardComoponent from './components/dashboardComponent';
import { HomeComponent } from './components/homeComponent';
import * as login from './store/actions/loginActions';


class App extends Component {
  constructor(props){
    super(props);
    debugger;
  }

  render() {

    const style = { color: 'white', float: 'right', margin: '5px' }
    const { login, userName } = this.props;
    const loginButtonText = login.loggedIn ? 'Logout' : 'Login';
   
    return [
      <Provider store = { this.props.store }>
      <Router>
      <div className="App">
        <header className="App-header">
          {/* <h1 className="App-title">ShoppingCart</h1> */}
          <Link to="/" style={style}><span><i className="fa fa-home"></i></span>Home</Link>
          <Link to="/login" style={style} onClick={this.props.loginActions.Logout}>{loginButtonText}</Link>
          <Link to="/profile" style={style}><span><i className="fa fa-user">{login.userName}</i></span></Link>
        </header>
        <div className="section">
              <Route path="/" exact component={HomeComponent}/>
              <Route path="/dashboard" exact component={DashboardComoponent}/>
              <Route path="/login" component={LoginComponent}/> 
              <Redirect to="/"/>
        </div>
      </div>
      </Router>
      </Provider>
    ];
  }
}

const mapStateToProps = (state, ownProps) => {
  debugger
  return { ...state }
}

const mapDispatchToProps = dispatch => {
  debugger
  return {
    loginActions: bindActionCreators(login, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)