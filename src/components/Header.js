import React from "react";
import "../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";

function Header() {
	return (
		<header className="header">
			{/* Logo */}
			<div className="header__logoContainer">
				<img
					className="header__logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt="Amazon logo"
				/>
			</div>

			{/* First Nav */}
			<nav className="header__nav">
				<div className="header__optionPin">
					<RoomOutlinedIcon fontSize="small" />
				</div>
				<div className="header__option header__optionLocation">
					<span className="header__optionLineOne">Hello</span>
					<span className="header__optionLineTwo">Select your address</span>
				</div>
				{/* Search */}
				<div className="header__search">
					<input type="text" className="header__searchInput" />
					<SearchIcon
						className="header__searchIcon"
						style={{ fontSize: "22px" }}
					/>
				</div>
				<div className="header__option">
					<span className="header__optionLineOne">Hello, guest</span>
					<span className="header__optionLineTwo">Sign in</span>
				</div>
				<div className="header__option">
					<span className="header__optionLineOne">Returns</span>
					<span className="header__optionLineTwo">& Orders</span>
				</div>
				<div className="header__option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>
				<div className="header__optionBasket">
					<ShoppingBasketIcon />
					<span className="header__optionLineTwo header__basketCount">0</span>
				</div>
			</nav>
		</header>
	);
}

export default Header;
