$(function(){
	

	// Initiate plugin
	$('#heading').start_spinwriter({
		'text' : "SPINNER TEXT",
		'interval' : 10,//milliseconds
		'css' : {
			'font-size': '26px',
    		'text-transform': 'uppercase',
    		'color':'#333'
		}
	});

	// 	heading_small
	$('#heading_small').start_spinwriter({
		'text' : "Welcome to spinner text jQuery plugin.",
		'interval' : 500,//milliseconds
		'css' : {
		}
	});

});

