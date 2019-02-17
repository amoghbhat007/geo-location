var map;
var attr = "2015 &copy; freeTHINK(India)";
function initMapJS() 
{
	var siteRoot = 'https://maptrack.in/tiles1588/';
	var localTiles5To6 = siteRoot + '5To6Ind/{z}/{x}/{y}.png';
	var localTiles7To10 = siteRoot + '7To10Ind/{z}/{x}/{y}.png';
	var localTiles11To15 = siteRoot + '11To15Go/{z}/{x}/{y}.png';
	var localTiles16To17 = siteRoot + '16To17Go/{z}/{x}/{y}.png';
	


	map= L.map(
		'map-canvas',
		{
			center : [ 15.464213, 73.849571 ],
				zoom : 10,
				minZoom : 5,
				maxZoom : 17,
				layers : [ L.tileLayer(localTiles5To6, {
					maxZoom : 6,
					minZoom : 5,
					attribution : attr
				}), L.tileLayer(localTiles7To10, {
					maxZoom : 10,
					minZoom : 7
				}), L.tileLayer(localTiles11To15, {
					maxZoom : 15,
					minZoom : 11
				}), L.tileLayer(localTiles16To17, {
					maxZoom : 17,
					minZoom : 16
				})]
		});


	map.zoomControl.remove();
	new L.Control.Zoom({ position: 'topright' }).addTo(map);

	map.addControl(new L.Control.Fullscreen({position:'topright'}));

	sidebar = L.control.sidebar('sidebar', {
            closeButton: true,
            position: 'right'
        });
        map.addControl(sidebar);

        map.on('click', function () {
            sidebar.hide();
        });

responsiveVoice.speak(dialogue[7])
responsiveVoice.speak(dialogue[14])
	setTimeout(function(){
		sidebar.show(); 
	},500);
        
        

}


//global variables

var control,marker,photo,nmarker,check=0,filter;
var marks=new Array();
var nearby= new Array();
var found=new Array();
var mylocation=new Array();
var circle=new Array();
var polygon=new Array();
var parks=new Array();
var schools=new Array();
var peds=new Array();
var toystores=new Array();
var daycares=new Array();
var sidebar;
var cmarker=new Array();



