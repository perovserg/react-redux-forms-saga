import React from 'react';
import {reduxForm, Field} from 'redux-form';

class SignInForm extends React.Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>Sign In</h1>
                <form>
                    <div>
                        <label>Email</label>
                        <Field name="email" component="input"/>
                    </div>
                    <div>
                        <label>Password</label>
                        <Field name="password" component="input" type="password"/>
                    </div>
                    <div>
                        <input type="submit"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'auth'
})(SignInForm);
