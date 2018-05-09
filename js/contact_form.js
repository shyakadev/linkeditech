$(document).ready(function(){
	$('#contactForm').on('submit',function(e){
		e.preventDefault();

		var name = $('#name').val();
		var _replyto = $('#replyto').val();
		var message = $('#message').val();

		$.ajax({
			url:'https://formspree.io/shyakadev@gmail.com',
			method: 'POST',
			data: {
				name:name,
				_replyto:_replyto,
				message: message,
				_subject: 'Contact form Submission',
			},
			dataType: "json",
			success:function(){
				console.log('success');
				$('#thanks').show();
				$('#contactForm')[0].reset();
			}
		})
	})
})