async function show(parent, url) {
	let res = await fetch(url);
	let data = await res.json();
	append(parent, data.meals);
	console.log(parent, data);
}
function append(parent, d) {
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
export { show, append };
