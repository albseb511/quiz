import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {PrivateRoutes} from '../common'
import {Dashboard} from '../Dashboard'
import { Login } from '../Login'

const App = () => {
    return (
        <div>
            <Switch>
                <PrivateRoutes path="/" exact>
                    <Dashboard />
                </PrivateRoutes>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </div>
    )
}

export { App}
