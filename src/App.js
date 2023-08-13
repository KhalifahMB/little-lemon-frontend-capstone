import React, { useReducer } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Booking from "./components/Booking";
import ConfirmedBooking from "./components/ConfirmedBooking";
import Wrapper from "./pages/Wrapper";

function App() {
	const seededRandom = function (seed) {
		var m = 2 ** 35 - 31;
		var a = 185852;
		var s = seed % m;
		return function () {
			return (s = (s * a) % m) / m;
		};
	};

	const fetchAPI = function (date) {
		let result = [];
		let random = seededRandom(date.getDate());

		for (let i = 17; i <= 23; i++) {
			if (random() < 0.5) {
				result.push(i + ":00");
			}
			if (random() < 0.5) {
				result.push(i + ":30");
			}
		}
		return result;
	};

	const initialState = { availableTimes: fetchAPI(new Date()) };
	const [state, dispatch] = useReducer(updateTimes, initialState);

	function updateTimes(state, date) {
		return { availableTimes: fetchAPI(new Date(date)) };
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Wrapper />}>
					<Route path='/' element={<Landing />} />
					<Route
						path='/booking'
						element={
							<Booking
								availableTimes={state}
								dispatch={dispatch}
								// submitForm={submitForm}
							/>
						}
					/>
					<Route path='/confirmed' element={<ConfirmedBooking />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
