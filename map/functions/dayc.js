
function checkDayc()
{
	    if(check==1)
	    {
	    	sidebar.setContent(dialogue[1]+"<br><br>"+dialogue[0])
            responsiveVoice.speak(dialogue[0]);
            sidebar.show();
	    }
	    else
	    	showDayc();
     
}


function showDayc()
{
	clean();
	responsiveVoice.speak(dialogue[17]);
	var marks=new Array();

	for (var i=0; i<dayc.length; i++)
	{	
		photo='<img src='+dayc[i].Image+' height=auto width=400px/>';
		marker = L.marker([dayc[i].loc[0], dayc[i].loc[1]],{
		bounceOnAdd: true,
    	bounceOnAddOptions: {duration: 1000*Math.random(), height: 200, loop: 1},icon:dc,
    	daycid:photo+"<br><br>"+dayc[i].Name+"<br>"+ dayc[i].Address,name:dayc[i].Name
  		});

		marks.push(marker);

		marker.on('click', function () {
        sidebar.setContent(""+this.options.daycid);responsiveVoice.speak(""+this.options.name)
        sidebar.show();
        });
			
	}


	
	daycares=L.featureGroup(marks);   
	map.fitBounds(daycares.getBounds());
	setTimeout(function(){ map.addLayer(daycares);},1000);


}




function daycNear(lat ,lng)
{
		for (var i=0; i<dayc.length; i++)
		{
			d=distance(lat, lng, dayc[i].loc[0], dayc[i].loc[1])
			if(d<=1)
			{
				photo='<img src='+dayc[i].Image+' height=auto width=400px/>';
				marker = L.marker([dayc[i].loc[0], dayc[i].loc[1]],{icon:dc,
    			daycid:photo+"<br><br>"+dayc[i].Name+"<br>"+ dayc[i].Address, name:dayc[i].Name
  				});

				marks.push(marker);

			

				marker.on('click', function () {
        		sidebar.setContent(""+this.options.daycid);responsiveVoice.speak(""+this.options.name)
            	sidebar.show();
        		});
			}
		
			
		}

		daycares=L.featureGroup(marks);
		map.addLayer(daycares);
}