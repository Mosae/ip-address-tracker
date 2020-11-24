import React from 'react';
import '../styles/header.css';
import patternImg from '../images/pattern-bg.png';
import SearchIcon from '@material-ui/icons/Search';
function Header() {
	return (
		<div className="header__container">
			<img className="home__image" src={patternImg} alt="pattern" />
			<div className="header__h1">
				<h1>IP Address Tracker</h1>
				<input className="header__searchInput" type="text" />

				<SearchIcon className="header__searchIcon" />
			</div>
		</div>
	);
}

export default Header;
