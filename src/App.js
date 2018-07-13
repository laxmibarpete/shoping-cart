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
import ProfileComponent from './components/profileComponent';


class App extends Component {
  constructor(props){
    super(props);
    debugger;
  }
  getDerivedStateFromProps(props, state) {
      debugger
  }

  render() {

    const style = { color: 'white', float: 'right', margin: '5px' }
    const { login } = this.props;
    const loginButtonText = login.loggedIn ? 'Logout' : 'Login';
    debugger
    const showUserData = login.userName ? <Link to="/profile" style={style}><span><i className="fa fa-user">{login.userName}</i></span></Link> : '';
    const showDashboard = login.loggedIn ? <Link to="/dashboard" style={style}><span><i className="fa fa-dashboard"></i></span>Dashboard</Link> : ''
   
    return [
      <Provider store = { this.props.store }>
      <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/" className="App-title">ShoppingCart</Link>
          <Link to="/login" style={style} onClick={this.props.loginActions.Logout}><span><i class="fa fa-sign-out"></i></span>{loginButtonText}</Link>
          {showUserData}
          {showDashboard}
          


        </header>
        <div className="section">
              <Route path="/" exact component={HomeComponent}/>
              <Route path="/dashboard" exact component={DashboardComoponent}/>
              <Route path="/login" component={LoginComponent}/> 
              <Route path="/profile" component={ProfileComponent}/> 
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