import React from "react";
import "./Header.css";

function HeaderBar() {
	return (
		<header className="container">
			<div className="CompanyName">
				<h1>Sucesso.com</h1>
			</div>
			<div className="login-area">
				<button className="loginBtn">Login</button>
			</div>
		</header>
	);
}

export default HeaderBar;
