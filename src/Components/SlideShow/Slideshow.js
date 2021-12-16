import React, { useState } from "react";
import "./SlideShow.css";

import Img1 from "../../Assets/Images/1.jpg";
import Img2 from "../../Assets/Images/2.jpg";
import Img3 from "../../Assets/Images/3.jpg";
import Img4 from "../../Assets/Images/4.jpg";

function Slideshow() {
	const users = [
		{
			backgroundImg: Img1,
			userName: "Abel Paulo Luzemba",
			userRole: "CEO da MoonWalkers",
			description:
				"Todo mundo devia perder pelo menos 30min por dia para adquirir uma habilidade e ser expert nela ",
			companyLogo: "",
		},

		{
			backgroundImg: Img2,
			userName: "Célio CSS",
			userRole: "CEO da Domingas Jaime",
			description: "Esse dread é apenas o bby do Miss Jaime ",
			companyLogo: "",
		},
		{
			backgroundImg: Img3,
			userName: "John Doe",
			userRole: "Back-end Developer ",
			description: "I'm getting rich just for doing something that i like",
			companyLogo: "",
		},
		{
			backgroundImg: Img4,
			userName: "Valério Emanuel",
			userRole: "Homem dos 10%",
			description: "Se desenvolveu algo na incubadora eu possuo 10%",
			companyLogo: "",
		},
	];

	const [carousel, setCarousel] = useState(0);

	const previousImg = () => {
		let n = carousel;
		if (carousel > 0) {
			setCarousel(carousel - 1);
		}
	};

	var sliderR = false;

	const nextImg = () => {
		let n = carousel;
		if (carousel < users.length - 1) {
			setCarousel(carousel + 1);
			sliderR = true;
		}
	};

	const rightSlide = {
		transform: "translate(" + 100 + "px," + 0 + "px)",
	};

	return (
		<div
			className="carouselBody"
			style={{ backgroundImage: `url(${users[carousel].backgroundImg})` }}
		>
			<button className="carouselBtns" onClick={previousImg}>
				Left
			</button>
			<div className="imageBackContent">
				<div className="content1">
					<h2 className="Citation">{users[carousel].description}</h2>
					<div className="paragraphBox">
						<p className="userName"> {users[carousel].userName} </p>
						<p className="userRole"> {users[carousel].userRole} </p>
					</div>
					<div className="CompanyLogo" style={{}}></div>
				</div>
				<div className="content2">
					<div>Some Advertisement from our webpage</div>
					<button className="AdBtn">Experimente Grátis por 7 dias</button>
				</div>
			</div>
			<button className="carouselBtns" onClick={nextImg}>
				right
			</button>
		</div>
	);
}

export default Slideshow;
