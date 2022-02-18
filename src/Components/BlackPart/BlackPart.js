import React from "react";
import "./BlackPart.css";

import Winner from "../Winner/Winner";
import TitleDesc from "../titlesDescription";

import BabyImage from "../../Assets/Images/1.jpg";

function BlackPart() {
	const winners = [
		{
			coverImage: BabyImage,
			names: "John Doe",
			achievement: "CEO da LabCreative",
		},
		{
			coverImage: BabyImage,
			names: "John Doe",
			achievement: "CEO da LabCreative",
		},
		{
			coverImage: BabyImage,
			names: "John Doe",
			achievement: "CEO da LabCreative",
		},
		{
			coverImage: BabyImage,
			names: "John Doe",
			achievement: "CEO da LabCreative",
		},
		{
			coverImage: BabyImage,
			names: "John Doe",
			achievement: "CEO da LabCreative",
		},
		{
			coverImage: BabyImage,
			names: "John Doe",
			achievement: "CEO da LabCreative",
		},
	];

	return (
		<div className="main">
			<div className="bigBox">
				<TitleDesc
					description={"Nossos casos de Sucesso"}
					title={
						"Mais de 40 casos de estudo de empreendedores para você se inspirar e aprender"
					}
				/>

				<section className="winnersList">
					{winners.map((item, index) => {
						return (
							<Winner
								key={index}
								names={item.names}
								achievements={item.achievement}
								imagePath={item.coverImage}
							/>
						);
					})}
				</section>
			</div>

			{/* Separator */}
			<div className="divider" />

			<div className="bigBox">
				<TitleDesc
					description={"Nossas Séries"}
					title={"Séries Nacionais e Internacionais"}
				/>

				<section className="winnersList">
					{winners.map((item, index) => {
						return (
							<Winner
								key={index}
								names={item.names}
								achievements={item.achievement}
								imagePath={item.coverImage}
							/>
						);
					})}
				</section>
			</div>

			{/* Separator */}
			<div className="divider" />

			<div className="bigBox light">
				<TitleDesc
					description={"Depoimentos"}
					title={"O que nossos alunos estão comentando"}
					text={"Confira o LabCreative está mudando vidas!! "}
				/>

				<div className="postContainer">
					<div className="post up">
						<div className="dblQoutes">.</div>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
						odio. Ut cumque deserunt voluptates, animi sint earum recusandae
						corrupti, laudantium veniam tempora officiis nisi magnam minima
						rerum vitae vel facilis.
					</div>
					<div className="post down">
						<div className="dblQoutes">.</div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor et,
						in cupiditate nesciunt nobis cum perspiciatis iure. Distinctio
						suscipit sit, alias quas, eligendi quasi, amet sequi consequuntur
						architecto velit dolorem!
					</div>
				</div>
			</div>
		</div>
	);
}

export default BlackPart;
