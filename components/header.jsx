import React from "react";
import styled from "styled-components";

const Heading1 = styled.h1`
  font-weight: 700;
  font-size: 24px;
  padding: 74px 0 10px 24px;
`;
const Heading3 = styled.h3`
  font-weight: 700;
  font-size: 18px;
  padding: 5px 24px;
`;

const Header = () => {
  return (
    <>
      <Heading1>KAOS Challenge</Heading1>
      <Heading3>Frontend Developer</Heading3>
    </>
  );
};

export default Header;
