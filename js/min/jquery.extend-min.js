jQuery.noConflict(),function($){var n=$({});$.each({trigger:"publish",on:"subscribe",off:"unsubscribe"},function(e,t){jQuery[t]=function(){n[e].apply(n,arguments)}})}(jQuery),"function"!=typeof Object.create&&(Object.create=function(){function n(){}return function(e){return n.prototype=e,new n}}()),function($){var n=0;$(window).resize(function(){clearTimeout(n),n=setTimeout(function(){$.publish("resize/end")},500)})}(jQuery);