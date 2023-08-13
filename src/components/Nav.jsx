import React, { useEffect, useRef, useState } from "react";
import littlelemon_logo from "../images/littlelemon_logo.png";
import { Link } from "react-router-dom";

const navlinks = [
	{
		id: 1,
		link: "/",
		text: "Home",
	},
	{
		id: 2,
		link: "/about",
		text: "About",
	},
	{
		id: 3,
		link: "/menu",
		text: "Menu",
	},
	{
		id: 4,
		link: "/booking",
		text: "Reservation",
	},
	{
		id: 5,
		link: "/order",
		text: "Order Online",
	},
	{
		id: 6,
		link: "/login",
		text: "Login",
	},
];

const Nav = () => {
	const [prevScrollY, setPrevScrollY] = useState(0);
	const navRef = useRef(null);
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const headerElement = navRef.current;
			if (headerElement) {
				if (currentScrollY > prevScrollY) {
					headerElement.style.transform = "translateY(-200px)";
				} else {
					headerElement.style.transform = "translateY(0)";
				}

				setPrevScrollY(currentScrollY);
			}
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [prevScrollY]);

	return (
		<nav
			ref={navRef}
			style={{
				transitionProperty: "transform",
				transitionDuration: "2s",
				transitionTimingFunction: "ease-in-out",
			}}>
			<img src={littlelemon_logo} alt='Little Lemon Logo'></img>
			<ul>
				{navlinks.map((link) => {
					return (
						<li key={link.id}>
							<Link to={link.link}>{link.text}</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Nav;
