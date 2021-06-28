let container = document.getElementById("container");
async function getData() {
  let query = document.getElementById("search").value;
  try {
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=AIzaSyAYJQHN3RtXEY195wAWK7Za_WchsX2-MsI&maxResults=20`
    );
    let { items } = await res.json();
    // console.log(items);
    console.log(items);
    appendVideos(items);
  } catch (e) {
    console.log(e);
  }
}

async function getMovieData() {
  try {
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyAYJQHN3RtXEY195wAWK7Za_WchsX2-MsI&maxResults=20`
    );
    let { items } = await res.json();
    // console.log(items);
    console.log(items);
    appendVideosq(items);
  } catch (e) {
    console.log(e);
  }
}
function appendVideos(items) {
  container.innerHTML = null;
  items.forEach(({ id: { videoId } }) => {
    let div = document.createElement("div");
    div.class = "videoBx";
    div.innerHTML = `<iframe
      width="280"
      height="190"
      src="https://www.youtube.com/embed/${videoId}"
    ></iframe>`;
    container.append(div);
  });
}
function appendVideosq(items) {
  container.innerHTML = null;
  items.forEach(({ id }) => {
    let div = document.createElement("div");
    div.class = "videoBx";
    div.innerHTML = `<iframe
      width="280"
      height="190"
      src="https://www.youtube.com/embed/${id}"
    ></iframe>`;
    container.append(div);
  });
}
function get(event) {
  if (event.key === "Enter") {
    getData();
  }
}
getMovieData();
