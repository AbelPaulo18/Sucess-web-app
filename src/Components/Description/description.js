import React from "react";
import "./Desc.css";

function Description() {
	return (
		<div className="descContainer">
			<div className="textDescription">
				<div className="descP">
					A Plataforma
					<span className="hr"> </span>
				</div>

				<div className="title">Como você vai aprender</div>
				<div className="txt">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla saepe
					eveniet tempore quidem ex distinctio dolorum, dolore reiciendis,
					necessitatibus quasi laborum dolorem minus vitae.
				</div>
			</div>

			<div className="imagesBox">
				<div className="box">s</div>
				<div className="verticalLine">
					<div className="circle">1</div>
				</div>
				<div className="box">
					Escolha um dos estudos de casos dos maiores empreendedores do país
				</div>
			</div>

			<div className="imagesBox">
				<div className="box ">
					Assista aos episódios e do documentário e conheça a trajetória de cada
					empreendedor
				</div>
				<div className="verticalLine">
					<div className="circle">2</div>
				</div>
				<div className="box">s</div>
			</div>
		</div>
	);
}

export default Description;
