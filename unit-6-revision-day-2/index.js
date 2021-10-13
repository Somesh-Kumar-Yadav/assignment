let section = document.getElementsByClassName("section")[0];
let content = 1;
async function getData() {
	for (let i = 0; i < 25; i++) {
		if (content <= 200) appendData(content);
		content += 1;
	}
}
getData();
function appendData(i, el) {
	let card = document.createElement("p");
	card.innerHTML = `MASAI SCHOOL ${i}`;
	section.appendChild(card);
}
window.addEventListener(
	"scroll",
	() => {
		const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

		if (scrollTop + clientHeight >= scrollHeight - 5) {
			getData();
		}
	},
	{
		passive: true,
	}
);
