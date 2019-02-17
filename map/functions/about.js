
function about() {
	responsiveVoice.speak(dialogue[12])
	var logo='<img src="logo.png"height=auto width=400px/>';
	var about="<style>h1 {text-align:center;}p {text-align:center;}</style>"+
	"<h1><b>MAPS</b></h1>"+
	"<p>about<br><br></p>"+
	"<p><b>Developed by</b>"+ 
	"<br> Shivani Juwarkar "+
	"<br> Ashwini Shenvi "+
	"<br> Shweta Koyande "+
	"<br> Amogh Bhat "+
	"<br><br>Let us know about you experience!!<br>"+
	"Go to the main page and drop a comment or mail us!!"+
	"</p>"+
	"<br><button type='button' onclick='openIntro()'><-- Go back to main page</button>"
	sidebar.setContent(logo+about);	
	sidebar.toggle();
}

function openIntro()
{
  var w="../index.html";
  window.open(w, '_self');
}