import "./App.css";
import { ReactStyledComponents } from "./components/ReactStyledComponents/ReactStyledComponents";
import { ReactCustom } from "./components/ReactCustom/ReactCustom";
import { ReactSidebar } from "./components/ReactSidebar/ReactSidebar";
import { ReactCard } from "./components/ReactCard/ReactCard";
function App() {
	return (
		<div className="App">
			{/* <ReactStyledComponents /> */}
			{/* <ReactCustom /> */}
			{/* <ReactSidebar /> */}
			<ReactCard />
		</div>
	);
}

export default App;
