(function ( $ ) {
    $.fn.start_spinwriter = function(args,callback){
    	if(args.css){
			this.css(args.css);
    	}
		text = args.text.split('');
		interval = args.interval?args.interval:10;
		mode = args.mode?args.mode:0;
		var rt = 404;
		write_text(this,text,interval,mode,callback);
		return this;
	}


	write_text = function(ele,text,interval,mode,callback){
		if(mode == 0){
			return write_next_char(ele,text,1,interval,callback);
		}else if(mode == 1){
			return write_wholestring(ele,text,interval,callback);
		}
	}

	write_next_char = function(ele,text,index,interval,callback){
		if(index < text.length+1){
			load_current_character(ele, text.slice(0,index).join(''),0,text,index,interval,callback);
		}else{
			if(callback){
			 	callback();	
			}
		}
	}

	load_current_character = function(ele,str,posi, text,index,interval,callback){
		if(str.length > 0){
			var alphabet = " abcdefghijklmnopqrstuvwxyz".split("");
			var number = "0123456789".split("")
			pt = /[a-zA-Z]/;
			ptn = /[0-9]/;
			var main_str = str.substr(0,str.length-1);
			var running_charecter = str[str.length-1];
			if((!pt.test(running_charecter) || alphabet[posi].toLowerCase() == running_charecter.toLowerCase()) && (!ptn.test(running_charecter) || number[posi] === running_charecter)){
				ele.html(str);
				index = index + 1;
				write_next_char(ele,text,index,interval,callback);
			}else{
				if(isNaN(parseInt(running_charecter))){
					ele.html(main_str+alphabet[posi]);	
				}else{
					ele.html(main_str+number[posi]);	
				}
				setTimeout(function(){
					posi = posi + 1;
					load_current_character(ele,str,posi,text,index,interval,callback);
				},interval);
			}
		}
	}

	function write_wholestring(ele,text,interval,callback){
		buffer_word = getBufferedWord(text);
		load_new_string(ele,text,buffer_word,interval,callback);
	}

	function load_new_string(ele,text,buffer_word,interval,callback){
		ele.html(buffer_word.join(''))
		if(text.join('') !== buffer_word.join('')){
			setTimeout(function(){
				buffer_word = getNewBufferedWord(text,buffer_word);
				load_new_string(ele,text,buffer_word,interval,callback)
			},interval);
		}else{
			if(callback){
				callback()
			}
		}
	}

	function getNewBufferedWord(text,buffer_word){
		var alphabet = " abcdefghijklmnopqrstuvwxyz".split("");
		var number = "0123456789".split("");
		pt = /[a-zA-Z]/;
		ptn = /[0-9]/;
		for(var i = 0; i<buffer_word.length; i++){
			if(buffer_word[i] != text[i]){
				if(pt.test(buffer_word[i])){
					if(text[i] == text[i].toUpperCase()){
						buffer_word[i] = alphabet[alphabet.indexOf(buffer_word[i].toLowerCase())+1].toUpperCase();
					}else{
						buffer_word[i] = alphabet[alphabet.indexOf(buffer_word[i])+1];
					}
				}else{
					buffer_word[i] = number[number.indexOf(buffer_word[i])+1];
				}
			}
		}
		return buffer_word;
	}

	function getBufferedWord(text_array){
		pt = /[a-zA-Z]/;
		ptn = /[0-9]/;
		buffered_array = Array(text_array.length);
		for(var i = 0; i<text_array.length; i++){
			if(!pt.test(text_array[i]) && !ptn.test(text_array[i])){
				buffered_array[i] = text_array[i];
			}else{
				if(isNaN(text_array[i])){
					buffered_array[i] = text_array[i] == text_array[i].toUpperCase()?"A":"a";
				}else{
					buffered_array[i] = 0;
				}
			}
		}
		return buffered_array;
	}

}( jQuery ));
