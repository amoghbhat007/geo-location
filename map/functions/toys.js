function checkToys()
{
	    if(check==1)
	    {
	    	sidebar.setContent(dialogue[1]+"<br><br>"+dialogue[0])
            responsiveVoice.speak(dialogue[0]);
            sidebar.show();
	    }
	    else
	    	showToys();
     
}


function showToys()
{
	clean();
	var marks=new Array();
	responsiveVoice.speak(dialogue[9]);

	for (var i=0; i<toys.length; i++)
	{	
		photo='<img src='+toys[i].Image+' height=auto width=400px/>';
		marker = L.marker([toys[i].loc[0], toys[i].loc[1]],{
		bounceOnAdd: true,
    	bounceOnAddOptions: {duration: 1000*Math.random(), height: 200, loop: 1},icon:ty,
    	toyid:photo+"<br><br>"+toys[i].Name+"<br>"+ toys[i].Address,name:toys[i].Name
  		});

		marks.push(marker);

			

			marker.on('click', function () {
        	sidebar.setContent(""+this.options.toyid);responsiveVoice.speak(""+this.options.name)
            sidebar.show();
        	});
			
	}


	
	toystores=L.featureGroup(marks);   
	map.fitBounds(toystores.getBounds());
	setTimeout(function(){ map.addLayer(toystores);},1000);


}




function toysNear(lat, lng)
{
	for(var i=0; i<toys.length; i++)
	{	d=distance(lat, lng, toys[i].loc[0], toys[i].loc[1])
		if(d<=1)
		{
			photo='<img src='+toys[i].Image+' height=auto width=400px/>'
			marker = L.marker([toys[i].loc[0], toys[i].loc[1]],{icon:ty,
    		toyid:photo+"<br><br>"+toys[i].Name+"<br>"+ toys[i].Address,name:toys[i].Name
  			});

			marks.push(marker);

			

			marker.on('click', function () {
        	sidebar.setContent(""+this.options.toyid);responsiveVoice.speak(""+this.options.name)
            sidebar.show();
        	});
		}
		
			
	}


	toystores=L.featureGroup(marks);   
	map.addLayer(toystores);
}