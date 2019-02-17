function checkSchools()
{
	    if(check==1)
	    {
	    	sidebar.setContent(dialogue[1]+"<br><br>"+dialogue[0])
            responsiveVoice.speak(dialogue[0]);
            sidebar.show();	
	    }
	    else
	    	showSchools();
     
}


function showSchools()
{
	  clean();
	 
	 	var marks=new Array();
responsiveVoice.speak(dialogue[10]);
	for (var i=0; i<school.length; i++)
	{	
		photo='<img src='+school[i].Image+' height=auto width=400px/>';
		marker = L.marker([school[i].loc[0], school[i].loc[1]],{
		bounceOnAdd: true,
    	bounceOnAddOptions: {duration: 1000*Math.random(), height: 200, loop: 1},icon:sch,
    	schoolid:photo+"<br><br>"+school[i].Name+"<br>"+ school[i].Address,name:school[i].Name
  		});

		marks.push(marker);

			

		marker.on('click', function () {
        sidebar.setContent(""+this.options.schoolid);responsiveVoice.speak(""+this.options.name)
        sidebar.show();
        });
			
	}


	
	schools=L.featureGroup(marks);   
	map.fitBounds(schools.getBounds());
	setTimeout(function(){ map.addLayer(schools);},1000);


}





function schoolsNear(lat, lng)
{
	for(var i=0; i<school.length; i++)
	{	
		d=distance(lat, lng, school[i].loc[0], school[i].loc[1])
		if(d<=1)
		{
			photo='<img src='+school[i].Image+' height=auto width=400px/>'
			marker = L.marker([school[i].loc[0], school[i].loc[1]],{icon:sch,
    		schoolid:photo+"<br><br>"+school[i].Name+"<br>"+ school[i].Address, name:school[i].Name
  			});

			marks.push(marker);

			

			marker.on('click', function () {
        	sidebar.setContent(""+this.options.schoolid);responsiveVoice.speak(""+this.options.name)
            sidebar.show();
        	});
		}
		
			
	}


	schools=L.featureGroup(marks);   
	map.addLayer(schools);
}