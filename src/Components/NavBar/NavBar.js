import React from 'react';
import { AppBar, Container, Toolbar } from '@mui/material';
import MenuGenders from '../MenuGenders/MenuGenders';
import { Link } from 'react-router-dom';
import './NavBar.css';

//import { ItemsContext } from '../../Context/ItemContext';

const styles = {
	linkButton: {
		textDecoration: 'none',
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
	},
	purchaseButton: {
		color: 'grey',
		fontSize: 18,
		fontWeight: 'bold',
	},
};

const NavBar = () => {
	//const [items] = useContext(ItemsContext);

	return (
		<AppBar position='static' className='ResponsiveNavigation'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters className='ResponsiveNavigationContainer'>
					<Link to='/' style={styles.linkButton}>
						Coins
					</Link>
					<MenuGenders />
					<Link to='/about' style={styles.linkButton}>
						About
					</Link>
					<Link to='/contact' style={styles.linkButton}>
						Contact
					</Link>
					<Link to='/trade' style={styles.linkButton}>
						<i className='fa-solid fa-cart-shopping'></i>
						
					</Link>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default NavBar;
