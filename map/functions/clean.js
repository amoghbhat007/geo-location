

function clean()
{
	sidebar.hide();


	map.eachLayer(function (marker) {
    map.removeLayer(parks);
	});
	map.eachLayer(function (marker) {
    map.removeLayer(schools);
	});
	map.eachLayer(function (marker) {
    map.removeLayer(peds);
	});
	map.eachLayer(function (marker) {
    map.removeLayer(toystores);
	});
	map.eachLayer(function (marker) {
    map.removeLayer(daycares);
	});
	map.eachLayer(function (marker) {
    map.removeLayer(found);
	});

	map.removeLayer(mylocation);
	map.removeLayer(circle);
	map.removeLayer(polygon);
	map.removeLayer(cmarker);

	marks=[];
	parks=[];
	schools=[];
	peds=[];
	toystores=[];
	daycares=[];
	found=[];


if(check==0)
{
	map.flyTo([15.464213, 73.849571], 10, {
        animate: true,
        duration: 1.5});
}

	

}