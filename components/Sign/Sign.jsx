import React, { useState } from "react";

import { Button, Modal, Row } from "antd";
import google from "../../public/google.svg";
import gitHub from "../../public/gitHub.svg";
import mail from "../../public/mail.svg";
import Image from "next/image";
import SignUp from "../SignUp/SignUp";

const Sign = ({ isModalOpen, setIsModalOpen, sign, setSign }) => {
  const [signUp, setSignUp] = useState(false);
  return (
    <>
      {sign ? (
        <>
          <Modal
            className="sign"
            title="Регистрация"
            visible={isModalOpen}
            onCancel={() => setIsModalOpen(!isModalOpen)}
            footer={null}
          >
            <Row justify="center">
              <p className="sign-in__description">
                Выберите удобный для Вас способ регистрации
              </p>
              <Button icon={<Image src={google} alt="google" />} block>
                <span className="centering">Продолжить с аккаунтом Google</span>
              </Button>
              <Button icon={<Image src={gitHub} alt="gitHub" />} block>
                <span className="centering">Продолжить с аккаунтом GitHub</span>
              </Button>
              <Button
                onClick={() => {
                  setIsModalOpen(!isModalOpen), setSignUp(!signUp);
                }}
                icon={<Image src={mail} alt="mail" />}
                block
              >
                <span className="centering">Регистрация через email</span>
              </Button>

              <footer>
                <p>
                  Уже есть аккаунт?
                  <span onClick={() => setSign(!sign)}> Войти</span>
                </p>
                <p>
                  Просим обеспечить конфиденциальность имени пользователя и
                  пароля! Продолжая, Вы принимаете условия и предложения
                  SnowFlake
                </p>
              </footer>
            </Row>
          </Modal>
          <SignUp
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            sign={sign}
            setSign={setSign}
            signUp={signUp}
            setSignUp={setSignUp}
          />
        </>
      ) : (
        <Modal
          className="sign"
          title="Войти в IT"
          visible={isModalOpen}
          onCancel={() => setIsModalOpen(!isModalOpen)}
          footer={null}
        >
          <Row justify="center">
            <p className="sign-in__description">
              Выберите удобный для Вас способ входа
            </p>
            <Button icon={<Image src={google} alt="google" />} block>
              <span className="centering">Продолжить с аккаунтом Google</span>
            </Button>
            <Button icon={<Image src={gitHub} alt="gitHub" />} block>
              <span className="centering">Продолжить с аккаунтом GitHub</span>
            </Button>
            <Button icon={<Image src={mail} alt="mail" />} block>
              <span className="centering">Вход через email</span>
            </Button>

            <footer>
              <p>
                Нету аккаунта?
                <span onClick={() => setSign(!sign)}> Зарегестрироваться</span>
              </p>
              <p>
                Просим обеспечить конфиденциальность имени пользователя и
                пароля! Продолжая, Вы принимаете условия и предложения SnowFlake
              </p>
            </footer>
          </Row>
        </Modal>
      )}
    </>
  );
};

export default Sign;
