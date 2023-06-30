import React, { useState } from "react";

import { Button, Modal, Row } from "antd";
import google from "../../public/google.svg";
import gitHub from "../../public/gitHub.svg";
import mail from "../../public/mail.svg";
import Image from "next/image";

const Sign = ({ isModalOpen, setIsModalOpen }) => {
  const [sign, setSign] = useState(false);
  return (
    <>
      {sign ? (
        <Modal
          title="Регистрация"
          open={isModalOpen}
          onCancel={() => setIsModalOpen(!isModalOpen)}
          footer={false}
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
            <Button icon={<Image src={mail} alt="mail" />} block>
              <span className="centering">Регистрация через email</span>
            </Button>

            <footer>
              <p className="">
                Уже есть аккаунт? <span onClick={() => setSign(!sign)}>Войти</span>
              </p>
              <p>
                Просим обеспечить конфиденциальность имени пользователя и
                пароля! Продолжая, Вы принимаете условия и предложения SnowFlake
              </p>
            </footer>
          </Row>
        </Modal>
      ) : (
        <Modal
          title="Войти в IT"
          open={isModalOpen}
          onCancel={() => setIsModalOpen(!isModalOpen)}
          footer={false}
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
              <p className="">
                Нету аккаунта? <span onClick={() => setSign(!sign)}>Зарегестрироваться</span>
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
