$(function(){
	 var libr = $("section");
	 var t = 21;
	 $('#libr_1').click(function(event){
		 for( var i = 0; i < t; i++)
		     {
				 if (i > 2){
                     $(libr[i]).addClass('main_tags');
				 }
				 
				 else {
					 $(libr[i]).removeClass('main_tags');
				 }
		     }
	 });	
	 
	 $('#libr_2').click(function(event){
          for( var i = 0; i < t; i++)
		     {
				 if (i < 8){
                     $(libr[i]).addClass('main_tags');
				 }
				 
				 else {
					 $(libr[i]).removeClass('main_tags');
				 }
		     }	 
	 });
	 
	  $('#libr_3').click(function(event){
          for( var i = 0; i < t; i++)
		     {
				 if ((i < 3)||(i > 7)){
                     $(libr[i]).addClass('main_tags');
				 }
				 
				 else {
					 $(libr[i]).removeClass('main_tags');
				 }
		     }	 
	 });
	 
	  $('#libr_4').click(function(event){
          for( var i = 0; i < t; i++)
		     {
				 if ((i < 12)||(i > 14)){
                     $(libr[i]).addClass('main_tags');
				 }
				 
				 else {
					 $(libr[i]).removeClass('main_tags');
				 }
		     }	 
	 });
	 
	 $('#libr_5').click(function(event){
          for( var i = 0; i < t; i++)
		     {
				 if ((i < 11)||(i > 13)){
                     $(libr[i]).addClass('main_tags');
				 }
				 
				 else {
					 $(libr[i]).removeClass('main_tags');
				 }
		     }	 
	 });
	 
	 $('#libr_6').click(function(event){
          for( var i = 0; i < t; i++)
		     {
				 if (i < 17){
                     $(libr[i]).addClass('main_tags');
				 }
				 
				 else {
					 $(libr[i]).removeClass('main_tags');
				 }
		     }	 
	 });	 
});