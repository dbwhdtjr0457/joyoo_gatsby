import React from "react";
import styled from "@emotion/styled";
import PostItem from "./PostItem";

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`;

const PostList = ({ selectedCategory, posts }) => {
  return (
    <PostListWrapper>
      {posts.map(({ node }) => {
        const { id, frontmatter } = node;
        return (
          <PostItem key={id} {...frontmatter} link="https://www.google.com" />
        );
      })}
    </PostListWrapper>
  );
};

export default PostList;
