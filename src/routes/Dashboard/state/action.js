import { categories } from '../../../firebase/fbase'
import * as dashboardConstants from './actionTypes'

const getCategoryRequest = (payload) => ({
    type: dashboardConstants.GET_CATEGORY_REQUEST,
    payload
})

const getCategorySuccess = (payload) => ({
    type: dashboardConstants.GET_CATEGORY_SUCCESS,
    payload
})

const getCategoryFailure = (payload) => ({
    type: dashboardConstants.GET_CATEGORY_FAILURE,
    payload
})

const getCategories = (payload) => dispatch => {
    dispatch( getCategoryRequest() )
    categories.get().then(querySnapshot=>{
        let category = []
        querySnapshot.forEach( c => {
            category.push(c.data())
        } )
        dispatch(getCategorySuccess(category))
    })
    .catch(err=>{
        dispatch(getCategoryFailure(err))
    })
}

export {
    getCategories
}