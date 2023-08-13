/* eslint-disable no-unused-vars */
import React, { useReducer, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking";
import Header from "./Header";

const Main = () => {
	return (
		<main>
			{/* <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/booking" element={<Booking  />
                <Route path="/confirmed" element={<ConfirmedBooking/> } />
            </Routes> */}
		</main>
	);
};

export default Main;
