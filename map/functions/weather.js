function weather()
{
	responsiveVoice.speak(dialogue[15])
	var w="https://www.accuweather.com/en/in/panaji/188095/weather-forecast/188095";
	window.open(w, '_blank');
}