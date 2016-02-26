$(document).ready(function() {
	
	/*var index_of_activate_class = $('li.activate').index() + 1;
	// alert(index_of_activate_class);*/

	// var no_of_fields = $('li.form-group').length;
	// alert(no_of_fields);

	var activate_index = $('li.activate').index() + 1;
	var no_of_fields = $('li.form-group').length - 1;
	$('.activate_index').html(activate_index);
	$('.no_of_fields').html(no_of_fields);

	// When a letter is entered in text field show the next button ///////
	$('.form-control').keyup(function() {								//
    	$('.next').removeClass("hide");									//
  	});																	//
  	//////////////////////////////////////////////////////////////////////

  	$('.next').click(function() {
	    
	    if ($('.sexyform li').hasClass('activate')) {

			var activate = $('li.activate');
			var inactive = $('li.inactive');

			activate.removeClass("activate");
			inactive.removeClass("hide inactive").addClass("activate").next().addClass('inactive');

			///// For progress index like 1/6 //////////////////
			var activate_index = $('li.activate').index() + 1;//
			var no_of_fields = $('li.form-group').length - 1; //
			$('.activate_index').html(activate_index);		  //
			$('.no_of_fields').html(no_of_fields);			  //
			////////////////////////////////////////////////////

			//if($('.activate_index').html() == $('.no_of_fields').html()+1)
			if(activate_index == no_of_fields+1)
			{
				$('.count, .next').hide();
        		$('.submit').removeClass("hide");
			}
		}

	});

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

});