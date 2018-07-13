import React from 'react';
import {connect} from 'react-redux';

const ProfileComponent = (props) => {
    debugger
    return (
        <div className="profile">
            <table className="table">
                <tr>
                    <th>Name</th>
                    <th>Mobile Number</th>
                    <th>Email Address</th>
                    <th>Age</th>
                    <th>Industry</th>
                </tr>
                <tr>
                    <td>{props.login.userDetails.name}</td>
                    <td>{props.login.userDetails.mobile}</td>
                    <td>{props.login.userDetails.email}</td>
                    <td>{props.login.userDetails.age}</td>
                    <td>{props.login.userDetails.industry}</td>
                </tr>
            </table>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    debugger
    const {login} = state;
    return { login }
  }

  export default connect(mapStateToProps )(ProfileComponent)

