async function show(input) {
	console.log(input);
	let res = await fetch(
		`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
	);
	let data = await res.json();
	append(data.meals);
	console.log(data);
}
let parent = document.getElementById("container");
function append(d) {
	parent.innerHTML = "";
	console.log(d);
	d.forEach((el) => {
		let div = document.createElement("div");
		let name = document.createElement("h1");
		name.innerText = `${el.strMeal}`;
		let img = document.createElement("img");
		img.src = el.strMealThumb;
		let category = document.createElement("p");
		category.innerText = `Category : ${el.strCategory}`;
		let area = document.createElement("p");
		area.innerText = `Country of origin : ${el.strArea}`;
		div.append(img, name, category, area);
		parent.append(div);
	});
}
function get(event) {
	let input = document.getElementById("name").value;
	if (event.key === "Enter") {
		show(input);
	}
}
