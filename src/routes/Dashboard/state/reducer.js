import * as dashboardConstants from './actionTypes'

const initialState = { 
    category: [],
    loading: false,
    error: false,
}

const dashboardReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case dashboardConstants.GET_CATEGORY_REQUEST:
        return { 
            ...state,
            loading: true,
            error: false
        }

    case dashboardConstants.GET_CATEGORY_SUCCESS:
        return { 
            ...state,
            error: false,
            loading: false,
            category: payload
        }
        
    case dashboardConstants.GET_CATEGORY_FAILURE:
        return { 
            ...state,
            error: true,
            loading: false,
        }


    default:
        return state
    }
}

export { dashboardReducer }