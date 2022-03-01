import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

//import { Link } from 'react-router-dom';

import img from './criptoheader.png';

const Header = () => {
	return (
		<div className='header-container'>
			<Link to="/">
				<img src={img} alt='logo' width='500' />
			</Link>
		</div>
	);
};

export default Header;
