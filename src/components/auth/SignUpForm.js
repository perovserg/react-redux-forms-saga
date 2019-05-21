import React from 'react';
import {reduxForm, Field} from 'redux-form';
import * as emailValidator from 'email-validator';

import FieldWithErrors from '../common/FieldWithErrors';

class SignUpForm extends React.Component {
    static propTypes = {

    };

    render() {
        const {handleSubmit} = this.props;
        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <Field name="email" component={FieldWithErrors}/>
                    <Field name="password" component={FieldWithErrors} type="password"/>
                    <div>
                        <input type="submit"/>
                    </div>
                </form>
            </div>
        );
    }
}

const validate = ({email, password}) => {
    const errors = {};
    if (!email) errors.email = 'email is required';
    else if (!emailValidator.validate(email)) errors.email = 'invalid email';

    if (!password) errors.password = 'password is required';
    else if (password.length < 8) errors.password = 'password is to short';

    return errors;
};

export default reduxForm({
    form: 'auth',
    validate
})(SignUpForm);
