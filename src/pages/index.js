import React from "react";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import GlobalStyle from "../components/Common/GlobalStyle";
import Introduction from "../components/Main/Introduction";
import Footer from "../components/Common/Footer";
import CategoryList from "../components/Main/CategoryList";
import PostList from "../components/Main/PostList";

const CAGEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const indexPage = function ({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />
      <CategoryList selectedCategory="All" categoryList={CAGEGORY_LIST} />
      <PostList posts={edges} />
      <Footer />
    </Container>
  );
};

export default indexPage;

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD.")
            summary
            categories
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
`;
