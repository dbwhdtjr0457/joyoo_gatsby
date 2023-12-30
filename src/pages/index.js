import React, { useMemo } from "react";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import queryString from "query-string";
import GlobalStyle from "../components/Common/GlobalStyle";
import Introduction from "../components/Main/Introduction";
import Footer from "../components/Common/Footer";
import CategoryList from "../components/Main/CategoryList";
import PostList from "../components/Main/PostList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const IndexPage = function ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
    },
  },
}) {
  const parsed = queryString.parse(search);
  const selectedCategory = parsed.category || "All";

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          acc,
          {
            node: {
              frontmatter: { categories },
            },
          }
        ) => {
          categories.forEach((category) => {
            if (acc[category] === undefined) {
              acc[category] = 0;
            }
            acc[category] += 1;
          });

          acc["All"] += 1;

          return acc;
        },
        { All: 0 }
      ),
    [edges]
  );

  return (
    <Container>
      <GlobalStyle />
      <Introduction profileImage={gatsbyImageData} />
      <CategoryList
        selectedCategory={selectedCategory}
        categoryList={categoryList}
      />
      <PostList selectedCategory={selectedCategory} posts={edges} />
      <Footer />
    </Container>
  );
};

export default IndexPage;

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: [{ frontmatter: { date: DESC } }, { frontmatter: { title: DESC } }]
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD.")
            summary
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
    }
  }
`;
