import React from "react";
import "./css/main.css";
// import Button from "../Button/Button";
import Button from "../components/Button";
// import Card from "../Card/Card";
import Card from "../components/Card";
function Main() {
	const GreekSalad_discr =
		"The famous greek sald of crispy lettuce,peppers,olives,and our chicago style fata cgess, garnished with crunchy garlic and rosemary croutons.";
	const Bruchetta_discr =
		"Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.";
	const LemonDessert_discr =
		"This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imgagined.";

	return (
		<main>
			<div className='main-container-width'>
				<div className='main-title-section'>
					<h1 className='main-title'>This weeks specials!</h1>
					<Button text='Online Menu' />
				</div>
				<div className='cards-container'>
					<Card
						// image={require("../../Assets/greek salad.jpg")}
						image={require("../assets/icons_assets/greek salad.jpg")}
						name='Greek Salad'
						price={12.99}
						description={GreekSalad_discr}
					/>
					<Card
						// image={require("../../Assets/Bruchetta.jpg")}
						image={require("../assets/icons_assets/bruchetta.svg")}
						name='Bruchetta'
						price={6.89}
						description={Bruchetta_discr}
					/>
					<Card
						// image={require("../../Assets/lemon dessert.jpg")}
						image={require("../assets/icons_assets/lemon dessert.jpg")}
						name='Lemon Dessert'
						price={5.0}
						description={LemonDessert_discr}
					/>
				</div>
			</div>
		</main>
	);
}

export default Main;
