import React from 'react';
import {Route} from 'react-router-dom';

import AdminPage from './routes/AdminPage';
import AuthPage from './routes/AuthPage';
import ProtectedRoute from './common/ProtectedRoute';


class Root extends React.Component {
    render(){
        return (
            <div>
                <ProtectedRoute path="/admin" component={AdminPage}/>
                <Route path="/auth" component={AuthPage}/>
            </div>
        )
    }
}

export default Root;
