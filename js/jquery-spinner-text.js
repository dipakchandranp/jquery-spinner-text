(function ( $ ) {
    $.fn.start_spinwriter = function(args,callback){
		this.css(args.css);
		text = args.text.split('');
		interval = args.interval;
		var rt = 404;
		write_text(this,text,interval,callback);
		return this;
	}

	write_text = function(ele,text,interval,callback){
		return write_next_char(ele,text,1,interval,callback)
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
			pt = /[a-zA-Z]/;
			var main_str = str.substr(0,str.length-1);
			var running_charecter = str[str.length-1];
			if(!pt.test(running_charecter) || alphabet[posi].toLowerCase() == running_charecter.toLowerCase()){
				ele.html(str);
				index = index + 1;
				write_next_char(ele,text,index,interval,callback);
			}else{
				ele.html(main_str+alphabet[posi]);	
				setTimeout(function(){
					posi = posi + 1;
					load_current_character(ele,str,posi,text,index,interval,callback);
				},interval);
			}
		}
	}

}( jQuery ));