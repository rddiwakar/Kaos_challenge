import React from "react";
import CityDetail from "./cityDetail";
import styled from "styled-components";
const CardWrapper = styled.div`
  padding: 24px;
  display: flex;
  justify-content: space-around;
  & .nameLogo {
    width: 64px;
    height: 64px;
    border: 1px solid #ff7768;
    position: relative;
    border-radius: 64px;
    color: black;
    div {
      position: absolute;
      top: 4px;
      left: 4px;
      width: 55px;
      height: 55px;
      border-radius: 55px;
      background: lightgray;
      text-align: center;
      align-items: center;
      font-size: 20px;
      p {
        position: absolute;
        top: 10px;
        left: 16px;
      }
    }
  }
  & .name {
    font-weight: 300;
    padding: 3px;
    text-align: center;
  }
  & .nameContainer {
    justify-content: center;
    text-align: center;
  }
`;
const AccountFeed = () => {
  const arr = [
    {
      name: "Rahul Diwakar",
      cards: [
        {
          city: "city one",
          weather: "Clear Sky",
          temp: "24",
          climate: "H:41|L:12"
        },
        {
          city: "city two",
          weather: "Rainy",
          temp: "16",
          climate: "H:11|L:12"
        },
        {
          city: "city three",
          weather: "Rainy",
          temp: "16",
          climate: "H:11|L:12"
        }
      ]
    },
    {
      name: "Swastik Yadav",
      cards: [
        {
          city: "city one",
          weather: "Clear Sky",
          temp: "11",
          climate: "H:41|L:12"
        },
        {
          city: "city two",
          weather: "Rainy",
          temp: "16",
          climate: "H:11|L:12"
        }
      ]
    }
  ];
  return (
    <>
      {arr.map((itm) => {
        const logoarr = itm.name.split(" ");
        let logo = logoarr[0][0] + logoarr[1][0];
        return (
          <CardWrapper>
            <div className="nameContainer">
              <div className="nameLogo">
                <div>
                  <p>{logo}</p>
                </div>
              </div>
              <p className="name">{itm.name}</p>
            </div>
            <div>
              {itm.cards.map((detail) => {
                return (
                  <div>
                    <CityDetail
                      city={detail.city}
                      temp={detail.temp}
                      weather={detail.weather}
                      climate={detail.climate}
                    />
                    <br />
                  </div>
                );
              })}
            </div>
          </CardWrapper>
        );
      })}
    </>
  );
};

export default AccountFeed;
