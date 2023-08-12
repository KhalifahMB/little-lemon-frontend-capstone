import React from "react";
// import PropTypes from "prop-types";

const Hoc = (WrappedComponent) => {
	const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

	hocComponent.propTypes = {};

	return hocComponent;
};

export default Hoc;
