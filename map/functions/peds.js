function checkPeds()
{
	    if(check==1)
	    {
	    	sidebar.setContent(dialogue[1]+"<br><br>"+dialogue[0])
            responsiveVoice.speak(dialogue[0]);
            sidebar.show();
	    }
	    else
	    	showPeds();
     
}


function showPeds()
{
	clean();
	responsiveVoice.speak(dialogue[11]);
	
	var marks=new Array();

	for (var i=0; i<pedis.length; i++)
	{	
		photo='<img src='+pedis[i].Image+' height=auto width=400px/>';
		marker = L.marker([pedis[i].loc[0], pedis[i].loc[1]],{
		bounceOnAdd: true,
    	bounceOnAddOptions: {duration: 1000*Math.random(), height: 200, loop: 1},icon:ped,
    	pedisid:photo+"<br><br>"+pedis[i].Name+"<br>"+ pedis[i].Address,name:pedis[i].Name
  		});

		marks.push(marker);

			

		marker.on('click', function () {
        sidebar.setContent(""+this.options.pedisid);responsiveVoice.speak(""+this.options.name)
        sidebar.show();
        });
			
	}


	
	peds=L.featureGroup(marks);   
	map.fitBounds(peds.getBounds());
	setTimeout(function(){ map.addLayer(peds);},1000);


}




function pedsNear(lat ,lng)
{
	for (var i=0; i<pedis.length; i++)
	{	
		d=distance(lat, lng, pedis[i].loc[0], pedis[i].loc[1])
		if(d<=1)
		{
			photo='<img src='+pedis[i].Image+' height=auto width=400px/>';
			marker = L.marker([pedis[i].loc[0], pedis[i].loc[1]],{icon:ped,
    		pedisid:photo+"<br><br>"+pedis[i].Name+"<br>"+ pedis[i].Address,name:pedis[i].Name
  			});

			marks.push(marker);

			

			marker.on('click', function () {
        	sidebar.setContent(""+this.options.pedisid);responsiveVoice.speak(""+this.options.name)
            sidebar.show();
        	});
		}
		
			
	}


	
	peds=L.featureGroup(marks);
	map.addLayer(peds);
}