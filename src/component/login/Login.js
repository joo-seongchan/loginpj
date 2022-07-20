import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useState } from "react";

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("https://t1.daumcdn.net/cfile/tistory/99280D3E5B28527629")
    no-repeat center/cover;
`;

const BgCover = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
`;
const Wrap = styled.div`
  width: 1000px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 100px 150px;
  border-radius: 25px;
  background: url("https://t1.daumcdn.net/cfile/tistory/99280D3E5B28527629")
    no-repeat center/cover;
  position: relative;
`;
const ConWrap = styled.div`
  width: 120%;
  height: 100%;
  position: absolute;

  bottom: -100px;
  left: -100px;
  border-radius: 25px;
  display: flex;
`;

const LeftCon = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 25px;
  position: relative;
  z-index: 9999;
`;
const RightCon = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 25px;
  position: relative;
  z-index: 9999;
`;

const MoveBox = styled.div`
  width: 50%;
  height: 100%;
  background-color: green;
  border-radius: 25px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9998;
  transition: 1s;
  transition-timing-function: cubic-bezier(0.96, -0.42, 0.33, 0.77);
  transform: translateX(${(props) => props.a});
`;

const Clinck = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;

export const Login = () => {
  const [position1, setPoisition1] = useState("0");
  const [position2, setPoisition2] = useState("100%");

  return (
    <Section>
      <Clinck
        onClick={() => {
          setPoisition1(`${position1 === "0" ? "100%" : "0"}`);
        }}
      ></Clinck>
      <BgCover>
        <Wrap>
          <ConWrap>
            <LeftCon></LeftCon>
            <RightCon></RightCon>
            <MoveBox a={position1} b={position2}></MoveBox>
          </ConWrap>
        </Wrap>
      </BgCover>
    </Section>
  );
};
