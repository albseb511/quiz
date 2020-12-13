import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom';

const PrivateRoutes = ({path, exact, children}) => {
    const isAuth = useSelector(state=>state.auth.isAuth);
    const loading = useSelector(state=>state.auth.loading);

    if(loading){
        return <div>...loading</div>
    }

    if(!isAuth){
        return <Redirect to="/login" />
    }
    return (
        <Route path={path} exact={exact} >
            {children}
        </Route>
    )
}

export {PrivateRoutes}
