import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Sidebar from './sidebar';
import SingleEmail from './single-email';
import EmailList from './email-list';
import './email.css';


export default function Email() {
    return (
        <Router>
            <div className="email">
                <Sidebar />
                <main>
                    <Switch>
                        <Redirect exact from="/" to="/inbox" />
                        <Route exact path="/:folderId" component={EmailList} />
                        <Route exact path="/:folderId/:emailId" component={SingleEmail} />
                    </Switch>
                </main>
            </div>
        </Router>
    );
}
