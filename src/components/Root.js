import React from 'react';
import {Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import AdminPage from './routes/AdminPage';
import AuthPage from './routes/AuthPage';
import PersonPage from './routes/PersonPage';
import EventsPage from './routes/EventsPage';
import ProtectedRoute from './common/ProtectedRoute';

import {moduleName, signOut} from '../ducks/auth';


class Root extends React.Component {
    render(){
        const {signOut, signedIn} = this.props;
        const btn = signedIn
            ? <button onClick={signOut}> Sing out</button>
            : <Link to="/auth/singin">sing in</Link>;
        return (
            <div>
                {btn}
                <ProtectedRoute path="/admin" component={AdminPage}/>
                <Route path="/auth" component={AuthPage}/>
                <Route path="/people" component={PersonPage}/>
                <Route path="/events" component={EventsPage}/>
            </div>
        )
    }
}

export default connect(state => ({
    signedIn: !!state[moduleName].user
}), {signOut})(Root);
