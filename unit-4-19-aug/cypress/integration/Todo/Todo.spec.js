describe("sample test", () => {
	const text = "LEARN CYPRESS VI";
	const arr = [
		{
			id: 1,
			status: false,
			title: "LEARN CYPRESS I",
		},
		{
			id: 2,
			status: false,
			title: "LEARN CYPRESS II",
		},
		{
			id: 3,
			status: false,
			title: "LEARN CYPRESS III",
		},
		{
			id: 4,
			status: false,
			title: "LEARN CYPRESS IV",
		},
		{
			id: 5,
			status: false,
			title: "LEARN CYPRESS V",
		},
	];
	beforeEach(() => {
		cy.intercept("GET", "/tasks", {
			statusCode: 200,
			body: arr,
		});
		cy.visit("/");
	});
	it("visit home page", () => {
		cy.get("h1").should("have.text", "Tasks");
		cy.get(".task-input").should("have.attr", "placeholder", "Add something?");
		cy.focused().should("have.class", "task-input");
		cy.get(".task-list li").should("have.length", 5);
	});
	it("typing into the input box,should work correctly", () => {
		cy.get(".task-input").type(text).should("have.value", text);
	});
	it("after typing text , pressing enter , it should add an item", () => {
		cy.intercept("POST", "/tasks", {
			statusCode: 201,
			body: {
				title: text,
				status: false,
				id: 3,
			},
		});
		cy.get(".task-input").type(text).type("{enter}").should("have.value", "");
		cy.get(".task-list li").should("have.length", 6).contains(text);
	});
	it("error handle", () => {
		cy.intercept("POST", "/tasks", {
			statusCode: 500,
			body: {
				title: text,
				status: false,
				id: 4,
			},
		});
		cy.get(".task-input").type(text).type("{enter}").should("have.value", "");
		cy.get(".error").contains("Something Went Wrong");
	});
});
