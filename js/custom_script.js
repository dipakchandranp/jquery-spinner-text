$(function(){

	$('.modal-trigger').leanModal();

	var demo_properties = {
		demo_1 : {
			'text':'Simple Spinner Text'
		},
        demo_2 : {
            'text':'Text with interval 100ms',
            'interval':100
        },
        demo_3 : {
            'text':'<b>Bolded</b> Text'
        },
        demo_4 : {
            'text':'Whole text provided will be start loading together, from "a/A" for alphabets and  from "0" for numbers. Following is a sample text. Lore impsum is a free dummy text which is used in loat of bla bla bla, and the number is 34787495 bla bla 89874.',
            'interval': 50,
            'mode':1
        },
        demo_5 : {},
        demo_6 : {},
	}

	$('[data-element-id]').on('click',function(e){
		container_id = e.currentTarget.getAttribute('data-element-id');
		$('#'+container_id).start_spinwriter(demo_properties[container_id]);
	});

	$("#heading").start_spinwriter({
		'text':'jQuery Spinner Text',
		'interval': 25,
		'css':{},
		'mode':1
	});

});
