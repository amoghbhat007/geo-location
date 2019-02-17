function checkParks()
{
	    if(check==1)
	    {
	    	sidebar.setContent(dialogue[1]+"<br><br>"+dialogue[0])
            responsiveVoice.speak(dialogue[0]);
            sidebar.show();
	    }
	    else
	    	showParks();
     
}


function showParks()
{
	clean();
	responsiveVoice.speak(dialogue[8]);
	var marks=new Array();
	

	for (var i=0; i<pkcir.length; i++)
	{	
		
		photo='<img src='+pkcir[i].Image+' height=auto width=400px/>'
		marker = L.marker([pkcir[i].loc[0], pkcir[i].loc[1]],{
		bounceOnAdd: true,
    	bounceOnAddOptions: {duration: 1000*Math.random(), height: 200, loop: 1},icon:park,
    	parkid1:photo+"<br><br>"+pkcir[i].Name+"<br>"+ pkcir[i].Address,name:pkcir[i].Name
  		});
		circle=new L.circle([pkcir[i].loc[0], pkcir[i].loc[1]], pkcir[i].rad,{color:'green', fillColor:'green', weight:1}).bindPopup(pkcir[i].Name).addTo(map);
		marks.push(circle);
		marks.push(marker);

			

		marker.on('click', function () {
        sidebar.setContent(""+this.options.parkid1);responsiveVoice.speak(""+this.options.name)
        sidebar.show();
        });
			
	}

	for (var i=0; i<pkpol.length; i++)
	{
		

		photo='<img src='+pkpol[i].Image+' height=auto width=400px/>'
		marker = L.marker([pkpol[i].loc[0], pkpol[i].loc[1]],{
		bounceOnAdd: true,
    	bounceOnAddOptions: {duration: 1000*Math.random(), height: 200, loop: 1},icon:park,
    	parkid2:photo+"<br><br>"+pkpol[i].Name+"<br>"+ pkpol[i].Address,name:pkpol[i].Name
  		});

		polygon=new L.polygon(pkpol[i].Arr,{color:'green', fillColor:'green', weight:1}).bindPopup(pkpol[i].Name).addTo(map);
		marks.push(polygon);
		marks.push(marker);

			

		marker.on('click', function () {
        sidebar.setContent(""+this.options.parkid2);responsiveVoice.speak(""+this.options.name)
        sidebar.show();
        });
	}


	
	parks=L.featureGroup(marks);   
	map.fitBounds(parks.getBounds());
	setTimeout(function(){ map.addLayer(parks);},1000);


}




function parksNear(lat, lng)
{
	
	var marks=new Array();
	for (var i=0; i<pkcir.length; i++)
	{	
		d=distance(lat, lng, pkcir[i].loc[0], pkcir[i].loc[1])

		if (d<=1) 
		{
			var photo='<img src='+pkcir[i].Image+' height=auto width=400px/>'
			var marker = L.marker([pkcir[i].loc[0], pkcir[i].loc[1]],{icon:park,
    		parkid1:photo+"<br><br>"+pkcir[i].Name+"<br>"+ pkcir[i].Address,name:pkcir[i].Name,
  			});
	
		marks.push(marker);

			

			marker.on('click', function () {
        	sidebar.setContent(""+this.options.parkid1);responsiveVoice.speak(""+this.options.name)
            sidebar.show();
        	});
		}

		
			
	}

	for (var i=0; i<pkpol.length; i++)
	{
		d=distance(lat, lng, pkpol[i].Arr[0][0], pkpol[i].Arr[0][1])

		if (d<=1) 
		{

			photo='<img src='+pkpol[i].Image+' height=auto width=400px/>'
			marker = L.marker([pkpol[i].Arr[0][0], pkpol[i].Arr[0][1]],{icon:park,
    		parkid2:photo+"<br><br>"+pkpol[i].Name+"<br>"+ pkpol[i].Address, name:pkpol[i].Name
  			});
		
			marks.push(marker);

			

			marker.on('click', function () {
        	sidebar.setContent(""+this.options.parkid2);responsiveVoice.speak(""+this.options.name)
            sidebar.show();
        	});
		}
	}


	parks=L.featureGroup(marks);   
	map.addLayer(parks);
	pmarker=[];
}


