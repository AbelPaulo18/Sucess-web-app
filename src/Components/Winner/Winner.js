import React from "react";
import "./Winner.css";

function Winner({ names, imagePath, achievements }) {
	return (
		<button className="cardContainer">
			<div className="imageContainer">
				<img className="image" src={imagePath} alt="Empreendedor" />
			</div>
			<div className="text_row">
				<div>
					<span>{names}</span>

					<span>{achievements}</span>
				</div>
				<span className="icon"></span>
			</div>
		</button>
	);
}

export default Winner;
