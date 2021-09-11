import React from "react";
import "../styles/Product.css";

function Product(props) {
	return (
		<div className="product">
			<div className="product__info">
				<p className="product__title">{props.title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{props.price}</strong>
				</p>

				{/* Rating */}
				<div className="product__rating">
					<p className="product__stars">⭐️</p>
				</div>

				{/* Image */}
				<img
					className="product__image"
					src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
					alt=""
				/>
				{/* Add button */}
				<div className="product__btnContainer">
					<button className="product__btn">Add to Basket</button>
				</div>
			</div>
		</div>
	);
}

export default Product;
