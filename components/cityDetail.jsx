import React from "react";
import styled from "styled-components";
const Container = styled.div`
  box-sizing: border-box;
  width: 280px;
  height: 96px;
  border: 1px solid black;
  box-shadow: 1px 4px 4px black;
  border-radius: 16px;
  display: flex;
  justify-content: space-around;

  section {
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div {
      font-size: 18px;
      font-weight: 300;
    }
  }
`;
const CityCardDetail = ({ city, weather, climate, temp }) => {
  const cityname = (name) => {
    if (name.length <= 8) {
      return name;
    } else {
      return name.split("").slice(0, 8).join("") + "...";
    }
  };

  return (
    <Container>
      <section>
        <h1 style={{ fontSize: "24px", padding: "5px" }}>{cityname(city)}</h1>
        <div>{weather}</div>
      </section>
      <section>
        <h1 style={{ fontSize: "48px" }}>{temp}</h1>
        <div>{climate}</div>
      </section>
    </Container>
  );
};
export default CityCardDetail;
