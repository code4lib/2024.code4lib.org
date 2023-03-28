
jQuery(document).ready(function($){

    $('.sort-workshop-time').click(function(){
        console.log('sort event - time')
        var time = $(this).attr('id');
        var place = $('.sort-workshop-locale').length ? $('.sort-workshop-locale').val() : 'all';
        $('.sort-workshop-time').removeClass('active');
        $(this).addClass('active');
        sortWorkshops(time, place);
    });

    $('.sort-workshop-locale').change(function(){
        console.log('sort event - locale')
        var time = $('.sort-workshop-time.active').length ? $('.sort-workshop-time.active').attr('id') : 'all';
        var place = $(this).val();
        sortWorkshops(time, place);
    }).trigger('change');


    function sortWorkshops(time, place){
        if (time == 'all' && place == 'all'){
            $('.workshop-well').removeClass('d-none')
        }
        if (time == 'all' && place != 'all'){
            $('.workshop-well[data-location="'+place+'"]').removeClass('d-none')
            $('.workshop-well:not([data-location="'+place+'"])').addClass('d-none')
        }
        if (time != 'all' && place == 'all'){
            $('.workshop-well[data-length="'+time+'"]').removeClass('d-none')
            $('.workshop-well:not([data-length="'+time+'"])').addClass('d-none')
        }
        if (time != 'all' && place != 'all'){
            $('.workshop-well[data-length="'+time+'"][data-location="'+place+'"]').removeClass('d-none')
            $('.workshop-well:not([data-length="'+time+'"][data-location="'+place+'"])').addClass('d-none')
        }
    }

    var lhash = decodeURIComponent(location.hash);
    if ($(lhash+'-id').length){
        setTimeout(function() {
            toggleSpeaker(lhash);
        }, 300);
    }

//    function toggleSpeaker(target){
//        if (!$(target+'-id').hasClass('selected')){
//                $('.speaker-info').removeClass('show');
//                $('.speaker-box').removeClass('selected');
//                $(target+'-info').addClass('show');
//                $(target+'-id').addClass('selected');
//            } else {
//                $(target+'-info').removeClass('show');
//                $(target+'-id').removeClass('selected');
//            }
//    }

    function toggleSpeaker(target){
        let shownHeight;

        if ($('.speaker-info.show').length){
            shownHeight = $('.speaker-info.show').height();
        } else {
            shownHeight = 0;
        }

		if($(target+'-info').hasClass('show')) {
		    $(target+'-info').removeClass('show');
            $(target+'-id').removeClass('selected');
            $(target+'-info .speaker-session a').attr('tabindex', -1);
		}
        else {
            $('.speaker-info').removeClass('show');
            $('.speaker-box').removeClass('selected');
            $(target+'-info').addClass('show');
            $(target+'-id').addClass('selected');
            $(target+'-info .speaker-session a').removeAttr('tabindex');
        }

    }

    $('.speaker-info-toggle').click(function(e){
        let toggle = $(this);

		if(toggle.attr('aria-expanded') == 'true') {
			// this toggle is already open, so close it
			toggle.attr('aria-expanded', 'false');
		}
		else {
			// any other expanded bio is now closed & this one is open
			$('.speaker-info-toggle')
				.filter((idx, el) => $(el).attr('aria-expanded') == 'true')
				.attr('aria-expanded', 'false');
			toggle.attr('aria-expanded', 'true');
		}
		let target = toggle.data('target');
        toggleSpeaker(target);
    });

    resetOrders = function(){
        var windowWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
            infoOrder = 1,
            i = 1,
            ik = 1;

        $('.speaker-sequence .speaker-box').each(function(){
            var infoTarget = $(this).data('speaker-info');
            if (windowWidth >= 992){
				// three speakers across
                $(this).css('order',i);
                infoOrder = i + 3;
                $(infoTarget).css('order',infoOrder);
                if ((i%3) == 0){
                    i = i+4;
                } else {
                    i++;
                }
            } else if (windowWidth >= 768){
				// two speakers across
                $(this).css('order',i);
                infoOrder = i + 2;
                $(infoTarget).css('order',infoOrder);
                if ((i%2) == 0){
                    i = i+3;
                } else {
                    i++;
                }
            } else {
				// 1 speaker across
                $(this).css('order',i);
                infoOrder = i + 1;
                $(infoTarget).css('order',infoOrder);
                i = i+2;
            }
        });

		infoOrder = 1,
		i = 1,
		ik = 1;
        $('.keynote-sequence .speaker-box').each(function(){
            var infoTarget = $(this).data('speaker-info')
            if (windowWidth >= 992){
				// three speakers across
                $(this).css('order',i);
                infoOrder = i + 3;
                $(infoTarget).css('order',infoOrder);
                if ((i%3) == 0){
                    i = i+4;
                } else {
                    i++;
                }
            } else if (windowWidth >= 768){
				// two speakers across
                $(this).css('order',i);
                infoOrder = i + 2;
                $(infoTarget).css('order',infoOrder);
                if ((i%2) == 0){
                    i = i+3;
                } else {
                    i++;
                }
            } else {
				// 1 speaker across
                $(this).css('order',i);
                infoOrder = i + 1;
                $(infoTarget).css('order',infoOrder);
                i = i+2;
            }
        });
    }

    resetOrders()

    var window_frame = $(window)
    var response_change = {}

    response_change.waitForIdle = function(fn, delay) {
      var timer = null
      return function () {
        var context = this,
            args = arguments;
        clearTimeout(timer)
        timer = setTimeout(function () {
          fn.apply(context, args)
        }, delay)
      }
    }

    window_frame.on('resize', response_change.waitForIdle(function() {

      if ($('.speaker-box' ).length) {
        resetOrders()
      }
    }, 100))

    // For testing:
    //var date = new Date('2018-02-15T01:00:00');
    var date = new Date();
    $('.event-day').each(function(){
        var eventDate = new Date($(this).data('date'));
        if (date > eventDate) {
            $(this).addClass('past');
        }
        if (date.getMonth() == eventDate.getMonth() && date.getDate() == eventDate.getDate()) {
            $(this).addClass('active');
        }
    });

});
