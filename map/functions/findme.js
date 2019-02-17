
function findme()
{
	clean();
    responsiveVoice.speak(dialogue[16])
	map.locate({setView: true, maxZoom: 16});
	map.on('locationfound', onLocationFound);
	map.on('locationerror', onLocationError);

}	
function onLocationFound(e) {
	var marks=new Array();
    var radius = e.accuracy / 2;
    responsiveVoice.speak(dialogue[21])
    marker=L.marker(e.latlng)
    .bindPopup("You are within " + radius + " meters from this point!").openPopup();
    marks.push(marker);
    mylocation=L.layerGroup(marks);
    map.addLayer(mylocation);
    marker.on('click',function(){
        responsiveVoice.speak(dialogue[13])
    })

    circle=new L.circle(e.latlng, radius).bindPopup("You're somewhere within this circle!!");
    map.addLayer(circle);
    circle.on('click',function(){responsiveVoice.speak(dialogue[13]);})
}


function onLocationError(e) {
    sidebar.setContent(dialogue[20]+e.message);
    responsiveVoice.speak(e.message)
    sidebar.show();
}

