function getQueryVariable(e){var t=window.location.search.substring(1);var i=t.split("&");for(var r=0;r<i.length;r++){var n=i[r].split("=");if(n[0]==e){return n[1]}}return false}$(document).ready(function(){window.clearIntervalid=setInterval(inithtmlload,1e3)});function inithtmlload(){if($(window).width()<500){return}if(tools.index==true||tools.page==true||tools.post==true){if($(".theme-copyright>a").text().indexOf("CorePress")==-1||$(".theme-copyright").css("visibility")!="visible"||$(".theme-copyright").css("display")=="none"||$(".theme-copyright>a").css("visibility")!="visible"||$(".theme-copyright>a").css("display")=="none"){$("html").remove();clearInterval(window.clearIntervalid)}}}function htmlEncodeByRegExp(e){return $("<div/>").text(e).html()}function htmlDecodeByRegExp(e){var t=$("<div/>").html(e).text()}function isElementInViewport(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function replaceTag(e){return e.replace("&amp;","")}function addarelt(e,t){var i='<i class="fas fa-info-circle" style="color: #515a6e"></i>';if(t=="succ"){i='<i class="fas fa-check-circle" style="color:#19be6b;"></i>'}else if(t=="erro"){i='<i class="fas fa-times-circle" style="color:#ed4014;"></i>'}var r="";$("body").append('<div class="corepress-alert"><div class="corepress-alert-main">'+i+e+"</div></div>");setTimeout(function(){$(".corepress-alert-main").addClass("corepress-alert-main-show")},20);setTimeout(function(){$(".corepress-alert-main:first").removeClass("corepress-alert-main-show")},3e3);setTimeout(function(){$(".corepress-alert:first").remove()},3500)}function JScopyText(e){copynotmsg=1;$("body").append('<div id="tem-copy" style="visibility: hidden"></div>');var t=new ClipboardJS("#tem-copy",{text:function(){return e}});$("#tem-copy").trigger("click");t.destroy();$("#tem-copy").remove()}function isChinese(e){var t=/.*[\u4e00-\u9fa5]+.*$/;if(t.test(e))return true;return false}function haveNumandLetter(e){var t=/[0-9]/;var i=/[a-z]/i;if(t.test(e)&&i.test(e))return true;return false}function isEmail(e){var t=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;if(t.test(e)!=true){return false}else{return true}}