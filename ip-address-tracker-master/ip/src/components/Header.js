import React from 'react';
import '../styles/header.css';
import patternImg from '../images/pattern-bg.png';
function Header() {
	return (
		<div className="header__container">
			<img className="home__image" src={patternImg} alt="pattern" />
			<h1>IP Address Tracker</h1>
		</div>
	);
}

export default Header;
