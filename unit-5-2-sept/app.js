const readline = require("readline");

const readLine1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const books = [];

function check() {
	readLine1.question(
		"Enter your option?\n1 - Show all books 2 - Add a new book 3 - Quit-\t",
		(num) => {
			switch (Number(num)) {
				case 1:
					books.map((book, index) => {
						console.log(`${index + 1}- ${book}`);
					});
					if (books.length === 0) {
						console.log("No book is present");
					}
					check();
					break;
				case 2:
					readLine1.question("Add the name of the book\n", (name) => {
						books.push(name);
						console.log("Book added successfully\n");
						check();
					});
					break;
				case 3:
					readLine1.question(
						"Are you sure you want to quit - press Y to quit \n",
						(res) => {
							if (res.toLowerCase() === "y") {
								readLine1.close();
							} else {
								check();
							}
						}
					);
					break;
				default:
					console.log(
						"You have selected an invalid entry so please press 1, 2 or 3\n"
					);
					check();
					break;
			}
		}
	);
}

check();

readLine1.on("close", () => {
	console.log("Bye Bye");
});
