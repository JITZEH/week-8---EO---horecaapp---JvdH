var fris 	 	= 0;
var bier 	 	= 0;
var wijn 	 	= 0;
var snack 	 	= 0;
var snack8 		= 0;
var snack16 	= 0;


var hfris 	 	= 0;
var hbier	 	= 0;
var hwijn 	 	= 0;
var hsnack8	 	= 0;
var hsnack16 	= 0;


var frisp		= 1.50;
var bierp 		= 2.50;
var wijnp 		= 3;
var snack8p		= 2.50;
var snack16p	= 5;

var wwub    	= 0;
var totaal 		= 0;






alert ('welkom bij onze online ober.');
 

while(wwub != 'stop'   &&  wwub != 'spot' &&  wwub != 'sotp' &&  wwub != 'srop' &&  wwub != 's'){
 wwub = prompt('wat wilt u bestellen?');
 console.log(wwub);




	if (wwub == 'fris' ||  wwub == 'friz' ||  wwub == 'firs' ||  wwub == 'feis' ||  wwub == 'f') { 
		var hfris = prompt('hoeveel fris');
		fris = fris + parseInt(hfris)	
	}else if (wwub == 'bier' ||  wwub == 'biee' ||  wwub == 'beir' ||  wwub == 'buer' ||  wwub == 'b') {
 		var hbier = prompt('hoeveel bier');	
 		bier = bier + parseInt(hbier)	
 	}else if (wwub == 'wijn' ||  wwub == 'wijm' ||  wwub == 'wjin' ||  wwub == 'wujn' ||  wwub == 'w') {
 		var hwijn = prompt('hoeveel wijn');
		wijn = wijn + parseInt(hwijn)		
	}else if (wwub == 'snack' ||  wwub == 'snak' ||  wwub == 'bitter' ||  wwub == 'bitterbal' ||  wwub == 'sn' ||  wwub == 'b' ||  wwub == 'bitterballen' ||  wwub == 'bb') {
 		while (hsnack != '16'  &&  hsnack != '8' ){
 			 		var hsnack = prompt('hoeveel bitterballen!!');

 		
 			if (hsnack == '8' ||  hsnack == 'bitterballen8' ||  hsnack == '8 bitterballen' ||  hsnack == '8') {
 				var hsnack8 = prompt('hoeveel schalen van 8 bitterballen wilt u?' );
 				snack8 = snack8 + parseInt(hsnack8);
 			}else if (hsnack == '16' ||  hsnack == 'bitterballen16' ||  hsnack == '16 bitterballen' ||  hsnack == '61'){
 				var hsnack16 = prompt('hoeveel schalen van 16 bitterballen wilt u?' );
 				console.log(snack16 = snack16 + parseInt(hsnack16));
 			}	
 			else{
 				alert('kan niet. alleen schalen van 8 of 16 bitterballen kunnen bestelt worden.');
 			}
 		}

 		hsnack = null;
 		}

	} 	
	
	bestelling(fris, bier, wijn, snack);
				function bestelling(fris, bier, wijn, snack) {
				
					if (fris > 0 ) {
						document.write( fris + ' fris   -   €' + (fris*frisp).toFixed(2) );	
							document.write('<br>');
					}
				
				 	if (bier > 0 ) {
				 		document.write( bier + ' bier   -   €' + (bier*bierp).toFixed(2) );
				  			document.write('<br>');	
				 	}

				 	if (wijn > 0 ) {
				 	 	document.write( wijn + ' wijn   -   €' + (wijn*wijnp).toFixed(2) );
				 	 		document.write('<br>');	
				 	}

				 	if (snack8 > 0 ) {
				 	 	document.write( snack8 + 'scha(a)l(en) van 8 bitterballen   -   €' + (snack8*snack8p).toFixed(2) );
				 	 		document.write('<br>');	
				 	}

				 	if (snack16 > 0 ) {
				 	 	document.write( snack16 + ' scha(a)l(en) van 16 bitterballen   -   €' + (parseInt(snack16)*parseInt(snack16p)).toFixed(2) );
				 	 		document.write('<br>');	
				 	}

				 	var totaal = (fris*frisp) + (bier*bierp) + (wijn*wijnp) + (snack16*snack16p) + (snack8*snack8p);

					document.write('------------------------');
						document.write('<br>');
				 	document.write('€'+totaal.toFixed(2));
				 	}	
 
