function openCity(evt, cityName) {
	var i, tabcontent, tablinks;

	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}

function myFunction() {
	var input, filter, tab, button, a, i;
	input = document.getElementById("mySearch");
	filter = input.value.toUpperCase();
	tab = document.querySelector(".tab");
	li = tab.getElementsByTagName("li");
	for (i = 0; i < li.length; i++) {
		button = li[i].getElementsByTagName("button")[0];
		if (button.innerHTML.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}
