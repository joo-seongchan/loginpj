import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("https://t1.daumcdn.net/cfile/tistory/99280D3E5B28527629")
    no-repeat center/cover;
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 100px 150px;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
`;
const Title = styled.div`
  font-size: 120px;
  color: #333;
  font-weight: 900;
  margin-bottom: 150px;
`;
const Button = styled.div`
  width: 300px;
  height: 120px;
  background-color: green;
  border-radius: 25px;
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    color: white;
  }
`;

export const Home = () => {
  return (
    <Section>
      <Wrap>
        <Title>로그인 PJ</Title>
        <Button>
          <Link to="/login">로그인</Link>
        </Button>
      </Wrap>
    </Section>
  );
};