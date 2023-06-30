import React from "react";
import s from "./SignIn.module.scss";
import { Button, Modal } from "antd";

const SignIn = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      title="Регистрация"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(!isModalOpen)}
      footer={false}
    >
      <p>Выберите удобный для Вас способ регистрации</p>
      <Button onClick={() => handleClick("de")} icon={"🇩🇪"} block>
        Deutsch
      </Button>
    </Modal>
  );
};

export default SignIn;
