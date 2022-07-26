import {
  faEnvelope,
  faLock,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { userDb } from "./Login";

const Mtitle = styled.div`
  width: 100%;
  font-size: 42px;
  margin-bottom: 60px;
  font-weight: 700;
  color: #3f9eff;
`;

const UserNameWrap = styled.div`
  width: 100%;
  margin-bottom: 30px;
  height: 100px;
`;

const InPutWrap = styled.div`
  display: flex;
  height: 50px;
  border-bottom: 2px solid #33333380;
  margin-bottom: 20px;
  input {
    all: unset;
    box-sizing: border-box;
    width: 90%;
    padding: 20px 0;
    font-size: 18px;
    &::placeholder {
      font-size: 22px;
      color: #33333350;
    }
  }
`;

const Errors = styled.div`
  width: 100%;
  font-size: 16px;
  color: #33333380;
  font-weight: 400;
`;

const PasswordWrap = styled.div`
  width: 100%;
  margin-bottom: 30px;
  height: 100px;
`;

const IconWrap = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const MButtonWrap = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Forgot = styled.div`
  color: #33333380;
  cursor: pointer;
`;
const Mbutton = styled.button`
  all: unset;
  padding: 15px 40px;
  background-color: #3f9eff;
  font-size: 22px;
  color: white;
  border-radius: 15px;
`;

export const LoginModule = () => {
  const [pwType, setPwType] = useState("password");
  const { idDb, passwordDb } = userDb;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
    setError,
    clearErrors,
  } = useForm({
    mode: "onChange",
  });

  const submit = () => {
    const { username, password } = getValues();
    const correctUserDb = userDb.filter((a) => a.eMail === username);
    if (correctUserDb.length < 1) {
      setError("nameResult", { message: "가입되지 않은 E-mail입니다." });
    } else {
      const { password: cpassword } = correctUserDb[0];

      if (password !== cpassword) {
        setError("passwordResult", { message: "비밀번호를 확인해주세요" });
      } else {
        navigate("/", { state: correctUserDb });
      }
    }
  };
  return (
    <>
      <Mtitle>Login</Mtitle>
      <form onSubmit={handleSubmit(submit)}>
        <UserNameWrap>
          <InPutWrap>
            <input
              {...register("username", {
                required: "아이디는 필수 입니다.",
                pattern: {
                  value:
                    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                  message: "메일형식이 아닙니다.",
                },
                onChange() {
                  clearErrors("nameResult");
                },
              })}
              type="text"
              placeholder="E-mail"
            ></input>
            <IconWrap>
              <FontAwesomeIcon icon={faEnvelope} />
            </IconWrap>
          </InPutWrap>
          {errors?.username?.message && (
            <Errors>{errors?.username?.message}</Errors>
          )}
          {errors?.nameResult?.message && (
            <Errors>{errors?.nameResult?.message}</Errors>
          )}
        </UserNameWrap>
        <PasswordWrap>
          <InPutWrap>
            <input
              {...register("password", {
                required: "패스워드는 필수 입니다.",
                minLength: {
                  value: 8,
                  message: "패스워드는 8자리 이상입니다.",
                },
                onChange() {
                  clearErrors("passwordResult");
                },
              })}
              type={pwType}
              placeholder="Password"
            ></input>
            <IconWrap
              onClick={() => {
                pwType === "password"
                  ? setPwType("text")
                  : setPwType("password");
              }}
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon
                style={{
                  display: `${pwType === "password" ? "block" : "none"}`,
                }}
                icon={faLock}
              />
              <FontAwesomeIcon
                style={{
                  display: `${pwType !== "password" ? "block" : "none"}`,
                }}
                icon={faLockOpen}
              />
            </IconWrap>
          </InPutWrap>
          {errors?.password?.message && (
            <Errors>{errors?.password?.message}</Errors>
          )}
          {errors?.passwordResult?.message && (
            <Errors>{errors?.passwordResult?.message}</Errors>
          )}
        </PasswordWrap>
        <MButtonWrap>
          <Forgot>비밀번호가 기억나지 않으신가요?</Forgot>
          <Mbutton
            style={{
              opacity: `${isValid ? "1" : "0.5"}`,
              cursor: `${isValid ? "pointer" : "auto"}`,
            }}
          >
            로그인
          </Mbutton>
        </MButtonWrap>
      </form>
    </>
  );
};
