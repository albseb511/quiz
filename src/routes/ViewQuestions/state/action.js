import { questions } from "../../../firebase/fbase"
import * as questionConstants from "./actionTypes"

const getQuestionRequest = (payload) => ({
    type: questionConstants.GET_QUESTIONS_REQUEST,
    payload
})

const getQuestionSuccess = (payload) => ({
    type: questionConstants.GET_QUESTIONS_SUCCESS,
    payload:{
        questions: payload.questions,
        category: payload.category
    }
})

const getQuestionFailure = (payload) => ({
    type: questionConstants.GET_QUESTIONS_FAILURE,
    payload
})

const getQuestions = (category) => (dispatch) => {
    dispatch(getQuestionRequest())

    return questions.where('category','==',category).get()
    .then(snapshot =>{
        let qns = []
        snapshot.forEach(question =>{
            qns.push( question.data() )
        })
        return qns
    })
    .then(res=>{
        dispatch(getQuestionSuccess({ questions: res, category }))
        return res
    })
    .catch(err=>{
        dispatch(getQuestionFailure(err))
        return err
    })
}


export { getQuestions }