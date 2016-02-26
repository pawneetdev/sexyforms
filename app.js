$(document).ready(function() {

	// For initial progress index //////////////////////
	var activate_index = $('li.activate').index() + 1;//
	var no_of_fields = $('li.form-group').length - 1; //
	$('.activate_index').html(activate_index);		  //
	$('.no_of_fields').html(no_of_fields);			  //
	////////////////////////////////////////////////////

	// When a letter is entered in text field show the next button ///////
	$('.form-control').keyup(function() {								//
    	$('.next').removeClass("hide").removeClass("hide fadeOutDown").addClass("fadeInUp");									//
  	});																	//
  	//////////////////////////////////////////////////////////////////////

  	$('.next').click(function() {
	    
	    if ($('.sexyform li').hasClass('activate')) {

			var activate = $('li.activate');
			var inactive = $('li.inactive');

			activate.removeClass("fadeInRightBig activate").addClass('fadeOutLeftBig');
			inactive.removeClass("hide inactive").addClass("activate fadeInRightBig").next().addClass('inactive');

			///// For progress index from 2/6 //////////////////
			var activate_index = $('li.activate').index() + 1;//
			var no_of_fields = $('li.form-group').length - 1; //
			$('.activate_index').html(activate_index);		  //
			$('.no_of_fields').html(no_of_fields);			  //
			////////////////////////////////////////////////////

			// To show submit button and hide count index and next button//
			if(activate_index == no_of_fields+1)						 //
			{															 //
				$('.count, .next').hide();								 //
        		$('.submit').removeClass("hide");						 //
			}															 //
			///////////////////////////////////////////////////////////////
		}

	});

	$(".submit").click(function() {
    	
    	value = $('.answer1').val();
    	$("#answer1").val(value);

    	value = $('.answer2').val();
    	$("#answer2").val(value);

    	value = $('.answer3').val();
    	$("#answer3").val(value);

    	value = $('.answer4').val();
    	$("#answer4").val(value);

	});

  	if(activate_index != no_of_fields+1)
  	{
		$('#q1').keyup(function() {
			var value = $(this).val();
			$('.answer1').val(value);
		});

		$('#q2').keyup(function() {
			var value = $(this).val();
			$('.answer2').val(value);
		});

		$('#q3').keyup(function() {
			var value = $(this).val();
			$('.answer3').val(value);
		});

		$('#q4').keyup(function() {
			var value = $(this).val();
			$('.answer4').val(value);
		});
	}

});