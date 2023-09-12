var status_url = "https://raw.githubusercontent.com/lolhook/lolhook.xyz/main/status.json";
var status_emoji = {0:"🟢", 1:"🟡", 2:"🔴", 3:"🟠",4:"⚪"};
fetch(status_url).then(res => res.json().then(result => {
    console.log(result);
    for (var game in result) {
        var object = document.getElementById(game);
        object.innerHTML += (" " + status_emoji[result[game]]);
    };
}));
