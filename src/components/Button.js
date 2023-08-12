import React from "react";
// import "./Button.css";
import "./css/button.css";
function Button(props) {
	return <button className='button'>{props.text}</button>;
}

export default Button;
