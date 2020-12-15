import { Mentions } from "antd";
import { Input, Select, Form, Row, Col, Button, message } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../Dashboard";
import { addQuestion } from "./state/action";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AddQuestion = () => {
  const { category } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (category.length === 0) {
      dispatch(getCategories());
    }
  }, [dispatch]);

  const onSubmit = (data) => {
    console.log(data);
    // add a new question
    // type 1 question only exists
    data.type = 1;
    dispatch(addQuestion(data))
      .then((res) => {
        res ? message.success("Success") : message.error("No Permission");
      })
      .catch((err) => {
        message.error("Something went wrong" + err.message);
      });
  };
  return (
    <Row justify="center">
      <Col justify="center" xs={16} sm={12} md={12} lg={12} xl={12}>
        <h3>Add a new question</h3>
        <Form {...layout} name="add-question" onFinish={onSubmit}>
          <Form.Item label="category" name="category">
            <Select>
              {category?.map((item) => (
                <Option key={item.id} value={item.name}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Title / Qestion" name="title">
            <Input allowClear />
          </Form.Item>
          <Form.Item label="Answer" name="answer">
            <TextArea allowClear />
          </Form.Item>
          <Form.Item label="tags" name="tags">
            <Mentions onSelect={(e) => console.log(e)} prefix={["#"]}>
              <Option value={"style"}>style</Option>
              <Option value={"b"}>b</Option>
            </Mentions>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export { AddQuestion };
