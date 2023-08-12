import "./App.css";
import Landing from "./pages/Landing";
import Booking from "./pages/BookingForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/booking' element={<Booking />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
