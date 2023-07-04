import React, { useState } from "react";
import s from "./Header.module.scss";
import Image from "next/image";
import { SearchOutlined, PlusSquareOutlined } from "@ant-design/icons";
import SignIn from "../Sign/Sign";
import { useRouter } from "next/router";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sign, setSign] = useState(false);
  const router = useRouter()

  return (
    <div className={s.header}>
      <div className={s.header_logo} onClick={() => router.push('/')}>
        <Image src="/snowflakeLogo.svg" width={41} height={42} alt="snowflakeLogo" />
        <h3>Snowflake</h3>
      </div>
      <div className={s.header_field}>
        <div className={s.header_field_input}>
          <SearchOutlined />
          <input type="text" placeholder="поиск по порталу" />
        </div>
        <div className={s.header_field_btns}>
          <div className={s.header_field_btn_post}>
            <button>
              <PlusSquareOutlined />
              Опубликовать
            </button>
          </div>
          <button>ru</button>
          <button>
            <Image src="/headerPhone.svg" width={24} height={24} alt="headerPhone" />
          </button>
          <button>
            <Image src="/loginHeader.svg" width={28}
              onClick={() => {
                setIsModalOpen(!isModalOpen), setSign(false);
              }}
              height={28} alt="loginHeader" />
          </button>
          <SignIn
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            sign={sign}
            setSign={setSign}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
