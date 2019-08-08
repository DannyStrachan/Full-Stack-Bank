import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from "./component/Dashboard/Dashboard";
import Landing from "./component/Landing/Landing";
import Transfer from "./component/Transfer/Transfer";

export default (
<Switch>
    <Route exact path='/' component={Landing} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/transfer" component={Transfer} />
</Switch>
)