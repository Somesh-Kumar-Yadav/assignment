import "./App.css";
import { ReactStyledComponents } from "./components/ReactStyledComponents/ReactStyledComponents";
import { ReactCustom } from "./components/ReactCustom/ReactCustom";
import { ReactSidebar } from "./components/ReactSidebar/ReactSidebar";
function App() {
	return (
		<div className="App">
			{/* <ReactStyledComponents /> */}
			{/* <ReactCustom /> */}
			<ReactSidebar />
		</div>
	);
}

export default App;
