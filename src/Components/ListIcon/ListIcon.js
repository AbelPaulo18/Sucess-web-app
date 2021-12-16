import React from "react";
import "./ListIcon.css";

function ListIcon() {
	const featuresList = [
		{
			imageLink:
				"https://meusucesso.com/wp-content/themes/salient-child/images/home/diferenciais/group.svg",
			text: "Mais de 40 Estudos de Caso de Empreendedores",
		},
		{
			imageLink:
				"https://meusucesso.com/wp-content/themes/salient-child/images/home/diferenciais/globe.svg",
			text: "Séries nacionais e internacionais",
		},
		{
			imageLink:
				"https://meusucesso.com/wp-content/themes/salient-child/images/home/diferenciais/movie.svg",
			text: "Documentários cinematográficos ",
		},
		{
			imageLink:
				"https://meusucesso.com/wp-content/themes/salient-child/images/home/diferenciais/files.svg",
			text: "Materiais complementares",
		},
		{
			imageLink:
				"https://meusucesso.com/wp-content/themes/salient-child/images/home/diferenciais/chart.svg",
			text: "Aulas 100% online com empreendedores e especialistas",
		},
		{
			imageLink:
				"https://meusucesso.com/wp-content/themes/salient-child/images/home/diferenciais/time.svg",
			text: "Mais de 500 horas de conteúdo",
		},
	];

	return (
		<div className="listIconBody">
			{featuresList.map((item) => {
				return (
					<div className="features_list">
						<div className="feature_icon">
							<img className="feature_icons" src={item.imageLink} alt="" />
						</div>
						<h2 className="feature_txt">{item.text}</h2>
					</div>
				);
			})}
		</div>
	);
}

export default ListIcon;
