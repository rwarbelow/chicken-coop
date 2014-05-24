$(document).ready(function(){
	$('.animal').draggable();
	/***********************************************
* Floating image script- By Virtual_Max (http://www.geocities.com/siliconvalley/lakes/8620)
* Modified by Dynamic Drive for various improvements
* Visit Dynamic Drive at http://www.dynamicdrive.com/ for full source code
***********************************************/
function pagestart(){
//Step 2: Using the same variable names as 1), add or delete more of the below lines (60=width, height=80 of image):
flyimage1=new Chip("flyimage1",47,68);
flyimage2=new Chip("flyimage2",47,68);
flyimage3=new Chip("flyimage3",47,68);
flyimage4=new Chip("flyimage4",47,68);
flyimage5=new Chip("flyimage5",47,68);
flyimage6=new Chip("flyimage6",47,68);
flyimage7=new Chip("flyimage7",47,68);
flyimage8=new Chip("flyimage8",47,68);
flyimage9=new Chip("flyimage9",47,68);
flyimage10=new Chip("flyimage10",47,68);
flyimage11=new Chip("flyimage11",47,68);
flyimage12=new Chip("flyimage12",47,68);

//Step 3: Using the same variable names as 1), add or delete more of the below lines:
movechip("flyimage1");
movechip("flyimage2");
movechip("flyimage3");
movechip("flyimage4");
movechip("flyimage5");
movechip("flyimage6");
movechip("flyimage7");
movechip("flyimage8");
movechip("flyimage9");
movechip("flyimage10");
movechip("flyimage11");
movechip("flyimage12");
}

window.setInterval(function() {
	var c = collision($('#chicken'), $('.chicken-coop')) == true 
	var c1 = collision($('#chicken1'), $('.chicken-coop')) == true 
	var c2 = collision($('#chicken2'), $('.chicken-coop')) == true 
	var c3 = collision($('#chicken3'), $('.chicken-coop')) == true 
	var c4 = collision($('#chicken4'), $('.chicken-coop')) == true 
	var c5 = collision($('#chicken5'), $('.chicken-coop')) == true 
	var c6 = collision($('#chicken6'), $('.chicken-coop')) == true 
	var c7 = collision($('#chicken7'), $('.chicken-coop')) == true 
	var c8 = collision($('#chicken8'), $('.chicken-coop')) == true 
	var c9 = collision($('#chicken9'), $('.chicken-coop')) == true 
	var c10 = collision($('#chicken10'), $('.chicken-coop')) == true 
	var c11 = collision($('#chicken11'), $('.chicken-coop')) == true 

	if ( c && c1 && c2 && c3 && c4 && c5 && c6 && c7 && c8 && c9 && c10 && c11 ) {
		$('.animal').hide();
		$('.chicken-coop').html('<div class="egg"><h5>WINNING</h5><img class="goldegg" src="http://www.bluemoonworks.com/wp-content/uploads/2012/08/GoldenEgg.png" alt="" /></div>')
	}
}, 100);

if (window.addEventListener)
	window.addEventListener("load", pagestart, false)
else if (window.attachEvent)
	window.attachEvent("onload", pagestart)
else if (document.getElementById)
	window.onload=pagestart


});

function collision($div1, $div2) {
	var x1 = $div1.offset().left;
	var y1 = $div1.offset().top;
	var h1 = $div1.outerHeight(true);
	var w1 = $div1.outerWidth(true);
	var b1 = y1 + h1;
	var r1 = x1 + w1;
	var x2 = $div2.offset().left;
	var y2 = $div2.offset().top;
	var h2 = $div2.outerHeight(true);
	var w2 = $div2.outerWidth(true);
	var b2 = y2 + h2;
	var r2 = x2 + w2;

	if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
	return true;
}



