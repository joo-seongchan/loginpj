import styled from "styled-components";
import { useState } from "react";
import { LoginModule } from "./LoginModule";
import { SignUpModule } from "./SignUpModule";

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
  background-color: rgba(0, 0, 0, 0.1);
`;
const Wrap = styled.div`
  width: 1200px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.9);
  position: relative;
`;
const ConWrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0%;
  left: 0;
  border-radius: 25px;
  display: flex;
  justify-content: ${(props) => props.a};
`;

const LeftCon = styled.div`
  width: ${(props) => props.a};
  height: 100%;
  border-radius: 25px;
  position: relative;
  z-index: 9999;
`;
const RightCon = styled.div`
  width: ${(props) => props.a};
  height: 100%;
  border-radius: 25px;
  position: relative;
  z-index: 9999;
`;

const MoveBox = styled.div`
  width: 55%;
  height: 110%;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 25px;
  position: absolute;
  top: -5%;
  left: 5%;
  z-index: 9998;
  transition: 1s;
  transition-timing-function: cubic-bezier(1, -0.5, 0, 1.5);
  transform: translateX(${(props) => props.a});
`;

const Rlogin = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  color: white;
  padding: 30px;
`;
const Lsignup = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  color: white;
  padding: 30px;
`;
const Title = styled.div`
  font-size: 38px;
  font-weight: 600;
  margin-bottom: 40px;
`;
const Text = styled.div`
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 40px;
  font-weight: 100;
`;
const Button = styled.div`
  border: 1px solid white;
  font-size: 22px;
  padding: 15px 50px;
  border-radius: 15px;
  cursor: pointer;
`;

const Llogin = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 70px;
  form {
    width: 100%;
  }
`;
const Rsignup = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 70px;
  form {
    width: 100%;
  }
`;

const PopupWrap = styled.div`
  padding: 15px 80px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  border-radius: 25px;
  background-color: #3f9eff;
`;
const PopUpTitle = styled.div`
  color: white;
`;

export const Login = () => {
  const [position1, setPoisition1] = useState("0");
  const [padding1, setPadding1] = useState("right");
  const [conw1, setConw1] = useState("55%");
  const [conw2, setConw2] = useState("40%");
  const [place, setPlace] = useState("left");

  return (
    <Section>
      <BgCover>
        <Wrap>
          <ConWrap a={padding1}>
            <LeftCon a={conw1}>
              <Llogin
                style={{ display: `${conw1 === "55%" ? "flex" : "none"}` }}
              >
                <LoginModule />
              </Llogin>
              <Lsignup
                style={{ display: `${place === "left" ? "none" : "flex"}` }}
              >
                <Title>J Site 회원이신가요?</Title>
                <Text>
                  언제 어디서든 J Site의 콘텐츠를 즐겨보세요
                  <br /> J Site는 여러분들과 항상 함께합니다.
                </Text>
                <Button
                  onClick={() => {
                    setPoisition1(`${position1 === "0" ? "63.33333%" : "0"}`);
                    setTimeout(() => {
                      setPadding1(`${padding1 === "left" ? "right" : "left"}`);
                      setConw1(`${conw1 === "55%" ? "40%" : "55%"}`);
                      setConw2(`${conw2 === "40%" ? "55%" : "40%"}`);
                      setPlace(`${place === "left" ? "right" : "left"}`);
                    }, 500);
                  }}
                >
                  로그인
                </Button>
              </Lsignup>
            </LeftCon>
            <RightCon a={conw2}>
              <Rlogin
                style={{ display: `${place === "left" ? "flex" : "none"}` }}
              >
                <Title>회원이 아니신가요?</Title>
                <Text>
                  회원가입을 해보세요.
                  <br /> 회원가입을 통해 다양한 혜택을 누려보세요.
                </Text>
                <Button
                  onClick={() => {
                    setPoisition1(`${position1 === "0" ? "63.33333%" : "0"}`);
                    setTimeout(() => {
                      setPadding1(`${padding1 === "left" ? "right" : "left"}`);
                      setConw1(`${conw1 === "55%" ? "40%" : "55%"}`);
                      setConw2(`${conw2 === "40%" ? "55%" : "40%"}`);
                      setPlace(`${place === "left" ? "right" : "left"}`);
                    }, 500);
                  }}
                >
                  회원가입
                </Button>
              </Rlogin>
              <Rsignup
                style={{ display: `${conw1 === "40%" ? "flex" : "none"}` }}
              >
                <SignUpModule />
              </Rsignup>
            </RightCon>
            <MoveBox a={position1}></MoveBox>
          </ConWrap>
        </Wrap>
      </BgCover>
      <PopupWrap>
        <PopUpTitle>회원가입 완료! J Site 가입을 환영합니다.</PopUpTitle>
      </PopupWrap>
    </Section>
  );
};
