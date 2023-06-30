import { useState, useEffect } from "react";
import s from "./Header.module.scss";
import Image from "next/image";
import SignIn from "../Sign/Sign";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <div className={s.header}>
      <div className={s.header_all}>
        <div className={s.header_all_input}>
          <div className={s.header_all_input_field}>
            <Image src="/headerInput.svg" width={24} height={24} alt="headerInput" />
            <input type="text" placeholder="поиск по порталу" />
          </div>
        </div>
        <div className={s.header_all_btns}>
          <div className={s.header_all_btns_post}>
            <button>
              <Image src="/postBtn.svg" width={18} height={18} alt="postBtn" />
              Опубликовать
            </button>
          </div>
          <div className={s.header_all_btns_navigation}>
            <button>
              <Image src="/numberBtn.png" width={29} height={33} alt="numberBtn" />
            </button>
            <button>
              <Image src="/messageBtn.svg" width={45} height={46} alt="messageBtn" />
            </button>
            <button onClick={() => setIsModalOpen(!isModalOpen)}>
              <Image src="/loginBtn.svg" width={24} height={22} alt="messageBtn" />
              Войти
            </button>
          </div>
        </div>
      </div>
    </div>
    <SignIn isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </>
  );
};

export default Header;
