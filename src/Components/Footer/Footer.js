import React from "react";
import "./Footer.css";

function Footer() {
	return (
		<div className="footerContainer">
			<div className="s">Uma escola de Empreendedores para Empreendedores</div>

			<div className="imageBox">.</div>

			<div className="footer">
				<div className="cont">&crCopyRight.2022 powered by labcreative.com</div>
				<div className="contL">
					<a href="" className="footerLinks">
						Veja mais conteúdo{" "}
					</a>
					<a href="" className="footerLinks">
						Termos de Uso
					</a>
					<a href="" className="footerLinks">
						Política de Privacidade
					</a>
					<div className="footerLinks">
						<a href="" className=""></a>
						<a href="" className=""></a>
					</div>
				</div>
				<div className="cont">.</div>
			</div>
		</div>
	);
}

export default Footer;
