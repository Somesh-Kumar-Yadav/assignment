import { Joinus } from "./Joinus";
import { Settings } from "./Settings";
import { Login } from "./Login";
import { Contactus } from "./Contactus";
import { Search } from "./Search";
import { Help } from "./Help";
import { Home } from "./Home";
import { Download } from "./Download";
import { Menu } from "./Menu";
import "./ReactMenu.css";
function ReactMenu() {
	const arr = [
		"JOIN US",
		"SETTINGS",
		"LOGIN",
		"CONTACT US",
		"SEARCH",
		"HELP",
		"HOME",
		"DOWNLOAD",
	];
	return (
		<div className="React">
			<h2>REACT MENU PART-I</h2>
			<Joinus />
			<Settings />
			<Login />
			<Contactus />
			<Search />
			<Help />
			<Home />
			<Download />
			<h2>REACT MENU PART-II</h2>
			{arr.map((el) => {
				return <Menu menu={el} />;
			})}
		</div>
	);
}
export { ReactMenu };
