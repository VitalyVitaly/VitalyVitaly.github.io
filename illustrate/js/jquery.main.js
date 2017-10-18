$(document).ready(function(){
			$('.slider').sly({
				horizontal: 1,
				smart: 1,
				touchDragging: 1,
				releaseSwing: 1,
				elasticBounds: 1,
				easing: 'swing',
				clickBar: 1,
				itemNav: 'basic',
				startAt: 0,
				speed: 500,
				next:'.next',
				prev:'.prev',
			});

				$('.work').sly({
				horizontal: 1,
				smart: 1,
				touchDragging: 1,
				releaseSwing: 1,
				elasticBounds: 1,
				easing: 'swing',
				clickBar: 1,
				itemNav: 'basic',
				startAt: 0,
				speed: 500,
				nextPage:'.next-work',
				prevPage:'.prev-work',
			});

				$('.blog').sly({
				horizontal: 1,
				smart: 1,
				touchDragging: 1,
				releaseSwing: 1,
				elasticBounds: 1,
				easing: 'swing',
				clickBar: 1,
				itemNav: 'basic',
				startAt: 0,
				speed: 500,
				nextPage:'.next-blog',
				prevPage:'.prev-blog',
			});
});