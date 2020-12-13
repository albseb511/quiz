import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fbaseapp } from '../../firebase/fbase';
import {getCategories} from "./index"

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
        if(category.length===0){
            dispatch( getCategories() )
        }
    },[dispatch])

    return loading? <div>...loading</div>: (
        <div> 
            Dashboard

            <Link to="/add-question">ADD QUESTION</Link>

            <button onClick={logout}>LOGOUT</button>

            <h3>Categoies</h3>
            {
                category.map( item => <Link to={`/questions/${item.name}`} key={item.id}> {item.name} </Link> )
            }
        </div>
    )
}

export {Dashboard}
