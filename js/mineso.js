function body_onload() {
//System.Gadget.Flyout.document = "flyout.html";
System.Gadget.settingsUI = "settings.html";
refresh();
}

function refresh() {
	//System.Gadget.Flyout.show = true;
	var req = new XMLHttpRequest;
	var img = document.getElementsByTagName("img")[0];
	img.setAttribute("src", "img/load.jpg");
	var ip = System.Gadget.Settings.readString("ip");
	var port = System.Gadget.Settings.readString("port");
	if (ip == "" || port == "") {
		ip = "127.0.0.1";
		port = 25565;
	}
	req.open("POST", "http://mine/sb-status.php", true);
	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	//req.setRequestHeader("Accept-Charset", "windows-1251");
	req.send("ip=" + encodeURIComponent(ip) + "&port=" + port);
	//timeout
	var sto = setTimeout(function(){
		req.abort();
		clearTimeout(sto);
		clearInterval(sint);
		delete req;
	}, 5000);
	//state change listener
	var sint = setInterval(function(){
		if (req.readyState == 4 && req.status == 200) {
			clearInterval(sint);
			clearTimeout(sto);
			switch (req.responseText) {
				case "up":
					img.setAttribute("src", "img/up.jpg");
				break;
				case "down":
					img.setAttribute("src", "img/down.jpg");
				break;
				default:
					img.setAttribute("src", "img/err.jpg");
				break;
			}
			delete req;
		}
	} , 10);
}