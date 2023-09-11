const copyscript = document.getElementById("script");
const popup = document.getElementById("popup");

copyscript.addEventListener("click", () => {
const box = document.createElement("textarea");

box.value = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/lolhook/lolhook.xyz/main/src/loader.lua"))();';
document.body.appendChild(box);

box.select();

document.execCommand("copy");
document.body.removeChild(box);

popup.style.display = "block";
    setTimeout(() => {popup.style.display = "none";}, 1000);
});

const links = document.getElementsByClassName("game-link");

for (var i = 0; i < links.length; i++) {
    links[i].href = links[i].textContent;
};