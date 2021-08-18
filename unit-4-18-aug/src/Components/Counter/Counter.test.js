import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";
const testIds = {
	heading: "counter_header",
	value: "counter_value",
	button: "btn",
};

describe("Counter testing", () => {
	it("should render when clicking", () => {
		render(<Counter />);
		const heading = screen.getByTestId(testIds.heading);
		const value = screen.getByTestId(testIds.value);

		expect(heading.textContent).toBe("Counter");
		expect(heading.tagName).toBe("H1");

		expect(value.textContent).toBe(`0`);
	});

	it("should have add and reduce buttons", () => {
		render(<Counter />);
		const [add, reduce] = screen.getAllByTestId(testIds.button);
		expect(add.textContent).toBe("ADD");
		expect(reduce.textContent).toBe("REDUCE");
	});

	it("should increase count and decrease count when clicking", () => {
		render(<Counter />);
		const value = screen.getByTestId(testIds.value);
		const [add, reduce] = screen.getAllByTestId(testIds.button);

		const tests = [
			{
				test: () => fireEvent.click(add),
				output: "1",
			},
			{
				test: () => fireEvent.click(reduce),
				output: "0",
			},
		];

		tests.map((item) => {
			item.test();
			return expect(value.textContent).toBe(item.output);
		});
	});
});
