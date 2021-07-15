import React from 'react';
import {Route, Switch} from 'react-router';
import Api from './api/api';
import Export from './export/export';
import CreateJob from './create-job/create-job';
import Jobs from './jobs/jobs';
import Sidebar from './sidebar/sidebar';
import AuthorizeDropbox from './export/authorize-dropbox';

function App(): React.ReactElement {
    return (
        <div className="flex w-screen h-screen">
            <Sidebar />

            <div className="w-full overflow-y-scroll bg-gray-100">
                <Switch>
                    <Route exact path="/">
                        <Jobs/>
                    </Route>
                    <Route path="/jobs">
                        <Jobs/>
                    </Route>
                    <Route path="/create-job">
                        <CreateJob/>
                    </Route>
                    <Route path="/export">
                        <Export/>
                    </Route>
                    <Route path="/authorize-dropbox">
                        <AuthorizeDropbox/>
                    </Route>
                    <Route exact path="/api">
                        <Api/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default App;
