import React from 'react';
import {Link} from 'react-router-dom';
import Loader from "./Loader";

class UnAuthorized extends React.Component {

    render() {
        return (
            <div>
                <h1>Unauthorized, please <Link to="/auth/signin">Sign In</Link></h1>
            </div>
        );
    }
}

export default UnAuthorized;
