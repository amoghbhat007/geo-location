

function addMarker()
{
	clean();

	if(map.hasLayer(nmarker)||check==1)
	{
  		map.removeLayer(nmarker);
		check=0;
    	toggle();
	}
	else
	{
	map.locate({setView: true, maxZoom: 10});
	map.on('locationfound', showNearby);
	map.on('locationerror', onLocationError);
	check=1;	
	}	
}



function showNearby(e)
{
	clean(); 
	
	
    responsiveVoice.speak(dialogue[2]);
   
	var pulsingIcon = L.icon.pulse({iconSize:[20,20],color: '#61C6D5', fillColor: '#FA4C4C'});
	sidebar.setContent(dialogue[18]+"<br>"+dialogue[2]); sidebar.show();
	var position,i,d=0;
					
		nmarker = L.marker(e.latlng ,{
		bounceOnAdd: true,
    	bounceOnAddOptions: {duration: 1000, height: 200, loop: 1},draggable:'true',icon: pulsingIcon,
  		})

		setTimeout(function(){nmarker.addTo(map)},800);

		nmarker.on("drag", function(e) {clean();
    		nmarker = e.target;
    		position = nmarker.getLatLng();
    		map.panTo(new L.LatLng(position.lat, position.lng));
    		displayAround(position);
		});


		setTimeout(function() {map.flyTo(e.latlng, 15, {
        animate: true,
        duration: 1.5});
		},1500);


  


}

function displayAround(position)
{
	clean();

	pedsNear(position.lat, position.lng)
	parksNear(position.lat, position.lng)
	toysNear(position.lat, position.lng)
	schoolsNear(position.lat, position.lng)
	daycNear(position.lat, position.lng)

	

}


function distance(lat1, lon1, lat2, lon2) {
	var p = 0.017453292519943295;    // Math.PI / 180
  	var c = Math.cos;
  	var a = 0.5 - c((lat2 - lat1) * p)/2 +c(lat1 * p)*c(lat2 * p)*(1 - c((lon2 - lon1) * p))/2;
  	return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}