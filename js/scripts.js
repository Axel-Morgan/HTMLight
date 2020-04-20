$(function(){
	 $('#but_1').click(function(event){
		 let num_but = 0;
		 let answer_1 = [0, 1, 0, 1, 3, 2, 3, 0, 1, 0, 2, 3];
		 let answer_2 = [1, 1, 3, 0, 2, 1, 0, 2, 0, 1, 3, 2];
		 let answer_3 = [1, 1, 0, 2, 3, 1, 0, 3, 1, 2, 3, 2];
		 let your_answer = []; 
		 let sections = $("section");
		 
		 num_but = parseInt($('button[name="q_s"]').val());
		 $('html, body').animate({scrollTop:0}, 'slow');
		 $(".true_ans").css('display', 'block');
		 
		 
		 your_answer[0] = parseInt($('input[name="q_1"]:checked').val());
		 your_answer[1] = parseInt($('input[name="q_2"]:checked').val());
		 your_answer[2] = parseInt($('input[name="q_3"]:checked').val());
		 your_answer[3] = parseInt($('input[name="q_4"]:checked').val()); 
		 your_answer[4] = parseInt($('input[name="q_5"]:checked').val());
		 your_answer[5] = parseInt($('input[name="q_6"]:checked').val());
		 your_answer[6] = parseInt($('input[name="q_7"]:checked').val());
		 your_answer[7] = parseInt($('input[name="q_8"]:checked').val()); 
		 your_answer[8] = parseInt($('input[name="q_9"]:checked').val());
		 your_answer[9] = parseInt($('input[name="q_10"]:checked').val());
		 your_answer[10] = parseInt($('input[name="q_11"]:checked').val());
		 your_answer[11] = parseInt($('input[name="q_12"]:checked').val()); 
		 
		 if (num_but == 1){
			  for (let i =0; i < 12; i++)
				 {
					 if(answer_1[i] == your_answer[i])$(sections[i]).css('background-color', ' rgba(0,40,0,0.9)');
					 else $(sections[i]).css('background-color', ' rgba(40,0,0,0.9)')
			     }
		 }	
         else if (num_but == 2){
			  for (let i =0; i < 12; i++)
				 {
					 if(answer_2[i] == your_answer[i])$(sections[i]).css('background-color', ' rgba(0,40,0,0.9)');
					 else $(sections[i]).css('background-color', ' rgba(40,0,0,0.9)')
			     }
		 }			 
		 else if (num_but == 3){
			  for (let i =0; i < 12; i++)
				 {
					 if(answer_3[i] == your_answer[i])$(sections[i]).css('background-color', ' rgba(0,40,0,0.9)');
					 else $(sections[i]).css('background-color', ' rgba(40,0,0,0.9)')
			     }
		 }			 
	 });	
});