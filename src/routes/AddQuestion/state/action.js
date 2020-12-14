import { questions } from "../../../firebase/fbase"
import * as addQuestionActions from "./actionTypes"

const addQuestionRequest = (payload) => ({
    type: addQuestionActions.POST_NEW_QUESTION_REQUEST,
    payload
})

const addQuestionSuccess = (payload) => ({
    type: addQuestionActions.POST_NEW_QUESTION_SUCCESS,
    payload
})

const addQuestionFailure = (payload) => ({
    type: addQuestionActions.POST_NEW_QUESTION_FAILURE,
    payload
})

const addQuestion = (payload) => (dispatch) => {
    dispatch(addQuestionRequest())

    return questions.add({
        category: payload.category,
        title: payload.title,
        answer: payload.answer,
        // type of question, as of now only 1 type
        type: payload.type
    })
    .then(res=>{
        dispatch(addQuestionSuccess(res))
        return true
    })
    .catch(err=>{
        dispatch(addQuestionFailure(err))
        return false
    })
}


export { addQuestion }