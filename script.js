const kelvinEl = document.querySelector("#kelvin");
const celsiusEl = document.querySelector("#celsius");
const fahrenheitEl = document.querySelector("#fahrenheit");
function kelvinConverter(kelvin) {
	celsiusEl.value = (kelvin - 273.1).toFixed(1);
	fahrenheitEl.value = ((kelvin * (9 / 5)) - 459.67).toFixed(1);
	transferBackground((kelvin - 273.1).toFixed(0));
}
function celsiusConverter(celsius) {
	kelvinEl.value = (celsius + 273.1).toFixed(1);
	fahrenheitEl.value = ((celsius * 1.8) + 32).toFixed(1);
	transferBackground(celsius.toFixed(0));
}
function fahrenheitConverter(fahrenheit) {
	kelvinEl.value = ((fahrenheit + 459.67) * (5 / 9)).toFixed(1);
	celsiusEl.value = ((fahrenheit - 32) * (5 / 9)).toFixed(1);
	transferBackground(((fahrenheit - 32) * (5 / 9)).toFixed(0));
}

function transferBackground(celsius) {
	if (celsius <= 0) {
		document.body.style.background = "#65aef6";
	} else if (celsius > 0 && celsius <= 100) {
		document.body.style.background = "#bff161";
	} else {
		document.body.style.background = "#f32b4c";
	}
	// celsius <= 0 ? document.body.style.background = "#65aef6" : (celsius > 0 && celsius <= 100) ? document.body.style.background = "#bff161" : document.body.style.background = "#f32b4c"
}