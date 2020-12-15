import { Empty } from "antd";
import { Card, Typography, Col, Image } from "antd";
import React from "react";
import styles from "../style/CategoryCard.module.css";

const CategoryCard = ({ data: { name, icon, id }, onClick }) => {
  return (
    <Col
      className={styles.categoryContainer}
      justify="center"
      xs={24}
      sm={24}
      md={12}
      lg={12}
      xl={8}
    >
      <Card
        className={styles.categoryCard}
        hoverable
        onClick={onClick}
        bordered={false}
        bodyStyle={{ textAlign: "center" }}
      >
        {icon ? <Image width={125} src={icon} /> : <Empty />}
        <Typography.Title level={1}> {name} </Typography.Title>
      </Card>
    </Col>
  );
};

export { CategoryCard };
