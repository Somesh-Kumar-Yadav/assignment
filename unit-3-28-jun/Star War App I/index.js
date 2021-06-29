let movies_div = document.getElementById("movies");
var timer_id;
async function searchMovies() {
  let name = document.getElementById("query").value;
  try {
    let res = await fetch(`https://swapi.dev/api/people/?search=${name}`);
    let data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

let appendMovies = (movies) => {
  movies_div.innerHTML = null;
  movies.forEach(({ name, gender, birth_year }) => {
    let div = document.createElement("div");
    div.setAttribute("class", "starwars");
    let p = document.createElement("h4");
    let pa = document.createElement("p");
    let pat = document.createElement("p");
    p.innerText = name;
    pa.innerText = gender;
    pat.innerText = birth_year;
    div.append(p, pat, pa);
    movies_div.appendChild(div);
  });
};
async function main() {
  let { results: data } = await searchMovies();
  console.log(data);
  appendMovies(data);
}
let throttlefunction = (func, delay) => {
  if (timer_id) {
    return;
  }
  timer_id = setTimeout(() => {
    func();
    timer_id = undefined;
  }, delay);
};
