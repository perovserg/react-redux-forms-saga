import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import SignInForm from '../auth/SignInForm';
import SignUpForm from '../auth/SignUpForm';
import Loader from '../common/Loader';

import {signUp, moduleName} from '../../ducks/auth';

class AuthPage extends React.Component {
    static propTypes = {

    };

    handleSignIn = (values) => console.log('----handleSignIn----', values);
    handleSignUp = ({email, password}) => this.props.signUp(email, password);

    render() {
        const {loading} = this.props;
        return (
            <div>
                <h1>Auth Page</h1>
                <NavLink to="/auth/signin" activeStyle={{color: 'red'}}>sign in</NavLink>
                <NavLink to="/auth/signup" activeStyle={{color: 'red'}}>sign up</NavLink>
                <Route path="/auth/signin" render={() => <SignInForm onSubmit = {this.handleSignIn}/>}/>
                <Route path="/auth/signup" render={() => <SignUpForm onSubmit = {this.handleSignUp}/>}/>
                {loading && <Loader/>}
            </div>
        );
    }
}

export default connect(state => ({
    loading: state[moduleName].loading
}), {signUp})(AuthPage);
