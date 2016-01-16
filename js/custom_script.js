$(function(){
	var heading = "jQuery Spinner Text.JS";
	t = [15];
	t[1] = "&lt!-- load jquery plugin --&gt;",
	t[2] = '&lt;script src="js/jquery.min.js"&gt;&lt;/script&gt;',
	t[3] = '&lt!-- load jquery-spinner-text.js plugin --&gt;',
	t[4] = '&lt;script src="js/jquery-spinner-text.js"&gt;&lt;/script&gt;',
	t[5] = '..........',
	t[6] = '$("#heading"").start_spinwriter({',
	t[7]= '"text" : "SPINNER TEXT",',
	t[8] = '"interval" : 10,//milliseconds',
	t[9] = '"css" : {',
	t[10] = "    'font-size': '26px',",
	t[11] = "    'text-transform': 'uppercase',",
	t[12] = "    'color':'#333'",
	t[13] = '  }',
	t[14] = ' });';


	// Initiate plugin
	$('#heading').start_spinwriter({
		'text' : heading,
		'interval' : 10,//milliseconds
		'css' : {
    		'color':'#333'
		}
	});

	load_texts(1);

	function load_texts(i){
		if( i < 15){
			$('#t'+i).start_spinwriter({
				'text' : t[i],
				'interval':2,
				'css':{}
			},function(){
				i = i + 1;
				load_texts(i);
			});
		}else{
			setTimeout(function(){
				$('pre>span').html('');
				$('pre>p').html('');
				load_texts(1);		
			},100000)
			
		}
	}
	// 	heading_small
// 	$('#heading_small').start_spinwriter({
// 		'text' : "Welcome to spinner text jQuery plugin.",
// 		'interval' : 10,//milliseconds
// 		'css' : {
// 		}
// 	});

});

