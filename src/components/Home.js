import React from "react";
import "../styles/Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt="Amazon banner"
				/>
				<div className="home__rowContainer">
					<div className="home__row">
						<Product title="The Lean Startup" price={19.99} />
						<Product title="The Lean Startup" price={19.99} />
					</div>
					<div className="home__row">
						<Product title="The Lean Startup" price={19.99} />
						<Product title="The Lean Startup" price={19.99} />
						<Product title="The Lean Startup" price={19.99} />
					</div>
					<div className="home__row">
						<Product title="The Lean Startup" price={19.99} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
