describe("sample test", () => {
	const text = "LEARN CYPRESS VI";

	beforeEach(() => {
		cy.intercept("GET", "/tasks", (req) => {
			req.reply({
				statusCode: 200,
				fixture: "tasks.json",
			});
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
				id: 6,
			},
		});
		cy.get(".task-input").type(text).type("{enter}").should("have.value", "");
		cy.get(".task-list li").should("have.length", 6);
	});
	it("error handle", () => {
		cy.intercept("POST", "/tasks", {
			statusCode: 500,
			body: {
				title: text,
				status: false,
				id: 6,
			},
		});
		cy.get(".task-input").type(text).type("{enter}").should("have.value", "");
		cy.get(".error").contains("Something Went Wrong");
	});
	it("toggle a todo", () => {
		cy.get(".task-list li").find("input");
		cy.intercept("PATCH", "/tasks/1", {
			statusCode: 201,
			body: {
				status: true,
			},
		});
		cy.get(".task-list li").first().as("first-todo");
		cy.get(".task-list li").last().as("last-todo");
		cy.get("@first-todo").find("input").click().should("be.checked");
		cy.get("@first-todo").should("have.class", "success");
		cy.get("@last-todo").should("have.class", "failure");
	});
	it("deleting a todo", () => {
		cy.get(".task-list li").find("button").contains("Delete");
		cy.get(".task-list li").should("have.length", 5);
		cy.intercept("DELETE", "/tasks/5");
		cy.get(".task-list li").last().as("last-todo");
		cy.get("@last-todo").find("button").click();
		cy.get(".task-list li").should("have.length", 4);
	});
});
