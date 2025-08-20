/* Main JS: AJAX navigation, typing effect, AOS init, responsive nav */
(function($){
	// AOS init
	if (window.AOS) AOS.init({ once: true, offset: 80, duration: 600 });

	// Mobile menu toggle
	$('.btn-toggle').on('click', function(){
		$('.menu').slideToggle(160);
	});

	// Mobile dropdown fallback
	$('.has-dropdown > a').on('click', function(e){
		if (window.matchMedia('(max-width: 640px)').matches) {
			e.preventDefault();
			$(this).siblings('.dropdown').slideToggle(160);
		}
	});

	// Typing effect for index hero
	var typing = {
		el: document.getElementById('typing'),
		words: ['Freelancer', 'Web Developer', 'Problem Solver'],
		i: 0, j: 0, deleting: false,
		tick: function(){
			if(!this.el) return;
			var current = this.words[this.i];
			var speed = this.deleting ? 50 : 110;
			this.el.textContent = current.substring(0, this.j);
			if(this.deleting){
				this.j--;
				if(this.j < 0){
					this.deleting = false;
					this.i = (this.i+1) % this.words.length;
					this.j = 0;
					setTimeout(this.tick.bind(this), 300);
					return;
				}
			} else {
				this.j++;
				if(this.j > current.length + 6){
					this.deleting = true;
				}
			}
			setTimeout(this.tick.bind(this), speed);
		}
	};
	typing.tick();

	// AJAX navigation: links with data-ajax
	function ajaxLoad(url, target){
		var $target = $(target || '#page-container');
		if(!$target.length) $target = $('#page-container');
		$target.addClass('loading');
		return $.get(url, function(html){
			try {
				var $dom = $('<div>').html(html);
				var $main = $dom.find('main#cv');
				if(!$main.length) $main = $dom.find('main');
				var content = $main.length ? $main.html() : $dom.find('body').html();
				$target.html(content);
				window.scrollTo({ top: $target.offset().top - 70, behavior: 'smooth' });
				if (window.AOS) AOS.refreshHard();
			} catch(err){
				console.error(err);
				$target.html('<div class="container"><div class="card"><p>Không thể tải nội dung. Thử mở trực tiếp: <a href="'+url+'">'+url+'</a></p></div></div>');
			}
		}).fail(function(){
			$target.html('<div class="container"><div class="card"><p>Lỗi tải trang. Thử mở trực tiếp: <a href="'+url+'">'+url+'</a></p></div></div>');
		}).always(function(){
			$target.removeClass('loading');
		});
	}

	// Intercept clicks
	$(document).on('click', 'a[data-ajax]', function(e){
		if (e.metaKey || e.ctrlKey || e.shiftKey || e.which === 2) return;
		e.preventDefault();
		var url = $(this).attr('href');
		var target = $(this).data('target') || '#page-container';
		history.pushState({ url: url, target: target }, '', '#!' + url);
		ajaxLoad(url, target);
	});

	// Handle back/forward
	window.addEventListener('popstate', function(ev){
		var state = ev.state;
		if(state && state.url){
			ajaxLoad(state.url, state.target);
		}
	});

})(jQuery);
