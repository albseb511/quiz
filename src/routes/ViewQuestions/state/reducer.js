import * as questionConstants from "./actionTypes";

const initialState = {
    loading: true,
    error: false,
    questions: null,
    presentCategory: null,
}

const viewQuestionsReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case questionConstants.GET_QUESTIONS_REQUEST:
        return { 
            ...state, 
            loading: true,
            error: false
        }
    case questionConstants.GET_QUESTIONS_SUCCESS:
        return { 
            ...state, 
            loading: false,
            error: false,
            questions: payload.questions,
            presentCategory: payload.category
        }
    case questionConstants.GET_QUESTIONS_FAILURE:
        return { 
            ...state, 
            loading: false,
            error: true
        }

    default:
        return state
    }
}


export { viewQuestionsReducer }