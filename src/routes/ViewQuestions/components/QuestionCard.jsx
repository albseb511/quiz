import { Empty } from "antd";
import { Card, Typography, Col, Button } from "antd";
import React from "react";
import styles from "../style/QuestionCard.module.css";

const QuestionCard = ({ data: { answer, title }, onClick }) => {
  const [showAnswer, setShowAnswer] = React.useState(false);
  return (
    <Col justify="center" span={24}>
      <Card
        className={styles.categoryCard}
        hoverable
        onClick={onClick}
        bordered={false}
        bodyStyle={{ textAlign: "center" }}
      >
        <Typography.Title level={1}> {title} </Typography.Title>
        {showAnswer && (
          <Typography.Title level={1}> {answer} </Typography.Title>
        )}
        <Button onClick={() => setShowAnswer((prev) => !prev)}>
          {showAnswer ? "Hide" : "Show"} Answer
        </Button>
      </Card>
    </Col>
  );
};

export { QuestionCard };
