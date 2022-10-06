import './App.scss';
import { Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';


function App() {
  return (
    <div className='wrapper'>
		<Routes>
			<Route
			path="/"
			element={
				<LandingPage />
				}
			/>
			<Route/>
			<Route/>
		</Routes>
    </div>
  );
}

export default App;
