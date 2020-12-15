import { Row, Col, Pagination, Button } from "antd";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuestions } from "./state/action";
import { QuestionCard } from "./components/QuestionCard";

const ViewQuestions = () => {
  const { questions, loading, presentCategory } = useSelector(
    (state) => state.viewQuestions
  );
  const dispatch = useDispatch();
  const { category } = useParams();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePageChange = (page) => {
    setCurrentIndex(page - 1);
  };

  React.useEffect(() => {
    if (!questions || category !== presentCategory) {
      dispatch(getQuestions(category));
    }
  }, [dispatch, category, questions, presentCategory]);
  return (
    <>
      <Row justify="center">
        <Col justify="center" xs={16} sm={16} md={16} lg={12} xl={12}>
          {loading ? (
            <div>...loading</div>
          ) : (
            <QuestionCard data={questions[currentIndex]} />
          )}
        </Col>
      </Row>
      <Row justify="center" span={12}>
        {!loading && questions?.length !== 0 && (
          <Pagination
            current={currentIndex + 1}
            total={questions.length}
            onChange={handlePageChange}
            showSizeChanger={false}
            defaultCurrent={1}
            pageSize={1}
          />
        )}
      </Row>
    </>
  );
};

export { ViewQuestions };
