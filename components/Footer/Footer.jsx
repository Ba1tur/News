import React from 'react';
import s from './Footer.module.scss'
import Image from 'next/image';

const Footer = () => {
	return (
		<footer className={s.footer} >
			<div className={s.footer__top_block}>
				<div className={s.footer__top_block__logo_block}>
					<div className={s.footer__top_block__logo_block__header}>
						<Image src='/snowflake.svg' width={41} height={42} />
						<h6>Snowflake</h6>
					</div>
					<p>SNOWFLAKE © 2023. Все права защищены <br />
						Компания по разработке сайтов</p>
				</div>
				<div className={s.footer__top_block__about}>
					<div className={s.footer__top_block__about__title_block}>
						<h2>О нас</h2>
						<p>Команда</p>
						<p>Блог руководителя</p>
						<p>Контакты</p>
					</div>
					<div className={s.footer__top_block__about__title_block}>
						<h2>В сотруднечестве с:</h2>
						<p>Ilgiz Hwan - middle react</p>
						<p>Kurmanbek</p>
						<p>Правовая основа</p>
						<p>Закупки</p>
						<p>IT-инициативы</p>
					</div>
				</div>
			</div>
			<div className={s.footer__bottom_block}>
				<div className={s.footer__bottom_block__icons}>
					<Image src='/telegram.svg' alt='frame.svg' width={41} height={40} />
					<Image src='/instagram.svg' alt='frame.svg' width={41} height={40} />
					<Image src='/facebook.svg' alt='frame.svg' width={41} height={40} />
					<Image src='/youtube.svg' alt='frame.svg' width={41} height={40} />
				</div>
				<div className={s.footer__bottom_block__text_block}>
					<a href="#">Политика конфиденциальности</a>
					<a href="#">Пользовательское соглашение</a>
					<button>Дополнительно</button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;