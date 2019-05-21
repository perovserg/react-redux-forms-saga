import React from 'react';

import SignInForm from '../auth/SignInForm';

class AuthPage extends React.Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>Auth Page</h1>
                <SignInForm/>
            </div>
        );
    }
}

export default AuthPage;
