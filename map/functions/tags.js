var parktag1=new Array();
var parktag2=new Array();
var toytag=new Array();
var schooltag=new Array();
var pedtag=new Array();
var daytag=new Array();

for(var i=0; i<pkcir.length; i++)
{
	parktag1[i]="all parks playground"+pkcir[i].Name+ pkcir[i].Address;
}

for(var i=0; i<pkpol.length; i++)
{
	parktag2[i]="all parks playground "+pkpol[i].Name+ pkpol[i].Address;
}

for(var i=0; i<toys.length; i++)
{
	toytag[i]="all toy toys stores store kids toystore toystores"+toys[i].Name+toys[i].Address
}


for(var i=0; i<school.length; i++)
{
	schooltag[i]="all school schools primary pre"+school[i].Name+school[i].Address
}

for(var i=0; i<pedis.length; i++)
{
	pedtag[i]="all doctor kids specialist Pediatrician"+pedis[i].Name+pedis[i].Address
}


for (var i=0; i<dayc.length; i++)
{
	daytag[i]="all day care daycare "+dayc[i].Name+dayc[i].Address
}