import React, { useEffect, useState } from "react";

import Image from "next/image";
import { Button, Form, Input, Modal } from "antd";
import arrow from "../../public/arrow.svg";

const SignUp = ({
  isModalOpen,
  setIsModalOpen,
  sign,
  setSign,
  signUp,
  setSignUp,
}) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  // ---------------------------------------------------------------------------------------------------------------------------------
  // POST
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ ...form.getFieldsValue() });
  }, []);

  const handleSubmit = (value) => {
    setIsButtonClicked(true);
    console.log(value);
  };
  return (
    <Modal
      className="signUp"
      title="Регистрация"
      visible={signUp}
      onCancel={() => setSignUp(!signUp)}
      footer={null}
    >
      <div
        className="signUp__arrow"
        onClick={() => {
          setSignUp(!signUp), setIsModalOpen(!isModalOpen);
        }}
      >
        <Image src={arrow} alt="arrow" />
      </div>
      <Form form={form} name="sign-up-form" onFinish={handleSubmit}>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите ваше имя",
            },
          ]}
        >
          <Input placeholder={"Имя"} />
        </Form.Item>

        <Form.Item
          name="fullName"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите вашу фамилию",
            },
          ]}
        >
          <Input placeholder={"Фамилия"} />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите адрес электронной почты",
            },
            {
              type: isButtonClicked ? "email" : undefined,
              message:
                "Пожалуйста, введите действительный адрес электронной почты",
            },
          ]}
        >
          <Input placeholder={"Gmail"} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Пожалуйста введите ваш пароль",
            },
            {
              min: isButtonClicked ? 6 : undefined,
              message: "Пароль должен содержать не менее 6 знаков",
            },
          ]}
        >
          <Input.Password placeholder={"Пароль"} />
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Зарегистрироваться
        </Button>

        <Form.Item>
          <p>
            Уже есть аккаунт?
            <span
              onClick={() => {
                setSignUp(!signUp),
                  setIsModalOpen(!isModalOpen),
                  setSign(!sign);
              }}
            >
              Войти
            </span>
          </p>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SignUp;
