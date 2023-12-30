import React from "react";
import styled from "@emotion/styled";

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    pont-size: 13px;
  }
`;

const Footer = function () {
  return (
    <FooterWrapper>
      © {new Date().getFullYear()} joyoo. Powered by Gatsby. All rights
      reserved.
    </FooterWrapper>
  );
};

export default Footer;
