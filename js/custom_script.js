$(function(){
	
	var heading = "jQuery Spinner Text.v.JS";
	var release_text = "updated to include numerics[0-9] values v0.1.1"
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

	$("#notification").start_spinwriter({
		'text':release_text,
		'interval': 50,
		'css':{}	
	});
	
	number_runner();
	function number_runner(){
		$('#ndemo').start_spinwriter({
			'text':'0 1 2 3 4 5 6 7 8 9',
			'interval': 200,
			'css':{}	
		});
	}

	// Initiate plugin
	$('#heading').start_spinwriter({
		'text' : heading,
		'interval' : 11,//milliseconds
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
				number_runner();		
			},100000)
			
		}
	}
	
	var d = [];
	d[3] = "A la pregunta tonta, '¿Por qué yo?' el cosmos apenas molesta para devolver la respuesta, '¿Por qué no?'.";
	d[2] = "Pocos son los que ven con sus propios ojos y sienten con sus propios corazones.";
	d[1] = "Si las cosas buenas duraron para siempre, podríamos apreciar lo precioso que son?";

	$('#d1').start_spinwriter({
		'text' : d[1],
		'interval' : 10,//milliseconds
		'css' : {
    		'transition': 'all 0.25s ease',
    		'-webkit-transition': 'all 0.25s ease',
    		'-moz-transition': 'all 0.25s ease',
    		'-o-transition':'all 0.25s ease'
		}
	});
	$('#d2').start_spinwriter({
		'text' : d[2],
		'interval' : 15,//milliseconds
		'css' : {
    		'transition': 'all 0.25s ease',
    		'-webkit-transition': 'all 0.25s ease',
    		'-moz-transition': 'all 0.25s ease',
    		'-o-transition':'all 0.25s ease'
		}
	});
	$('#d3').start_spinwriter({
		'text' : d[3],
		'interval' : 5,//milliseconds
		'css' : {
    		'transition': 'all 0.25s ease',
    		'-webkit-transition': 'all 0.25s ease',
    		'-moz-transition': 'all 0.25s ease',
    		'-o-transition':'all 0.25s ease'
		}
	});


});

