import {
  faEnvelope,
  faLock,
  faLockOpen,
  faMobileScreen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

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
      font-size: 18px;
      color: #33333350;
    }
  }
`;

const IconWrap = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;
const Errors = styled.div`
  width: 100%;
  font-size: 16px;
  color: #33333380;
  font-weight: 400;
`;

const MButtonWrap = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Mbutton = styled.button`
  all: unset;
  padding: 15px 40px;
  background-color: #3f9eff;
  font-size: 22px;
  font-weight: 600;
  color: white;
  border-radius: 15px;
  cursor: pointer;
`;

const InPutWrap2 = styled.div`
  display: flex;
  border-bottom: 2px solid #33333380;
  margin-bottom: 20px;
  justify-content: space-between;
  input {
    all: unset;
    box-sizing: border-box;
    width: 80%;
    padding: 20px 0;
    font-size: 18px;
    &::placeholder {
      font-size: 18px;
      color: #33333350;
    }
  }
`;

const NamePhoneWrap = styled.div`
  width: 100%;
  margin-bottom: 30px;
  height: 100px;
  display: flex;
  justify-content: space-between;
`;
const NameWrap = styled.div`
  width: 45%;
`;
const PhoneWrap = styled.div`
  width: 45%;
`;
const PwWrap = styled.div`
  width: 100%;
  margin-bottom: 30px;
  height: 100px;
  display: flex;
  justify-content: space-between;
`;

const Passwordcheck1 = styled.div`
  width: 45%;
`;
const Passwordcheck2 = styled.div`
  width: 45%;
`;

export const SignUpModule = () => {
  const [pwType, setPwType] = useState("password");
  const navigate = useNavigate();
  const { state } = useLocation();

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

  const ssubmit = () => {
    const { spassword, spwcheck } = getValues();

    if (spassword !== spwcheck) {
      setError("spwcheckResult", {
        message: "비밀번호가 일치하지 않습니다.",
      });
    }
    if (spassword === spwcheck) {
      navigate("/login", { state: { message: "ture" } });
    }
  };
  return (
    <>
      <Mtitle>회원가입</Mtitle>
      <form onSubmit={handleSubmit(ssubmit)}>
        <NamePhoneWrap>
          <NameWrap>
            <InPutWrap2>
              <input
                {...register("sname", {
                  required: "이름은 필수 입니다.",
                  pattern: {
                    value: /^[가-힣a-zA-Z]+$/,
                    message: "이름을 확인해주세요.",
                  },
                  onChange() {
                    clearErrors("snameResult");
                  },
                })}
                type="text"
                placeholder="이름"
              ></input>
              <IconWrap style={{ width: "20%" }}>
                <FontAwesomeIcon icon={faUser} />
              </IconWrap>
            </InPutWrap2>
            {errors?.sname?.message && (
              <Errors>{errors?.sname?.message}</Errors>
            )}
          </NameWrap>
          <PhoneWrap>
            <InPutWrap2>
              <input
                {...register("sphone", {
                  required: "휴대폰 번호는 필수 입니다.",
                  pattern: {
                    value: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
                    message: "휴대폰번호를 확인해주세요.",
                  },
                  onChange() {
                    clearErrors("snameResult");
                  },
                })}
                type="text"
                placeholder="휴대폰"
              ></input>
              <IconWrap style={{ width: "20%" }}>
                <FontAwesomeIcon icon={faMobileScreen} />
              </IconWrap>
            </InPutWrap2>
            {errors?.sphone?.message && (
              <Errors>{errors?.sphone?.message}</Errors>
            )}
          </PhoneWrap>
        </NamePhoneWrap>
        <UserNameWrap>
          <InPutWrap>
            <input
              {...register("susername", {
                required: "메일은 필수 입니다.",
                pattern: {
                  value:
                    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                  message: "메일형식이 아닙니다.",
                },
              })}
              type="text"
              placeholder="E-mail"
            ></input>
            <IconWrap>
              <FontAwesomeIcon icon={faEnvelope} />
            </IconWrap>
          </InPutWrap>
          {errors?.susername?.message && (
            <Errors>{errors?.susername?.message}</Errors>
          )}
        </UserNameWrap>

        <PwWrap>
          <Passwordcheck1>
            <InPutWrap2>
              <input
                {...register("spassword", {
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
              <IconWrap style={{ cursor: "pointer", width: "30%" }}></IconWrap>
            </InPutWrap2>
            {errors?.spassword?.message && (
              <Errors>{errors?.spassword?.message}</Errors>
            )}
          </Passwordcheck1>
          <Passwordcheck2>
            <InPutWrap2>
              <input
                {...register("spwcheck", {
                  required: "패스워드는 필수 입니다.",
                  minLength: {
                    value: 8,
                    message: "패스워드는 8자리 이상입니다.",
                  },
                  onChange() {
                    clearErrors("spwcheckResult");
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
                style={{ cursor: "pointer", width: "30%" }}
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
            </InPutWrap2>
            {errors?.spwcheck?.message && (
              <Errors>{errors?.spwcheck?.message}</Errors>
            )}
            {errors?.spwcheckResult?.message && (
              <Errors>{errors?.spwcheckResult?.message}</Errors>
            )}
          </Passwordcheck2>
        </PwWrap>
        <MButtonWrap style={{ justifyContent: "right" }}>
          <Mbutton
            style={{
              opacity: `${isValid ? "1" : "0.5"}`,
              cursor: `${isValid ? "pointer" : "auto"}`,
            }}
          >
            회원 가입
          </Mbutton>
        </MButtonWrap>
      </form>
    </>
  );
};
