import { render, screen, fireEvent } from "@testing-library/react";
import Slider from "./Slider";
const testIds = {
	prev: "prev",
	next: "next",
	container: "container",
	question: "question",
	answer: "answer",
	page: "page",
};
const questions = [
	{
		id: 1,
		question: "lorem 14",
		answer: "lorem 14",
	},
	{
		id: 2,
		question: "lorem 13",
		answer: "lorem 13",
	},
	{
		id: 3,
		question: "lorem 15",
		answer: "lorem 15",
	},
	{
		id: 4,
		question: "lorem 16",
		answer: "lorem 16",
	},
];

describe("Slider testing", () => {
	it("if question and answer is present", () => {
		render(<Slider questions={questions} length={questions.length} />);
		const question = screen.getByTestId(testIds.question);
		const answer = screen.getByTestId(testIds.answer);
		expect(Boolean(question.textContent)).toBe(true);
		expect(Boolean(answer.textContent)).toBe(true);
	});
	it("slider have next and prev button", () => {
		render(<Slider questions={questions} length={questions.length} />);
		const prev = screen.getByTestId(testIds.prev);
		const next = screen.getByTestId(testIds.next);

		expect(prev.tagName).toBe("BUTTON");
		expect(next.tagName).toBe("BUTTON");
		expect(prev.textContent).toBe("Prev");
		expect(next.textContent).toBe("Next");
	});
	it("next and prev button disabled", () => {
		render(<Slider questions={questions} length={questions.length} />);
		const prev = screen.getByTestId(testIds.prev);
		const next = screen.getByTestId(testIds.next);
		const page = screen.getByTestId(testIds.page);
		let value_1 = false;
		let value_2 = false;
		if (Number(page.textContent) === 1) {
			value_1 = true;
		}
		if (Number(page.textContent) === questions.length) {
			value_2 = true;
		}
		expect(prev.disabled).toBe(value_1);
		expect(next.disabled).toBe(value_2);
	});
	it("should change questions on clicking prev and next", () => {
		render(<Slider questions={questions} length={questions.length} />);
		const prev = screen.getByTestId(testIds.prev);
		const next = screen.getByTestId(testIds.next);
		const page = screen.getByTestId(testIds.page);
		const question = screen.getByTestId(testIds.question);
		fireEvent.click(prev);
		expect(question.textContent).toBe(
			questions[Number(page.textContent) - 1].question
		);
		fireEvent.click(next);
		expect(question.textContent).toBe(
			questions[Number(page.textContent) - 1].question
		);
			
		
		fireEvent.click(prev);
		expect(question.textContent).toBe(
			questions[Number(page.textContent) - 1].question
		);
	});
});
