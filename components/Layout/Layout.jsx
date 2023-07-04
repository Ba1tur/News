import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import SidebarProgram from '../SidebarProgram/SidebarProgram';

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Sidebar />
				{children}
				<SidebarProgram />
			</div>
			<Footer />
		</>
	);
};

export default Layout;