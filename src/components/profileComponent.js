import React from 'react';
import {connect} from 'react-redux';

const ProfileComponent = (props) => {
    debugger
    return (
        <div className="profile">
            <h2>Hello {props.login.userName} !</h2>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    debugger
    const {login} = state;
    return { login }
  }

  export default connect(mapStateToProps )(ProfileComponent)

