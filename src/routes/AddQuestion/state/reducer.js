import * as questionConstants from "./actionTypes";

const initialState = {
    loading: true,
    error: false
}

const addQuestionReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case questionConstants.POST_NEW_QUESTION_REQUEST:
        return { 
            ...state, 
            loading: true,
            error: false
        }
    case questionConstants.POST_NEW_QUESTION_SUCCESS:
        return { 
            ...state, 
            loading: false,
            error: false
        }
    case questionConstants.POST_NEW_QUESTION_FAILURE:
        return { 
            ...state, 
            loading: false,
            error: true
        }

    default:
        return state
    }
}


export { addQuestionReducer }