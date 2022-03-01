import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Link } from 'react-router-dom';

const MenuGenders = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const styles = {
		popUpBtn: {
			textDecoration: 'none',
			color: 'white',
			fontSize: 18,
			fontWeight: 'bold',
			textTransform: 'lowercase',
		},
		upperText: {
			textTransform: 'uppercase',
		},
		link: {
			color: 'red',
			fontSize: 18,
			textDecoration: 'none',
		},
	};

	return (
		<div>
			<Button
				style={styles.popUpBtn}
				id='basic-button'
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				<span style={styles.upperText}>G</span>enders
			</Button>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem>
					<Link to='/gender/Top 3' style={styles.link}>
						Top 3
					</Link>
				</MenuItem>
				<MenuItem>
					<Link to='/gender/Mayor Volumen' style={styles.link}>
						Mayor Volumen
					</Link>
				</MenuItem>
				<MenuItem>
					<Link to='/gender/Nueva' style={styles.link}>
						Nueva
					</Link>
				</MenuItem>
				<MenuItem>
					<Link to='/gender/Clasica' style={styles.link}>
						Clasica
					</Link>
				</MenuItem>
				<MenuItem>
					<Link to='/gender/Menor Volumen' style={styles.link}>
						Menor Volumen
					</Link>
				</MenuItem>
			</Menu>
		</div>
	);
};

export default MenuGenders;
