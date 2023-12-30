import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 100px auto 0;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`;

const CategoryItem = styled(Link)`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${(props) => (props.active === "true" ? "800" : "400")};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const CategoryList = function ({ selectedCategory, categoryList }) {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([category, count]) => (
        <CategoryItem
          key={category}
          to={category === "All" ? "/" : `/?category=${category}`}
          active={category === selectedCategory ? "true" : "false"}
        >
          #{category}({count})
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  );
};

export default CategoryList;
