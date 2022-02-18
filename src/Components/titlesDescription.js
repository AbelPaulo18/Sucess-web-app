import React from "react";

function TitlesDescription({ description, title, n, text }) {
	return (
		<div style={{ ...n }} className="textContainer">
			<div className="Pdesc">
				<p>{description}</p>
				<div className="hr"> </div>
			</div>

			<div className="title2">{title}</div>
			<div className="lilP">{text}</div>
		</div>
	);
}

export default TitlesDescription;
