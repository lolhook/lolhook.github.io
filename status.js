var status_url = "https://raw.githubusercontent.com/lolhook/lolhook.github.io/main/status.json";
var status_emoji = {0:"🟢", 1:"🟡", 2:"🔴", 3:"🟠",4:"⚪"};


fetch(status_url).then(res => res.json().then(result => {
    console.log(result);
    for (var game in result) {
        console.log(game, result[game]);

        var title = document.createElement("p");
        title.innerHTML = game + " " + status_emoji[result[game].status];
        
        var br = document.createElement("br");

        var link = document.createElement("a");
        link.href = result[game].link;
        link.className = "game-link";
        link.innerHTML = result[game].link;

        var div = document.createElement("div");
        div.id = "seperate";

        var div2 = document.createElement("div");
        div2.id = "divider";

        var main = document.getElementById("main")

        main.appendChild(title);
        main.appendChild(br);
        main.appendChild(link);
        main.appendChild(div);
        main.appendChild(div2);
    };
}));
