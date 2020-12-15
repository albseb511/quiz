import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { CategoryCard } from "./components/CategoryCard";
import { getCategories } from "./index";
import { Row } from "antd";

const Dashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { category, loading } = useSelector((state) => state.dashboard);


  React.useEffect(() => {
    if (category.length === 0) {
      dispatch(getCategories());
    }
  }, [dispatch]);

  const handleClick = (name) => {
    history.push(`/questions/${name}`);
  };

  return loading ? (
    <div>...loading</div>
  ) : (
    <div>
      <Row span={24} justify="center" gutter={[16, 16]}>
        {category.map((item) => (
          <CategoryCard
            data={item}
            key={item.id}
            onClick={() => handleClick(item.name)}
          />
        ))}
      </Row>
    </div>
  );
};

export { Dashboard };
