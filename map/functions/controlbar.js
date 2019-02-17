$(document).ready(function () 
 {
    var photo='<img src="logo.png"height=auto width="400px"/>';
    var searchboxControl=createSearchboxControl();
    control = new searchboxControl(
    {
        sidebarTitleText: 'maps',
        sidebarMenuItems: 
        {
            Items: [
                { type: "button", name: "Weather today", onclick: "weather();", icon: "icon-cloudy" },
                { type: "button", name: "Where am I?", onclick: "findme();", icon: "icon-location" },
                { type: "button", name: "Parks", onclick: "checkParks();", icon: "icon-park" },
                { type: "button", name: "Toy-stores", onclick: "checkToys();", icon: "icon-toy" },
                { type: "button", name: "School", onclick: "checkSchools();", icon: "icon-school" },
                { type: "button", name: "Pediatrician", onclick: "checkPeds();", icon: "icon-ped" },
                { type: "button", name: "Day care", onclick: "checkDayc();", icon: "icon-dayc" },
                { type: "button", name: "NearBy", onclick: "addMarker();", icon: "icon-nearby"},
                { type: "button", name: "Clear", onclick: "clean();", icon: "icon-clear"},                
                { type: "button", name: "About", onclick: "about();", icon: "icon-about"},
                
                    ]
        }
    });

    control._searchfunctionCallBack = function (searchkeywords)
    {
        if(check==1)
        {
            sidebar.setContent(dialogue[1]+"<br><br>"+dialogue[0])
            responsiveVoice.speak(dialogue[0]);
            sidebar.show();
        }
        else
            search(searchkeywords)
    	
    }

    map.addControl(control);

    var input = document.getElementById("searchboxinput");
    input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
    document.getElementById("searchbox-searchbutton").click();
    }
    })





});
