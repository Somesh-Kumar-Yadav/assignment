let container = document.getElementById("container");
async function getData() {
	let search = document.getElementById("search").value;
	try {
		let res = await fetch(
			`http://api.serpstack.com/search?access_key=4aa6b2bc536c470bb50bb01c27e64edd&query=${search}`
		);
		let data = await res.json();
		let { organic_results } = data;
		console.log(organic_results);
		appendData(organic_results);
	} catch (e) {
		console.log(e);
	}
}
function appendData(items) {
	container.innerHTML = null;
	items.forEach(({ title, url, displayed_url }) => {
		let div = document.createElement("div");
		div.class = "Bx";
		div.innerHTML = `<a href=${url}><p>${displayed_url}</p></a><br>
        <h1>${title}</h1>`;
		container.append(div);
	});
}
function get(event) {
	if (event.key === "Enter") {
		getData();
	}
}
