import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import CreateHistory from '../pages/CreateHistory'
import ListHistories from '../pages/ListHistories'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/create' component={CreateHistory} />
                <Route path='/list' component={ListHistories} />
            </Switch>
        </Router>
    )
}

export default Routes