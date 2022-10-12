import './App.scss';
import { Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Inventory from './components/Inventory';


function App() {
  return (
    <div>
		<Routes>
			<Route
			path="/"
			element={
				<LandingPage />
				}
			/>
			<Route
			path="/Inventory"
			element={
				<Inventory />
			}
			/>
			<Route/>
		</Routes>
    </div>
  );
}

export default App;
