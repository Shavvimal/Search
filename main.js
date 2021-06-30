const btn = document.querySelector("button");
btn.addEventListener("click", results);

let newsearch;
const list = document.querySelector(".myheadhurts");
let main = document.querySelector("main");
let section = document.querySelector("section");
let img = document.querySelector(".google");
let searchBox = document.querySelector(".searchBox");
let searchBtn = document.querySelector(".searchBtn");

async function results() {
  let search = await fetch("http://localhost:3000");
  newsearch = await search.json();
  addContent(newsearch);
}

function addContent(newsearch) {
  newsearch.forEach((el) => {
    let itemH = document.createElement("a");
    itemH.className = "header";
    itemH.textContent = el.header;
    itemH.setAttribute(
      "href",
      "https://www.fun-stuff-to-do.com/good-pranks.html"
    );
    list.appendChild(itemH);
    let itemT = document.createElement("p");
    itemT.className = "text";
    itemT.textContent = el.text;
    list.appendChild(itemT);
    section.className = "newsection";
    main.className = "newmain";
    img.style.width = "100px";
    img.style.height = "auto";
    img.style.marginRight = "50px";
    searchBox.style.marginTop = "0";
    searchBox.style.width = "60%";
    searchBtn.remove();
    document.querySelector("button").style.margin = "0 30px";
  });
}
