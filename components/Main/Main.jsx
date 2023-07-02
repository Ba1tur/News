import React, { useState } from 'react';
import s from './Main.module.scss'
import Image from 'next/image';
import { ShareAltOutlined } from '@ant-design/icons'
import { Button } from 'antd';
import { mainBase } from '@/constants/mainBase';

const Main = () => {
	const [cards, setCards] = useState(mainBase);
	return (
		<main className={s.main_section}>
			<div className={s.main_section__header}>
				<h1>Все курсы по рейтингу</h1>
				<div className={s.main_section__header__block}>
					<Image src='/select.svg' width={23} height={22} alt='select.svg' />
					<Image src='/calendar.svg' width={23} height={22} alt='calendar.svg' />
				</div>
			</div>
			{cards.map((card) => {
				return (
					<div className={s.main_section__card}>
						<div>
							<Image src={card.img} width={207} height={200} alt='main.png' />
						</div>
						<div className={s.main_section__card__content}>
							<h3>{card.name} </h3>
							<p>{card.date}</p>
							<div className={s.main_section__card__content__footer}>
								<div className={s.main_section__card__content__footer__icons}>
									<ShareAltOutlined style={{ fontSize: '25px', color: 'black' }} />
									<Image src='/favorite.svg' alt='favorite.svg' width={25} height={25} />
								</div>
								<Button type='primary'>Подробнее</Button>
							</div>
						</div>
						<div className={s.main_section__card__about_block}>
							<h5>{card.number}</h5>
							<p>{card.price}$</p>
							<div className={s.main_section__card__about_block__location}>
								<Image src='/offline.svg' alt='offline.svg' width={17} height={14} />
								<span>{card.type}</span>
							</div>
						</div>
					</div>
				)
			})}

		</main>
	);
};

export default Main;