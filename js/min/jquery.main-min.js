!function($,e){"use strict";$(function(){function t(e,t){"undefined"==typeof t&&(t=n.height()-1),$("html, body").animate({scrollTop:e.offset().top-t},"slow")}var o=$(e),a=$("body"),n=$("#aceandtate-navbar"),i=$("#cookie-msg"),s=$(".switch-country"),c=$(".newsletter-signup"),r=document.location.toString(),l=new Date;if(l.setDate(l.getDate()+365),function(){var t=!1;if(e.jQuery){var o=$("*");$.each(["hide.bs.dropdown","hide.bs.collapse","hide.bs.modal","hide.bs.tooltip","hide.bs.popover"],function(e,a){o.on(a,function(){t=!0})})}var a=Element.hide;Element.addMethods({hide:function(e){return t?(t=!1,e):a(e)}})}(),i.length&&i.on("closed.bs.alert",function(){$(this).remove(),Mage.Cookies.set("at_cookie_read","true",l)}),s.length&&s.click(function(){Mage.Cookies.set("at_country",$(this).data("switch-country"),l)}),$(".anchor-scroll").click(function(e){e.preventDefault();var o=$(this),a=o.attr("href"),n=o.data("offset");t($(a),n)}),r.match("#")){var d=$("#"+r.split("#")[1]);d.hasClass("collapse")&&(d.collapse("toggle"),t(d.parent()))}if($("body.cms-page-view .sidebar").length&&$(".sidebar a").each(function(){var t=$(this);t.attr("href")===e.location.href.replace(e.location.hash,"").replace(/\/$/,"")&&t.addClass("active")}),c.submit(function(e){e.preventDefault();var t=$(this);$.post(t.attr("action"),t.serialize(),function(e){var o=t.find(".form-group"),a=t.find(".newsletter-success");"success"===e.status?(o.addClass("hide"),a.removeClass("hide")):(o.find(".help-block").remove(),o.addClass("has-error").append('<span class="help-block">'+e.message+"</span>"))})}),$(".catalog-category-view").length&&$(".products-grid .item .related-color").click(function(e){e.preventDefault();var t=$(this),o=t.parents(".item");t.siblings().removeClass("active"),t.addClass("active"),o.find(".product-image").attr("href",t.attr("href")),o.find(".product-name").attr("href",t.attr("href")),o.find(".product-color-name").text(t.data("color-label")),o.find(".product-image img").attr("src",t.data("image"))}),$(".catalog-product-view").length){var h=$(".btn-out-of-stock"),u=$(".aceandtate-product-headturn"),p=$("#soldout_subscription_email");if("undefined"!=typeof h.data("replacetext")&&h.hover(function(){$(this).html($(this).data("replacetext"))},function(){$(this).html($(this).data("originaltext"))}),u.each(function(){function e(){var e=t.find("img:visible"),o=e.length?i-e.offset().left:i,s=Math.floor(o/(e.width()/a.length));s>n&&n+1<=a.length-1?n++:n>s&&n-1>=0&&n--,a.hide(),a.get(n).show()}var t=$(this),a=t.find("img"),n=0,i=0,s;a.mousemove(function(e){i=e.originalEvent.touches?e.originalEvent.touches[e.originalEvent.touches.length-1].pageX:e.pageX}),a.hover(function(){s=setInterval(e,25)},function(){clearInterval(s)}),a.length&&o.resize(function(){i=a.offset().left,e()})}),p.length){var f=$("#product_addtocart_form"),g=p,v=$("#soldout_subscription_btn");g.keyup(function(){v.toggleClass("hide",""===g.val())}),f.submit(function(t){t.preventDefault(),$.post(f.attr("action"),{product:$("input[name='product']").val(),subscription_email:g.val()},function(t){t.error?e.alert(t.message):(v.after('<div class="alert alert-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> '+t.message+"</div>"),g.remove(),v.remove())},"json")})}}$("#hide-button").click(function(){return $("#need-help").slideUp("fast"),!1}),$('[data-toggle="popover"]').popover({placement:"bottom"}),$('[data-toggle="popover"]').on("click",function(e){e.preventDefault(),$('[data-toggle="popover"]').not(this).popover("hide")}),a.on("click",function(e){$('[data-toggle="popover"]').each(function(){$(this).is(e.target)||0!==$(this).has(e.target).length||0!==$(".popover").has(e.target).length||$(this).popover("hide")})}),$("#contact-form .message").on("click",function(){$(this).slideUp("slow")}),$("#line-one, #line-two, #line-three").waypoint(function(e){"down"===e&&$(this.element).addClass("animating")},{offset:"40%"}),$('<div class="select-container"><select /></div>').appendTo("#side-menu"),$("<option />",{selected:"selected",value:"",text:"Go to..."}).appendTo("#side-menu .select-container select"),$("#side-menu a").each(function(){var e=$(this);$("<option />",{value:e.attr("href"),text:e.text()}).appendTo("#side-menu .select-container select")}),$("#side-menu .select-container select").change(function(){e.location=$(this).find("option:selected").val()})})}(jQuery,window);