import { productCard } from "@/constants/productCard";
import React from "react";
import s from "./product.module.scss";
import Image from "next/image";

const product = () => {
  return (
    <>
        <div className={s.product}>
          <div className={s.product_logo}>
            <h3>FortyLines IO</h3>
            <p>Стань частью команды мечты</p>
          </div>
          <div className={s.product_field}>
            <div className={s.product_field_desc}>
              <h4>
                Fortylines IO is a young modern team of professionals with experience in creating
                successful IT solutions. We are a software development company that provides
                innovative solutions tailored to the client’s business needs. Our delivery centers
                are located out of the Kyrgyz Republic and Germany
              </h4>
            </div>
            <div className={s.product_field_news}>
              <div className={s.product_field_news_title}>
                <h3>Последние новости</h3>
                <a>
                  Смотреть все
                  <Image src="/arrow.svg" height={12} width={12} alt="arrow" />
                </a>
              </div>
              <div className={s.product_field_news_cards}>
                {productCard.map((item) => (
                  <div key={item.id} className={s.product_field_news_card}>
                    <Image src={item.img} height={90} width={126} alt="newsImage" />
                    <div className={s.field_news_card_elements}>
                      <h4>{item.title}</h4>
                      <div className={s.news_card_elements_information}>
                        <div className={s.card_elements_information_general}>
                          <Image src={item.textImg} height={20} width={16} alt="newsCardElements" />
                          <p>{item.text}</p>
                          <button>
                            <Image src={item.shareImg} height={20} width={16} alt="newsCardElements" />
                          </button>
                          <button>
                            <Image src={item.saveImg} height={20} width={16} alt="newsCardElements" />
                          </button>
                          <p>{item.date}</p>
                          <button>
                            <Image src={item.fixImg} height={20} width={16} alt="newsCardElements" />
                          </button>
                        </div>
                        <div className={s.card_elements_information_second}>
                        <Image src={item.viewedImg} height={20} width={16} alt="newsCardElements" />
                        <p>{item.viewed}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={s.product_field_news_title}>
                <h3>Вакансии от Fortylines</h3>
                <a>
                  Смотреть все
                  <Image src="/arrow.svg" height={12} width={12} alt="arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default product;
