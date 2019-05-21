import React from 'react';
import {Route, NavLink} from 'react-router-dom';

import SignInForm from '../auth/SignInForm';
import SignUpForm from '../auth/SignUpForm';


class AuthPage extends React.Component {
    static propTypes = {

    };

    handleSignIn = (values) => console.log('----handleSignIn----', values);
    handleSignUp = (values) => console.log('----handleSignUp----', values);

    render() {
        return (
            <div>
                <h1>Auth Page</h1>
                <NavLink to="/auth/signin" activeStyle={{color: 'red'}}>sign in</NavLink>
                <NavLink to="/auth/signup" activeStyle={{color: 'red'}}>sign up</NavLink>
                <Route path="/auth/signin" render={() => <SignInForm onSubmit = {this.handleSignIn}/>}/>
                <Route path="/auth/signup" render={() => <SignUpForm onSubmit = {this.handleSignUp}/>}/>
            </div>
        );
    }
}

export default AuthPage;
