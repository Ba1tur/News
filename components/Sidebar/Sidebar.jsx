import React, { useEffect, useState } from 'react';
import s from './Sidebar.module.scss'
import Image from 'next/image';
import { sideBarBase } from '@/constants/sideBarBase';
import { useRouter } from 'next/router';

const Sidebar = () => {

	const { pathname } = useRouter();

	return (
		<div className='container'>
			<aside  className={s.sidebar_section}>
				{sideBarBase.map((item) => (
					<div className={pathname === '/' ? s.sidebar_section__block_active : s.sidebar_section__block} key={item.id}>
						<Image src={item.img} alt='study.svg' width={30} height={30} />
						<h4>{item.title}</h4>
					</div>
				))}
			</aside>
		</div>
			
	);
};

export default Sidebar;