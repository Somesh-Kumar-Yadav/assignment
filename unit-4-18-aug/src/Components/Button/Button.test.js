import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import renderer from "react-test-renderer";
const testIds = {
	button: "btn",
};

describe("Button testing", () => {
	test("button should render", () => {
		const text = "Click Me";
		render(<Button label={text} />);
		const btn = screen.getByText(text);
		expect(btn).toBeInTheDocument();
	});
	test("button should render with correct label", () => {
		const text = "Click Me";
		render(<Button label={text} />);
		const btn = screen.getByTestId("btn");
		expect(btn.textContent).toBe(text);
	});
	it("Should invoke a function when you click on it", () => {
		const fn = jest.fn();
		const text = "Click Me";
		render(<Button label={text} onClick={fn} />);
		const btn = screen.getByTestId(testIds.button);
		fireEvent.click(btn);

		expect(fn).toHaveBeenCalled();
		expect(fn).toHaveBeenCalledTimes(1);
		fireEvent.click(btn);
		fireEvent.click(btn);
		fireEvent.click(btn);
		expect(fn).toHaveBeenCalledTimes(4);
	});
	it("Should matchthe snapshot", () => {
		const tree = renderer.create(
			<Button data-testid="btn" onClick={() => {}} label="Button" />
		);
		expect(tree).toMatchSnapshot();
	});
});
