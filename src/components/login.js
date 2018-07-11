import React, { Component } from 'react';
import { CustomInputComponent } from './customInputComponent';
import { CustomButtonComponent } from './customButtonComponent';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as login from '../store/actions/loginActions';


class LoginComponent extends Component {
    constructor(props) {
        super(props)
    }
    debugger;

    componentWillReceiveProps = ( nextProps ) => {
        if(this.props.login.loggedIn !== nextProps.login.loggedIn) {
        if (nextProps.login.loggedIn) {
          debugger;
          nextProps.history.push('/dashboard');
        }  
      }
      }
    
    render() {
        debugger
        let { login, loginActions } = this.props;
        let showErrorMsg = false;
        const userObj = {};
        let handelLogin = login.loggedIn ? loginActions.Logout : loginActions.Login;
        let errComp = showErrorMsg ? <h3>Invalid credentials</h3> : 'Wrong credentials';
        const style = { color: 'red', backgroundColor: 'yellow' }  

        function handelClick() {
            debugger
            handelLogin (userObj);
        };
    
        function handelInputChange(event) {
            debugger;
            const { name, value } = event.target;
            userObj[name] = value;
        }

    return (
        <div className="login"><span style={style}>{errComp}</span>
            <CustomInputComponent placeholder="Enter Emial/UserId" type="text" name="email" id="email" className="input" onChange={handelInputChange}/>
            <CustomInputComponent placeholder="Enter password" type="password" name="password" id="password" className="input" onChange={handelInputChange}/>
            <CustomButtonComponent label="Login" className="btn btn-primary" onClick={ handelClick }/>
        </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    const { login } = state
    return { login }
  }
  
  const mapDispatchToProps = dispatch => {
    debugger
    return {
      loginActions: bindActionCreators(login, dispatch)
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
  
