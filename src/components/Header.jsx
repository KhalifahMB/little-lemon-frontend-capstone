/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import headerPhoto from "../images/headerPhoto.jpg";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<header>
				<section className='topHeader'>
					<div>
						<h2>Little Lemon</h2>
						<h3>Chicago</h3>
						<p>
							We are a family owned Mediterraneran restaurant, focused on
							traditional recipes servred with a modern twist.
						</p>
						<Link to='/Booking'>
							<div className='borderBtn'>
								<button aria-label='On Click'>Reserve Table</button>
							</div>
						</Link>
					</div>
					<div>
						<img src={headerPhoto} />
					</div>
				</section>
			</header>
			<Menu />
		</div>
	);
};

export default Header;
