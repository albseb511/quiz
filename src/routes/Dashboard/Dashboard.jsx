import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fbaseapp } from '../../firebase/fbase';
import {getCategories} from "./state/action"

const Dashboard = () => {
    const dispatch = useDispatch();
    const { category, loading } = useSelector(state=>state.dashboard)
    const logout = () => {
        fbaseapp.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
    }

    React.useEffect(()=>{
        dispatch( getCategories() );
    },[dispatch])

    return loading? <div>...loading</div>: (
        <div> 
            Dashboard
            <button onClick={logout}>LOGOUT</button>

            <h3>Categoies</h3>
            {
                category.map( item => <div key={item.id}> {item.name} </div> )
            }
        </div>
    )
}

export {Dashboard}
