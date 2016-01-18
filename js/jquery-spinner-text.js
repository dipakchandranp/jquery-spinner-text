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

}( jQuery ));
