import React from 'react';
import {reduxForm, Field} from 'redux-form';
import * as validateEmail from 'email-validator';

import FieldWithErrors from '../common/FieldWithErrors';

class NewPersonForm extends React.Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <Field name="firstName" component={FieldWithErrors}/>
                    <Field name="lastName" component={FieldWithErrors}/>
                    <Field name="email" component={FieldWithErrors}/>
                    <div><input type="submit"/></div>
                </form>
            </div>
        );
    }

}

function validate({firstName, email}) {
    const errors = {};
    if (!firstName) errors.firstName = 'first name is required';

    if (!email) errors.email = 'email is required';
    else if (!validateEmail.validate(email)) errors.email = 'email is invalid';

    return errors;
}

export default reduxForm({
    form: 'person',
    validate
})(NewPersonForm);
