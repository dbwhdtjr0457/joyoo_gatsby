import React from "react";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 20px;
  }
`;

const TextStyle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: gray;
`;

const InfoPage = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) {
  return (
    <div>
      <Global styles={globalStyle} />
      <TextStyle>{title}</TextStyle>
      {description} {author}
      <Link to="/">Go to index page</Link>
    </div>
  );
};

export default InfoPage;

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
