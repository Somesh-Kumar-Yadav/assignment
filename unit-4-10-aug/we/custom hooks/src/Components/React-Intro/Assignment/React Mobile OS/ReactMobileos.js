import { MobileOS } from "./MobileOs";
import { MobileManufacters } from "./MobileManufactures";

function Mobile() {
	return (
		<div>
			<MobileManufacters />
			<MobileOS />
		</div>
	);
}

// Always use PascalCase for file and components and files names
export { Mobile };
