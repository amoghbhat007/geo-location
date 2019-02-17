//search functions


var details
var count=0
function search(searchkeywords)
{
count=0;
		searchAll(searchkeywords);

}



function searchAll(s)
{
    clean();
    var i,match,j;
    var marks=new Array();

    s=s.toLowerCase();
    var chunks=s.split(" ");
    details=" <br><br>"
    

    for(var i=0; i<pkcir.length; i++)
    {
        match=0;
        var tag =parktag1[i].toLowerCase();
        for(var j=0; j<chunks.length; j++)
        {   
            var ctag=chunks[j];
            if(tag.includes(ctag))
                match++;    
        }

        if(match==chunks.length)
        {

            photo='<img src='+pkcir[i].Image+' height=auto width=400px/>'
            marker = L.marker([pkcir[i].loc[0], pkcir[i].loc[1]],{
            bounceOnAdd: true,
            bounceOnAddOptions: {duration: 1000*Math.random(), height: 200, loop: 1},icon:park,
            parkid:photo+"<br><br>"+pkcir[i].Name+"<br>"+ pkcir[i].Address,name:pkcir[i].Name
            });
            marks.push(marker);
            count++;

            marker.on('click', function () {
            sidebar.setContent(""+this.options.parkid+dialogue[22]);responsiveVoice.speak(""+this.options.name)
            sidebar.show();
            });

            details=details+'<img src='+
            pkcir[i].Image+
            ' height=70 width=90px onclick="showMarker('+pkcir[i].loc[0]+','+ pkcir[i].loc[1]+')"'+
            dialogue[5]+
            '/>'+
            '<b>'+
            pkcir[i].Name+
            '</b>'+'<br>'+
            pkcir[i].Address+
            dialogue[4]
 
        }

    }

    for(var i=0; i<pkpol.length; i++)
    {
        match=0;
        var tag =parktag2[i].toLowerCase();
        for(var j=0; j<chunks.length; j++)
        {   
            var ctag=chunks[j];
            if(tag.includes(ctag))
                match++;    
        }

        if(match==chunks.length)
        {

            photo='<img src='+pkpol[i].Image+' height=auto width=400px/>'
            marker = L.marker([pkpol[i].loc[0], pkpol[i].loc[1]],{
            bounceOnAdd: true,
            bounceOnAddOptions: {duration: 1000*Math.random(), height: 200, loop: 1},icon:park,
            parkid2:photo+"<br><br>"+pkpol[i].Name+"<br>"+ pkpol[i].Address,name: pkpol[i].Name
            });

        
            marks.push(marker);
            count++;

            

            marker.on('click', function () {
            sidebar.setContent(""+this.options.parkid2+dialogue[22]);responsiveVoice.speak(""+this.options.name)
            sidebar.show();
            });

            details=details+'<img src='+pkpol[i].Image+' height=70 width=90px onclick="showMarker('+pkpol[i].loc[0]+','+ pkpol[i].loc[1]+')"'+
            dialogue[5]+'/>'+'<b>'+pkpol[i].Name+'</b>'+'<br>'+pkpol[i].Address+dialogue[4] 

   
        }

    }

    for(var i=0; i<toys.length; i++)
    {
        match=0;
        var tag =toytag[i].toLowerCase();
        for(var j=0; j<chunks.length; j++)
        {   
            var ctag=chunks[j];
            if(tag.includes(ctag))
                match++;    
        }

        if(match==chunks.length)
        {

            var photo='<img src='+toys[i].Image+' height=auto width=400px/>'
            var marker = L.marker([toys[i].loc[0], toys[i].loc[1]],{
            bounceOnAdd: true,
            bounceOnAddOptions: {duration: 1000*Math.random(), height: 200, loop: 1},icon:ty,
            toyid:photo+"<br><br>"+toys[i].Name+"<br>"+ toys[i].Address,name:toys[i].Name
            });
            
            marks.push(marker);
            count++;

            marker.on('click', function () {
            sidebar.setContent(""+this.options.toyid+dialogue[22]);responsiveVoice.speak(""+this.options.name)
            sidebar.show();
            });

            details=details+'<img src='+toys[i].Image+' height=70 width=90px onclick="showMarker('+toys[i].loc[0]+','+ toys[i].loc[1]+')"'+
            dialogue[5]+'/>'+'<b>'+toys[i].Name+'</b>'+'<br>'+toys[i].Address+dialogue[4]
        }

    }

    for(var i=0; i<school.length; i++)
    {
        match=0;
        var tag =schooltag[i].toLowerCase();
        for(var j=0; j<chunks.length; j++)
        {   
            var ctag=chunks[j];
            if(tag.includes(ctag))
                match++;    
        }

        if(match==chunks.length)
        {

            var photo='<img src='+school[i].Image+' height=auto width=400px/>'
            var marker = L.marker([school[i].loc[0], school[i].loc[1]],{
            bounceOnAdd: true,
            bounceOnAddOptions: {duration: 1000*Math.random(), height: 200, loop: 1},icon:sch,
            schoolid:photo+"<br><br>"+school[i].Name+"<br>"+ school[i].Address, name:school[i].Name
            });
            
            marks.push(marker);
            count++;

            marker.on('click', function () {
            sidebar.setContent(""+this.options.schoolid+dialogue[22]);responsiveVoice.speak(""+this.options.name)
            sidebar.show();
            });

            details=details+'<img src='+school[i].Image+' height=70 width=90px onclick="showMarker('+school[i].loc[0]+','+ school[i].loc[1]+')"'+
            dialogue[5]+'/>'+'<b>'+school[i].Name+'</b>'+'<br>'+school[i].Address+dialogue[4]
        }

    }

    for(var i=0; i<pedis.length; i++)
    {
        match=0;
        var tag =pedtag[i].toLowerCase(); 
        for(var j=0; j<chunks.length; j++)
        {   
            var ctag=chunks[j];
            if(tag.includes(ctag))
                match++;    
        }

        if(match==chunks.length)
        {

            var photo='<img src='+pedis[i].Image+' height=auto width=400px/>'
            var marker = L.marker([pedis[i].loc[0], pedis[i].loc[1]],{
            bounceOnAdd: true,
            bounceOnAddOptions: {duration: 1000*Math.random(), height: 200, loop: 1},icon:ped,
            pedid:photo+"<br><br>"+pedis[i].Name+"<br>"+ pedis[i].Address, name:pedis[i].Name
            });
            
            marks.push(marker);
            count++;

            marker.on('click', function () {
            sidebar.setContent(""+this.options.pedid+dialogue[22]);responsiveVoice.speak(""+this.options.name)
            sidebar.show();
            });

            details=details+'<img src='+pedis[i].Image+' height=70 width=90px onclick="showMarker('+pedis[i].loc[0]+','+ pedis[i].loc[1]+')"'
            +dialogue[5]+'/>'+'<b>'+pedis[i].Name+'</b>'+'<br>'+pedis[i].Address+dialogue[4]
        }

    }


    for(var i=0; i<dayc.length; i++)
    {
        match=0;
        var tag =daytag[i].toLowerCase(); 
        for(var j=0; j<chunks.length; j++)
        {   
            var ctag=chunks[j];
            if(tag.includes(ctag))
                match++;    
        }

        if(match==chunks.length)
        {

            var photo='<img src='+dayc[i].Image+' height=auto width=400px/>'
            var marker = L.marker([dayc[i].loc[0], dayc[i].loc[1]],{
            bounceOnAdd: true,
            bounceOnAddOptions: {duration: 1000*Math.random(), height: 200, loop: 1},icon:dc,
            dayid:photo+"<br><br>"+dayc[i].Name+"<br>"+ dayc[i].Address, name:dayc[i].Name
            });
            
            marks.push(marker);
            count++;

            marker.on('click', function () {
            sidebar.setContent(""+this.options.dayid+dialogue[22]);responsiveVoice.speak(""+this.options.name)
            sidebar.show();
            });

            details=details+'<img src='+dayc[i].Image+' height=70 width=90px onclick="showMarker('+dayc[i].loc[0]+','+ dayc[i].loc[1]+')"'+
            dialogue[5]+'/>'+'<b>'+dayc[i].Name+'</b>'+'<br>'+dayc[i].Address+dialogue[4]
        }

    }




    if(count==0)
    {
        sidebar.setContent(dialogue[20]+"<b><br>"+s+dialogue[6]+"</b>")
        responsiveVoice.speak(dialogue[6]);
        sidebar.show();
    }

    else if(count==1)
    {
        sidebar.setContent(count+dialogue[3]+details);sidebar.show()
        found=L.featureGroup(marks);   
        map.fitBounds(found.getBounds());
        setTimeout(function(){responsiveVoice.speak(count+dialogue[3]); map.addLayer(found);},1000);

    }
    else
    {
        sidebar.setContent(count+dialogue[23]+details);sidebar.show()
        found=L.featureGroup(marks);   
        map.fitBounds(found.getBounds());
        setTimeout(function(){responsiveVoice.speak(count+dialogue[23]); map.addLayer(found);},1000);

    }
    
    
    

    
}


function showMarker(lat, lng)
{
    map.removeLayer(cmarker);
    map.flyTo([lat, lng], 16, {
        animate: true,
        duration: .5});
    cmarker=L.marker([lat,lng]).addTo(map)

}

function showDetails(count)
{
     map.removeLayer(cmarker);
    sidebar.setContent(count+details);sidebar.show()
}