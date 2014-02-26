/*! Unmark Internal - http://unmark.it - v0.3.5 - 2014-02-26 - http://plainmade.com */ 
if(void 0===unmark)var unmark={};(function(e){unmark.ajax=function(a,t,n,i,r,o){var s=unmark.urlEncode(unmark.vars.csrf_token),r=void 0!==r?r:"json",o=void 0!==o?o:!0,l="csrf_token="+s+"&content_type="+r;n=unmark.empty(n)?l:n+"&"+l,e.ajax({dataType:r,cache:!1,url:a,type:t.toUpperCase(),data:n,async:o,success:function(a){e.isFunction(i)&&i(a)},error:function(a,t,n){var r={error:n,status:t,request:a};e.isFunction(i)&&i(r)}})},unmark.swapClass=function(a,t,n){var i=a;if(-1===t.indexOf("*"))return i.removeClass(t),n?i.addClass(n):i;var r=RegExp("\\s"+t.replace(/\*/g,"[A-Za-z0-9-_]+").split(" ").join("\\s|\\s")+"\\s","g");return i.each(function(a,t){for(var n=" "+t.className+" ";r.test(n);)n=n.replace(r," ");t.className=e.trim(n)}),n?i.addClass(n):i},unmark.replaceSpecial=function(e){if(void 0!==e&&null!==e){var a=null;for(var t in unmark.special_chars)a=RegExp(t,"gi"),e=e.replace(a,unmark.special_chars[t])}return e},unmark.urlEncode=function(e){return e=unmark.replaceSpecial(e),encodeURIComponent(e)},unmark.empty=function(e){var a=void 0!==e&&null!==e?e.length:0;return e===!1||""===e||null===e||0===e||void 0===e||1>a},unmark.createCookie=function(e,a,t){if(t){var n=new Date;n.setTime(n.getTime()+1e3*60*60*24*t);var i="; expires="+n.toGMTString()}else var i="";document.cookie=e+"="+a+i+"; path=/"},unmark.readCookie=function(e){for(var a=e+"=",t=document.cookie.split(";"),n=0;t.length>n;n++){for(var i=t[n];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(a))return i.substring(a.length,i.length)}return null},unmark.prettyLink=function(e){return e=e.replace(/https?:\/\/(www.)?/,""),"/"===e.substr(-1)&&(e=e.substr(0,e.length-1)),e}})(window.jQuery),function(e){unmark.updateDom=function(){var a=e("div.marks").data("label-class"),t=e("body");t.removeClass().addClass(a),this.update_mark_action_btns(),unmark.page_setup(e("body").height())},unmark.sidebar_collapse=function(){e(".mark").removeClass("view-inactive").removeClass("view-active"),unmark.sidebar_expand(!0),unmark.sidebar_mark_info.fadeOut(400,function(){unmark.sidebar_default.fadeIn(400)})},unmark.sidebar_expand=function(e){var a=unmark.sidebar_content.find('a[data-action="sidebar_expand"] i');a.hasClass("icon-heading_collapse")||e===!0?unmark.sidebar_content.animate({width:"42.17749%"},800,function(){a.removeClass("icon-heading_collapse").addClass("icon-heading_expand")}):unmark.sidebar_content.animate({width:"75%"},800,function(){a.removeClass("icon-heading_expand").addClass("icon-heading_collapse")})},unmark.hideNavigation=function(){unmark.nav_panel.animate({left:-285},{duration:200,queue:!1}),unmark.main_panel.animate({left:65},{duration:200,queue:!1}),e(".nav-panel").hide(),e(".menu-item").removeClass("active-menu"),e(".navigation-pane-links").show(),e(".menu-activator i").removeClass("icon-menu_close").addClass("icon-menu_open")},unmark.interact_nav=function(a,t){var n=t.attr("href"),i=n.replace(/^#/,""),r=parseInt(t.attr("rel")),o=r+65,s=t.parent(),l=parseInt(unmark.nav_panel.css("left"));return unmark.sidebar_collapse(),n.match(/\//)?(unmark.hideNavigation(),!0):(a.preventDefault(),s.hasClass("active-menu")?(e(".menu-item").removeClass("active-menu"),unmark.hideNavigation()):(e(".menu-item").removeClass("active-menu"),e(".navigation-content").find("[data-menu='"+i+"']").addClass("active-menu"),"#panel-menu"===n&&l>0?unmark.hideNavigation():(e(".menu-activator i").removeClass("icon-menu_open").addClass("icon-menu_close"),unmark.nav_panel.animate({left:65},{duration:200,queue:!1}),unmark.main_panel.animate({left:o},{duration:200,queue:!1}),unmark.nav_panel.animate({width:r},200),unmark.nav_panel.find(".nav-panel").animate({width:r},200),"#panel-menu"===n?(e(".navigation-pane-links").show(),e(".nav-panel").hide()):(e(".navigation-pane-links").hide(),e(".nav-panel").not(n).hide(),e(n).show()),void 0)))},unmark.scrollPaginate=function(e){var a,t,n,i,r,o="",i=window.unmark_current_page+1,s=window.unmark_total_pages;e.scrollTop()+e.innerHeight()>=e[0].scrollHeight&&s>=i&&(n=Hogan.compile(unmark.template.marks),a=window.location.pathname,unmark.ajax(a+"/"+i,"post","",function(e){if(e.marks){for(r=Object.keys(e.marks).length,t=1;r>t;t++)e.marks[t].prettyurl=unmark.prettyLink(e.marks[t].url),o+=n.render(e.marks[t]);unmark.main_content.find(".marks_list").append(o),window.unmark_current_page=i,unmark.update_mark_action_btns()}}))},unmark.updateCounts=function(){unmark.getData("stats",function(a){var t=a.stats.archived,n=a.stats.saved,i=a.stats.marks;e(".na-today").text(t.today),e(".ns-year").text(i["ages ago"]),unmark.createGraph(t["4 days ago"],t["3 days ago"],t["2 days ago"],t.yesterday,t.today,n["4 days ago"],n["3 days ago"],n["2 days ago"],n.yesterday,n.today)})},unmark.getData=function(e,a){unmark.ajax("/marks/get/"+e,"post","",a)},unmark.close_window=function(){window.close()},unmark.dismiss_this=function(e){e.parent().parent().fadeOut()},unmark.page_setup=function(a){unmark.main_content.height(a),unmark.sidebar_content.height(a),e(".nav-panel").height(a),e("body").height(a)},unmark.overlay=function(a){if(a){unmark.mainpanels.addClass("blurme");var t=e('<div id="unmark-overlay"><a href="#" id="unmarkModalClose"><i class="icon-big_close"></i></a></div>');t.appendTo(document.body)}else e(".hiddenform").hide().css("top","-300px"),unmark.mainpanels.removeClass("blurme"),e("#unmark-overlay").remove()},unmark.awesome=function(){return alert("Awesome Enabled! (this does nothing)")}}(window.jQuery),function(e){unmark.show_mark_info=function(a){function t(a){var t=unmark.label_list(a);e("ul.sidebar-label-list").prepend(t)}var n,i,r=a.data("mark"),o=e("#"+r).html(),s=jQuery.parseJSON(o),l=r.replace("mark-data-",""),u=e("#mark-"+l).find(".note-placeholder").text();e(".mark").removeClass("view-inactive").removeClass("view-active"),e(".mark").not("#mark-"+l).addClass("view-inactive"),e("#mark-"+l).addClass("view-active"),""!==u&&(s.notes=u),n=Hogan.compile(unmark.template.sidebar),i=n.render(s),unmark.sidebar_mark_info.fadeOut(400,function(){unmark.sidebar_default.is(":visible")?unmark.sidebar_default.fadeOut(400,function(){unmark.sidebar_mark_info.html(i).fadeIn(400,function(){unmark.tagify_notes(e("#notes-"+l)),unmark.getData("labels",t),e("section.sidebar-info-preview").fitVids()})}):unmark.sidebar_mark_info.html(i).fadeIn(400,function(){unmark.tagify_notes(e("#notes-"+l)),unmark.getData("labels",t),e("section.sidebar-info-preview").fitVids()})})},unmark.update_label_count=function(){function a(e){var a,n,i=e.labels;for(a in i)n=i[a].total_active_marks,"1"===n?n+=" link":"0"===n?n="no links":n+=" links",t.find(".label-"+i[a].label_id+" span").text(n)}var t=e("ul.label-list");unmark.getData("labels",a),unmark.updateCounts()},unmark.get_mark_info=function(a){var t;unmark.ajax("/mark/info/"+a,"post","",function(n){t=n.mark,t=JSON.stringify(t),e("#mark-data-"+a).html(t)})},unmark.mark_archive=function(a){var t=a.data("id");unmark.ajax("/mark/archive/"+t,"post","",function(a){null!==a.mark.archived_on?(e("#mark-"+t).fadeOut(),unmark.sidebar_collapse(),unmark.update_label_count()):alert("Sorry, We could not archive this mark at this time.")})},unmark.mark_restore=function(a){var t=a.data("id");unmark.ajax("/mark/restore/"+t,"post","",function(a){null===a.mark.archived_on?(e("#mark-"+t).fadeOut(),unmark.sidebar_collapse()):alert("Sorry, We could not restore this mark at this time.")})},unmark.archive_all=function(){unmark.ajax("/marks/archive/old","post","",function(e){e.archived===!0?window.location="/marks":alert("Sorry, We could not archive the links at this time. Please try again.")})},unmark.marks_editNotes=function(a){var t,n,i=a.next();i.unbind(),a.html("EDIT NOTES"),i.attr("contenteditable",!0),i.find("span.action").remove(),i.is(":empty")&&i.html("Click here to edit"),i.on("blur keydown",function(r){(13===r.which||"blur"===r.type)&&(r.preventDefault(),t=e(this).text(),id=e(this).data("id"),"Click here to edit"===t?e(this).empty().html('<span class="action" data-action="marks_clickEdit">Add a note or #hashtags ...</span>'):(n="notes="+unmark.urlEncode(t),unmark.ajax("/mark/edit/"+id,"post",n,function(){a.html('Notes <i class="icon-edit"></i>'),i.attr("contenteditable",!1),e("#mark-"+id).find(".note-placeholder").text(i.text())}),i.unbind(),unmark.tagify_notes(i)))})},unmark.marks_clickEdit=function(e){e.parent().prev().trigger("click")},unmark.marks_addNotes=function(a){var t,n,i=a.next();return i.is(":visible")?i.slideUp():(i.unbind(),i.slideDown(),i.attr("contenteditable",!0),i.is(":empty")&&i.html("Type note text here..."),i.on("blur keydown",function(a){(13===a.which||"blur"===a.type)&&(a.preventDefault(),t=e(this).text(),id=e(this).data("id"),n="notes="+unmark.urlEncode(t),unmark.ajax("/mark/edit/"+id,"post",n,function(){i.attr("contenteditable",!1),i.slideUp(),i.prev().text("Edit Note")}),i.unbind())}),void 0)},unmark.marks_addLabel=function(a){var t,n,i,r,o,s,l=a.next(),u=a.parent();return l.is(":visible")?l.fadeOut():(l.find("a").unbind(),l.fadeIn(),l.find("a").on("click",function(c){c.preventDefault(),t=l.data("id"),n=e(this).attr("rel"),r=e(this).text(),o=e("body").attr("class"),s=RegExp("label"),i="label_id="+n,unmark.ajax("/mark/edit/"+t,"post",i,function(){l.fadeOut(),a.text(r),unmark.swapClass(a,"label-*","label-"+n),l.find("a").unbind(),u.hasClass("sidebar-label")&&(unmark.swapClass(u,"label-*","label-"+n),unmark.swapClass(e("#mark-"+t),"label-*","label-"+n),unmark.get_mark_info(t),unmark.update_label_count(),s.test(o)&&o!=="label-"+n&&(e("#mark-"+t).fadeOut(),unmark.sidebar_collapse()))})}),void 0)},unmark.label_list=function(e){var a,t,n=e.labels,i="";for(a in n)t=n[a],i+='<li class="label-'+t.label_id+'"><a href="#" rel="'+t.label_id+'"><span>'+t.name+"</span></a></li>";return i},unmark.tagify_notes=function(e){var a=e.text();a=""===a?'<span class="action" data-action="marks_clickEdit">Add a note or #hashtags ...</span>':a.replace(/#(\S*)/g,'<a href="/marks/tag/$1">#$1</a>'),e.html(a)},unmark.delete_mark=function(a){var t=a.data("id"),n=a.data("view");unmark.ajax("/mark/delete/"+t,"post","",function(a){"0"===a.mark.active?"bookmarklet"===n?unmark.close_window():(unmark.sidebar_collapse(),e("#mark-"+t).fadeOut()):alert("This mark could not be deleted, please try again laster.")})},unmark.update_mark_action_btns=function(){e(".mark").each(function(){var a=e(this).outerHeight(!0),t=a/2;e(this).find(".mark-actions a").each(function(){e(this).height(t)})})}}(window.jQuery),function(e){e(document).ready(function(){function a(a){var t=unmark.label_list(a);e("ul.label-choices").prepend(t)}unmark.getData("labels",a)})}(window.jQuery),function($){unmark.init=function(){this.nav_panel=$(".navigation-pane"),this.main_panel=$(".main-wrapper"),this.main_content=$(".main-content"),this.sidebar_content=$(".sidebar-content"),this.main_panel_width=unmark.main_panel.width(),this.sidebar_default=$(".sidebar-default"),this.sidebar_mark_info=$(".sidebar-mark-info"),this.body_height=$(window).outerHeight(!0),this.special_chars={"\\+":"&#43;"},this.mainpanels=$("#unmark-wrapper"),unmark.main_panel.width(unmark.main_panel_width),unmark.page_setup(unmark.body_height),$(window).on("resize",function(){unmark.page_setup($(window).outerHeight(!0))}),window.unmark_current_page=1,$("body").animate({opacity:1},1e3),$(".navigation-content a, .navigation-pane-links a").on("click",function(e){unmark.interact_nav(e,$(this))}),unmark.update_mark_action_btns(),$(document).on("mouseenter",".mark",function(){$(this).addClass("hide-dot"),$(this).find(".mark-actions").show()}),$(document).on("mouseleave",".mark",function(){$(this).removeClass("hide-dot"),$(this).find(".mark-actions").hide()}),$(document).on("click","button[data-action], .action",function(e){e.preventDefault();var action=$(this).data("action"),funct;funct=eval("unmark."+action),funct($(this)),unmark.hideNavigation()}),$(document).on("click",".sidebar-info-panel h4.prev-coll",function(e){e.preventDefault();var a=$(this).next("section"),t=$(this).find("i");a.is(":visible")?(t.removeClass("icon-up"),t.addClass("icon-down"),a.slideUp()):(t.removeClass("icon-down"),t.addClass("icon-up"),a.slideDown())}),$(document).on("click",".mark",function(e){var a=e.target.nodeName,t=$(this).find("a.mark-info");"A"!==a&&"I"!==a&&e.preventDefault(),"I"!==a&&unmark.show_mark_info(t),unmark.hideNavigation()}),$("#unmark").length>0&&($(document).pjax("a[href*='/']",unmark.main_content),$(document).on("submit","#search-form",function(e){$.pjax.submit(e,unmark.main_content)}),$(document).on("pjax:complete",function(){window.unmark_current_page=1,unmark.main_content.scrollTop(0),unmark.main_content.find(".marks").hide().fadeIn(),unmark.updateDom()})),$("form.ajaxsbmt").on("submit",function(e){e.preventDefault();var form=$(this),formid=form.attr("id");funct=eval("unmark."+formid),funct(form,e)}),$("#helperforms input.field-input").on("keydown change",function(){$(this).parent().parent().find(".response-message").hide()}),$(document).on("click","#unmarkModalClose",function(e){return e.preventDefault(),unmark.overlay(!1)}),$(document).on("mouseenter",".label-choices li, .sidebar-label-list li",function(){var e=$(this),a=e.find("span").text(),t=e.attr("class");$("#label-chosen").show().text(a).removeClass().addClass(t)}),$(document).on("mouseleave",".label-choices li, .sidebar-label-list li",function(){$("#label-chosen").show().hide()}),unmark.main_content.on("scroll",function(){unmark.scrollPaginate($(this))}),$(".importer").change(function(){return $("#importForm").submit()})},$(document).ready(function(){unmark.init()})}(window.jQuery);