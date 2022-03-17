import React from "react";
import styled from "styled-components";
// import { Nav, Navbar, NavItem, NavLink } from "reactstrap";
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #fafafc;
  border: 1px solid black;
  width: 269px;
  height: 56px;
  border-radius: 16px;
  color: black;
  margin: auto;
  cursor: pointer;
  & .active {
    background: #f3c522;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px;
    border: 1 px solid #f3c522;
    border-radius: 16px;
  }
  div {
    padding: 0 10px;
  }
`;
const TabNav = ({ active, goto }) => {
  return (
    <>
      <ButtonWrapper>
        <div
          onClick={() => goto("form")}
          className={active === "form" ? "active" : ""}
        >
          Add Details
        </div>
        <div
          onClick={() => goto("feed")}
          className={active === "feed" ? "active" : ""}
        >
          View Submissions
        </div>
      </ButtonWrapper>
    </>
  );
};
// const TabNav = ({ active, goto }) => {
//   return (
//     <Nav pills>
//       <Navbar tabs="true">
//         <NavItem>
//           <NavLink
//             className={active === "form" ? "active" : ""}
//             onClick={() => goto("form")}
//           >
//             Add Details
//           </NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink
//             className={active === "feed" ? "active" : ""}
//             onClick={() => goto("feed")}
//           >
//             View Submissions
//           </NavLink>
//         </NavItem>
//       </Navbar>
//     </Nav>
//   );
// };

export default TabNav;
