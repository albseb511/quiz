import { Input,  Select, Form, Row, Col, Button, message } from 'antd'
import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import { useParams } from 'react-router-dom';
import { getQuestions } from './state/action';

const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  

const ViewQuestions = () => {

    const {questions, loading, presentCategory} = useSelector(state=>state.viewQuestions);
    const dispatch = useDispatch();
    const {category} = useParams();

    React.useEffect(()=>{
        if( !questions || category !== presentCategory ){
            dispatch(getQuestions(category))
            .then(res=>{
                console.log('successss',res)
            })
        }
    },[dispatch, category, questions])

    return (
        <Row justify="center">
            <Col justify="center"  xs={16} sm={12} md={12} lg={12} xl={12}>
                <h3>See all questions</h3>
                <ul>
                {
                    loading? <li>...loading</li> : questions.map(item=><li key={item.title}>{item.title}</li>)
                }
                </ul>
            </Col>
        </Row>
    )
}

export {ViewQuestions}
