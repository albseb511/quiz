import * as authConstants from './actionTypes'

const initialState = {
    isAuth: false,
    loading: false,
    user: {},
    error: false
}

export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case authConstants.REGISTER_USER_REQUEST:
        return { 
            ...state,
            loading: true,
            error: false
        }

    case authConstants.REGISTER_USER_SUCCESS:
        return { 
            ...state,
            loading: false
        }
        
        case authConstants.REGISTER_USER_FAILURE:
            return { 
            ...state,
            loading: false,
            error: true
        }

    case authConstants.LOGIN_USER_REQUEST:
        return { 
            ...state,
            loading: true,
            error: false
        }

    case authConstants.LOGIN_USER_SUCCESS:
        return { 
            ...state,
            loading: false,
            isAuth: true,
            user: payload
        }
        
    case authConstants.LOGIN_USER_FAILURE:
        return { 
            ...state,
            loading: false,
            error: true
        }

    case authConstants.LOGOUT_USER_SUCCESS:
        return {
            ...state,
            isAuth: false,
            user: {}
        }

    default:
        return state
    }
}
