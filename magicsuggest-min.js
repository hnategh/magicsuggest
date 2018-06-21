!function(w){"use strict";var s=function(e,t){var c=this,n=w.extend({},t),l=w.extend(!0,{},{allowFreeEntries:!0,allowDuplicates:!1,ajaxConfig:{},autoSelect:!0,selectFirst:!1,queryParam:"query",beforeSend:function(){},cls:"",data:null,dataUrlParams:{},disabled:!1,disabledField:null,displayField:"name",editable:!0,editModeEnabled:!1,expanded:!1,expandOnFocus:!1,groupBy:null,hideTrigger:!1,highlight:!0,id:null,infoMsgCls:"",inputCfg:{},invalidCls:"ms-inv",matchCase:!1,maxDropHeight:290,maxEntryLength:null,maxEntryRenderer:function(e){return"Please reduce your entry by "+e+" character"+(1<e?"s":"")},maxSuggestions:null,maxSelection:10,maxSelectionRenderer:function(e){return"You cannot choose more than "+e+" item"+(1<e?"s":"")},method:"POST",minChars:0,minCharsRenderer:function(e){return"Please type "+e+" more character"+(1<e?"s":"")},mode:"local",name:null,noSuggestionText:"No suggestions",placeholder:"Type or click here",renderer:null,required:!1,resultAsString:!1,resultAsStringDelimiter:",",resultsField:"results",selectionCls:"",selectionContainer:null,selectionPosition:"inner",selectionRenderer:null,selectionStacked:!1,sortDir:"asc",sortOrder:null,strictSuggest:!1,style:"",toggleOnClick:!1,typeDelay:400,useTabKey:!1,useCommaKey:!0,useZebraStyle:!1,value:null,valueField:"id",vregex:null,vtype:null},n);this.addToSelection=function(e,t){if(!l.maxSelection||d.length<l.maxSelection){w.isArray(e)||(e=[e]);var n=!1;w.each(e,function(e,t){(l.allowDuplicates||-1===w.inArray(t[l.valueField],c.getValue()))&&(d.push(t),n=!0)}),!0===n&&(S._renderSelection(),this.empty(),!0!==t&&w(this).trigger("selectionchange",[this,this.getSelection()]))}this.input.attr("placeholder","inner"===l.selectionPosition&&0<this.getValue().length?"":l.placeholder)},this.clear=function(e){this.removeFromSelection(d.slice(0),e)},this.collapse=function(){!0===l.expanded&&(this.combobox.detach(),l.expanded=!1,w(this).trigger("collapse",[this]))},this.disable=function(){this.container.addClass("ms-ctn-disabled"),l.disabled=!0,c.input.attr("disabled",!0)},this.empty=function(){this.input.val("")},this.enable=function(){this.container.removeClass("ms-ctn-disabled"),l.disabled=!1,c.input.attr("disabled",!1)},this.expand=function(){!l.expanded&&(this.input.val().length>=l.minChars||0<this.combobox.children().length)&&(this.combobox.appendTo(this.container),S._processSuggestions(),l.expanded=!0,w(this).trigger("expand",[this]))},this.isDisabled=function(){return l.disabled},this.isValid=function(){var n=!1===l.required||0<d.length;return(l.vtype||l.vregex)&&w.each(d,function(e,t){n=n&&S._validateSingleItem(t[l.valueField])}),n},this.getDataUrlParams=function(){return l.dataUrlParams},this.getName=function(){return l.name},this.getSelection=function(){return d},this.getRawValue=function(){return c.input.val()},this.getValue=function(){return w.map(d,function(e){return e[l.valueField]})},this.removeFromSelection=function(e,t){w.isArray(e)||(e=[e]);var i=!1;w.each(e,function(e,t){var n=w.inArray(t[l.valueField],c.getValue());-1<n&&(d.splice(n,1),i=!0)}),!0===i&&(S._renderSelection(),!0!==t&&w(this).trigger("selectionchange",[this,this.getSelection()]),l.expandOnFocus&&c.expand(),l.expanded&&S._processSuggestions()),this.input.attr("placeholder","inner"===l.selectionPosition&&0<this.getValue().length?"":l.placeholder)},this.getData=function(){return o},this.setData=function(e){l.data=e,S._processSuggestions()},this.setMaxSelection=function(e){l.maxSelection=e},this.setName=function(e){(l.name=e)&&(l.name+=0<e.indexOf("[]")?"":"[]"),c._valueContainer&&w.each(c._valueContainer.children(),function(e,t){t.name=l.name})},this.setSelection=function(e){this.clear(),this.addToSelection(e)},this.setValue=function(e){var a=[];w.each(e,function(e,n){var i=!1;if(w.each(o,function(e,t){if(t[l.valueField]==n)return a.push(t),!(i=!0)}),!i)if("object"==typeof n)a.push(n);else{var t={};t[l.valueField]=n,t[l.displayField]=n,a.push(t)}}),0<a.length&&this.addToSelection(a)},this.setDataUrlParams=function(e){l.dataUrlParams=w.extend({},e)};var s,d=[],u=0,i=!1,r=null,o=[],g=!1,m=!1,a=8,p=9,h=13,f=17,v=27,b=32,x=38,y=40,C=188,S={_displaySuggestions:function(e){c.combobox.show(),c.combobox.empty();var t=0,n=0;if(null===r)S._renderComboItems(e),t=u*e.length;else{for(var i in r)n+=1,w("<div/>",{class:"ms-res-group",html:i}).appendTo(c.combobox),S._renderComboItems(r[i].items,!0);var a=c.combobox.find(".ms-res-group").outerHeight();if(null!==a){var s=n*a;t=u*e.length+s}else t=u*(e.length+n)}if(t<c.combobox.height()||t<=l.maxDropHeight?c.combobox.height(t):t>=c.combobox.height()&&t>l.maxDropHeight&&c.combobox.height(l.maxDropHeight),1===e.length&&!0===l.autoSelect&&c.combobox.children().filter(":not(.ms-res-item-disabled):last").addClass("ms-res-item-active"),!0===l.selectFirst&&c.combobox.children().filter(":not(.ms-res-item-disabled):first").addClass("ms-res-item-active"),0===e.length&&""!==c.getRawValue()){var o=l.noSuggestionText.replace(/\{\{.*\}\}/,c.input.val());S._updateHelper(o),c.collapse()}!1===l.allowFreeEntries&&(0===e.length?(w(c.input).addClass(l.invalidCls),c.combobox.hide()):w(c.input).removeClass(l.invalidCls))},_getEntriesFromStringArray:function(e){var i=[];return w.each(e,function(e,t){var n={};n[l.displayField]=n[l.valueField]=w.trim(t),i.push(n)}),i},_highlightSuggestion:function(e){var n=c.input.val();if(w.each(["^","$","*","+","?",".","(",")",":","!","|","{","}","[","]"],function(e,t){n=n.replace(t,"\\"+t)}),0===n.length)return e;var t=!0===l.matchCase?"g":"gi";return e.replace(new RegExp("("+n+")(?!([^<]+)?>)",t),"<em>$1</em>")},_moveSelectedRow:function(e){var t,n,i,a;l.expanded||c.expand(),t=c.combobox.find(".ms-res-item:not(.ms-res-item-disabled)"),n="down"===e?t.eq(0):t.filter(":last"),0<(i=c.combobox.find(".ms-res-item-active:not(.ms-res-item-disabled):first")).length&&("down"===e?(0===(n=i.nextAll(".ms-res-item:not(.ms-res-item-disabled)").first()).length&&(n=t.eq(0)),a=c.combobox.scrollTop(),c.combobox.scrollTop(0),n[0].offsetTop+n.outerHeight()>c.combobox.height()&&c.combobox.scrollTop(a+u)):(0===(n=i.prevAll(".ms-res-item:not(.ms-res-item-disabled)").first()).length&&(n=t.filter(":last"),c.combobox.scrollTop(u*t.length)),n[0].offsetTop<c.combobox.scrollTop()&&c.combobox.scrollTop(c.combobox.scrollTop()-u))),t.removeClass("ms-res-item-active"),n.addClass("ms-res-item-active")},_processSuggestions:function(e){var t=null,n=e||l.data;if(null!==n){if("function"==typeof n&&(n=n.call(c,c.getRawValue(),l)),"string"==typeof n){w(c).trigger("beforeload",[c]);var i={};i[l.queryParam]=c.input.val();var a=w.extend(i,l.dataUrlParams);return void w.ajax(w.extend({type:l.method,url:n,data:a,beforeSend:l.beforeSend,success:function(e){t="string"==typeof e?JSON.parse(e):e,S._processSuggestions(t),w(c).trigger("load",[c,t]),S._asyncValues&&(c.setValue("string"==typeof S._asyncValues?JSON.parse(S._asyncValues):S._asyncValues),S._renderSelection(),delete S._asyncValues)},error:function(){throw"Could not reach server"}},l.ajaxConfig))}o=0<n.length&&"string"==typeof n[0]?S._getEntriesFromStringArray(n):n[l.resultsField]||n;var s="remote"===l.mode?o:S._sortAndTrim(o);S._displaySuggestions(S._group(s))}},_render:function(e){if(c.setName(l.name),c.container=w("<div/>",{class:"ms-ctn form-control "+(l.resultAsString?"ms-as-string ":"")+l.cls+(w(e).hasClass("input-lg")?" input-lg":"")+(w(e).hasClass("input-sm")?" input-sm":"")+(!0===l.disabled?" ms-ctn-disabled":"")+(!0===l.editable?"":" ms-ctn-readonly")+(!1===l.hideTrigger?"":" ms-no-trigger"),style:l.style,id:l.id}),c.container.on("focus",w.proxy(_._onFocus,this)),c.container.on("blur",w.proxy(_._onBlur,this)),c.container.on("keydown",w.proxy(_._onKeyDown,this)),c.container.on("keyup",w.proxy(_._onKeyUp,this)),c.input=w("<input/>",w.extend({type:"text",class:!0===l.editable?"":" ms-input-readonly",readonly:!l.editable,placeholder:l.placeholder,disabled:l.disabled},l.inputCfg)),c.input.on("focus",w.proxy(_._onInputFocus,this)),c.input.on("click",w.proxy(_._onInputClick,this)),c.combobox=w("<div/>",{class:"ms-res-ctn dropdown-menu"}).height(l.maxDropHeight),c.combobox.on("click","div.ms-res-item",w.proxy(_._onComboItemSelected,this)),c.combobox.on("mouseover","div.ms-res-item",w.proxy(_._onComboItemMouseOver,this)),l.selectionContainer?(c.selectionContainer=l.selectionContainer,w(c.selectionContainer).addClass("ms-sel-ctn")):c.selectionContainer=w("<div/>",{class:"ms-sel-ctn"}),c.selectionContainer.on("click",w.proxy(_._onFocus,this)),"inner"!==l.selectionPosition||l.selectionContainer?c.container.append(c.input):c.selectionContainer.append(c.input),c.helper=w("<span/>",{class:"ms-helper "+l.infoMsgCls}),S._updateHelper(),c.container.append(c.helper),w(e).replaceWith(c.container),!l.selectionContainer)switch(l.selectionPosition){case"bottom":c.selectionContainer.insertAfter(c.container),!0===l.selectionStacked&&(c.selectionContainer.width(c.container.width()),c.selectionContainer.addClass("ms-stacked"));break;case"right":c.selectionContainer.insertAfter(c.container),c.container.css("float","left");break;default:c.container.append(c.selectionContainer)}!1===l.hideTrigger&&(c.trigger=w("<div/>",{class:"ms-trigger",html:'<div class="ms-trigger-ico"></div>'}),c.trigger.on("click",w.proxy(_._onTriggerClick,this)),c.container.append(c.trigger)),w(window).on("resize",w.proxy(_._onWindowResized,this)),null===l.value&&null===l.data||!c.container.is(":visible")||("string"==typeof l.data?(S._asyncValues=l.value,S._processSuggestions()):(S._processSuggestions(),null!==l.value&&(c.setValue(l.value),S._renderSelection()))),w("body").on("click",function(e){c.container.hasClass("ms-ctn-focus")&&0===c.container.has(e.target).length&&e.target.className.indexOf("ms-res-item")<0&&e.target.className.indexOf("ms-close-btn")<0&&c.container[0]!==e.target&&_._onBlur()}),!0===l.expanded&&(l.expanded=!1,c.expand())},_renderComboItems:function(e,s){var o=this,r="";w.each(e,function(e,t){var n=null!==l.renderer?l.renderer.call(o,t):t[l.displayField],i=null!==l.disabledField&&!0===t[l.disabledField],a=w("<div/>",{class:"ms-res-item "+(s?"ms-res-item-grouped ":"")+(i?"ms-res-item-disabled ":"")+(e%2==1&&!0===l.useZebraStyle?"ms-res-odd":""),html:!0===l.highlight?S._highlightSuggestion(n):n,"data-json":JSON.stringify(t)});r+=w("<div/>").append(a).html()}),c.combobox.append(r),u=c.combobox.find(".ms-res-item:first").outerHeight()},_renderSelection:function(){var s=this,e=0,t=0,o=[],r=!0===l.resultAsString&&!i;if(c.selectionContainer.find(".ms-sel-item").remove(),void 0!==c._valueContainer&&c._valueContainer.remove(),w.each(d,function(e,t){var n,i=null!==l.selectionRenderer?l.selectionRenderer.call(s,t):t[l.displayField],a=S._validateSingleItem(t[l.displayField])?"":" ms-sel-invalid";!0===r?n=w("<div/>",{class:"ms-sel-item ms-sel-text "+l.selectionCls+a,html:i+(e===d.length-1?"":l.resultAsStringDelimiter)}).data("json",t):(n=w("<div/>",{class:"ms-sel-item "+l.selectionCls+a,html:i}).data("json",t),!1===l.disabled&&(w("<span/>",{class:"ms-close-btn"}).data("json",t).appendTo(n).on("click",w.proxy(_._onTagTriggerClick,s)),!0!==l.allowFreeEntries||!0!==l.editModeEnabled||Number.isInteger(parseInt(t.id))||w("<span/>",{class:"ms-edit-btn"}).data("json",t).prependTo(n).on("click",w.proxy(_._onTagEditTriggerClick,s)))),o.push(n)}),c.selectionContainer.prepend(o),c._valueContainer=w("<div/>",{style:"display: none;"}),w.each(c.getValue(),function(e,t){w("<input/>",{type:"hidden",name:l.name,value:t}).appendTo(c._valueContainer)}),c._valueContainer.appendTo(c.selectionContainer),"inner"===l.selectionPosition&&!l.selectionContainer&&(c.container.is(":visible")||0<c.getValue().length)){var n=c.input.outerWidth(!0)-c.input.width();c.input.width(0),t=Math.max(0,c.input.offset().left-c.selectionContainer.offset().left),e=c.container.width()-t-(l.hideTrigger?n:42),c.input.width(e)}d.length===l.maxSelection?S._updateHelper(l.maxSelectionRenderer.call(this,d.length)):c.helper.hide()},_selectItem:function(e){1===l.maxSelection&&(d=[]),c.addToSelection(e.data("json")),e.removeClass("ms-res-item-active"),!1!==l.expandOnFocus&&d.length!==l.maxSelection||c.collapse(),i?i&&(l.expandOnFocus||g)&&(S._processSuggestions(),g&&c.expand()):c.input.trigger("focus")},_sortAndTrim:function(e){var i=c.getRawValue(),a=[],n=[],s=c.getValue();return 0<i.length?w.each(e,function(e,t){var n=t[l.displayField];(!0===l.matchCase&&-1<n.indexOf(i)||!1===l.matchCase&&-1<n.toLowerCase().indexOf(i.toLowerCase()))&&(!1!==l.strictSuggest&&0!==n.toLowerCase().indexOf(i.toLowerCase())||a.push(t))}):a=e,w.each(a,function(e,t){(l.allowDuplicates||-1===w.inArray(t[l.valueField],s))&&n.push(t)}),null!==l.sortOrder&&n.sort(function(e,t){return e[l.sortOrder]<t[l.sortOrder]?"asc"===l.sortDir?-1:1:e[l.sortOrder]>t[l.sortOrder]?"asc"===l.sortDir?1:-1:0}),l.maxSuggestions&&0<l.maxSuggestions&&(n=n.slice(0,l.maxSuggestions)),n},_group:function(e){return null!==l.groupBy&&(r={},w.each(e,function(e,t){var n=-1<l.groupBy.indexOf(".")?l.groupBy.split("."):l.groupBy,i=t[l.groupBy];if("string"!=typeof n)for(i=t;0<n.length;)i=i[n.shift()];void 0===r[i]?r[i]={title:i,items:[t]}:r[i].items.push(t)})),e},_updateHelper:function(e){c.helper.html(e),c.helper.is(":visible")||c.helper.fadeIn()},_validateSingleItem:function(e){if(null!==l.vregex&&l.vregex instanceof RegExp)return l.vregex.test(e);if(null!==l.vtype)switch(l.vtype){case"alpha":return/^[a-zA-Z_]+$/.test(e);case"alphanum":return/^[a-zA-Z0-9_]+$/.test(e);case"email":return/^(\w+)([\-+.][\w]+)*@(\w[\-\w]*\.){1,5}([A-Za-z]){2,6}$/.test(e);case"url":return/(((^https?)|(^ftp)):\/\/([\-\w]+\.)+\w{2,3}(\/[%\-\w]+(\.\w{2,})?)*(([\w\-\.\?\\\/+@&#;`~=%!]*)(\.\w{2,})?)*\/?)/i.test(e);case"ipaddress":return/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(e)}return!0}},_={_onBlur:function(){if(c.container.removeClass("ms-ctn-focus"),c.collapse(),i=m=!1,""!==c.getRawValue()&&!0===l.allowFreeEntries){var e={};e[l.displayField]=e[l.valueField]=w.trim(c.getRawValue()),c.addToSelection(e)}S._renderSelection(),!1===c.isValid()?c.container.addClass(l.invalidCls):""!==c.input.val()&&!1===l.allowFreeEntries&&(c.empty(),S._updateHelper("")),w(c).trigger("blur",[c])},_onComboItemMouseOver:function(e){var t=w(e.currentTarget);t.hasClass("ms-res-item-disabled")||(c.combobox.children().removeClass("ms-res-item-active"),t.addClass("ms-res-item-active"))},_onComboItemSelected:function(e){w(e.currentTarget).hasClass("ms-res-item-disabled")||S._selectItem(w(e.currentTarget))},_onFocus:function(){m||c.input.trigger("focus")},_onInputClick:function(){!1===c.isDisabled()&&i&&!m&&!0===l.toggleOnClick&&(l.expanded?c.collapse():c.expand())},_onInputFocus:function(){if(!1===c.isDisabled()&&!i&&!m){i=!0,c.container.addClass("ms-ctn-focus"),c.container.removeClass(l.invalidCls);var e=c.getRawValue().length;!0===l.expandOnFocus&&c.expand(),d.length===l.maxSelection?S._updateHelper(l.maxSelectionRenderer.call(this,d.length)):e<l.minChars&&S._updateHelper(l.minCharsRenderer.call(this,l.minChars-e)),setTimeout(function(){S._renderSelection()},400),w(c).trigger("focus",[c])}},_onKeyDown:function(e){if(!m){var t=c.combobox.find(".ms-res-item-active:not(.ms-res-item-disabled):first"),n=c.input.val();if(w(c).trigger("keydown",[c,e]),e.keyCode!==p||!1!==l.useTabKey&&(!0!==l.useTabKey||0!==t.length||0!==c.input.val().length))switch(e.keyCode){case a:0===n.length&&0<c.getSelection().length&&"inner"===l.selectionPosition&&(d.pop(),S._renderSelection(),w(c).trigger("selectionchange",[c,c.getSelection()]),c.input.attr("placeholder","inner"===l.selectionPosition&&0<c.getValue().length?"":l.placeholder),c.input.trigger("focus"),e.preventDefault());break;case p:case v:e.preventDefault();break;case h:(""!==n||l.expanded)&&e.preventDefault();break;case C:!0===l.useCommaKey&&e.preventDefault();break;case f:g=!0;break;case y:e.preventDefault(),S._moveSelectedRow("down");break;case x:e.preventDefault(),S._moveSelectedRow("up");break;default:d.length===l.maxSelection&&e.preventDefault()}else _._onBlur()}},_onKeyUp:function(e){if(!m){var t,n=c.getRawValue(),i=0<w.trim(c.input.val()).length&&(!l.maxEntryLength||w.trim(c.input.val()).length<=l.maxEntryLength),a={};if(w(c).trigger("keyup",[c,e]),clearTimeout(s),e.keyCode===v&&l.expanded&&c.combobox.hide(),e.keyCode===p&&!1===l.useTabKey||e.keyCode>h&&e.keyCode<b)e.keyCode===f&&(g=!1);else switch(e.keyCode){case x:case y:e.preventDefault();break;case h:case p:case C:if(e.keyCode!==C||!0===l.useCommaKey){if(e.preventDefault(),!0===l.expanded&&0<(t=c.combobox.find(".ms-res-item-active:not(.ms-res-item-disabled):first")).length)return void S._selectItem(t);!0===i&&!0===l.allowFreeEntries&&(a[l.displayField]=a[l.valueField]=w.trim(n),c.addToSelection(a),c.collapse(),c.input.trigger("focus"));break}default:d.length===l.maxSelection?S._updateHelper(l.maxSelectionRenderer.call(this,d.length)):n.length<l.minChars?(S._updateHelper(l.minCharsRenderer.call(this,l.minChars-n.length)),!0===l.expanded&&c.collapse()):l.maxEntryLength&&n.length>l.maxEntryLength?(S._updateHelper(l.maxEntryRenderer.call(this,n.length-l.maxEntryLength)),!0===l.expanded&&c.collapse()):(c.helper.hide(),l.minChars<=n.length&&(s=setTimeout(function(){!0===l.expanded?S._processSuggestions():c.expand()},l.typeDelay)))}}},_onTagTriggerClick:function(e){c.removeFromSelection(w(e.currentTarget).data("json"))},_onTagEditTriggerClick:function(e){var t=w(e.currentTarget).data("json");if(e.stopImmediatePropagation(),""===c.input.val()){var i=w.inArray(t.id,c.getValue()),n=w(c.selectionContainer.children().get(i)),a=n.width()-(n.find(".ms-close-btn").width()+n.find(".ms-edit-btn").width());n.off(),n.children().hide();var s=function(){var e=c.getValue().slice(),t=c.getSelection().slice(),n=c.selectionContainer[0].scrollTop;e[i]=t[i].id=t[i].label=l.val(),c.setValue(e),c.setSelection(t),c.selectionContainer.scrollTop(n),m=!1},o=function(e){m=!1,_._onBlur(),e.stopImmediatePropagation()},r=w('<div class="ms-editor-wrap">').appendTo(n),l=w('<input type="text">').val(t.id).select().on("focus",function(){m=!0}).on("keydown",function(e){switch(e.stopImmediatePropagation(),e.keyCode){case p:case h:e.preventDefault(),s();break;case v:o()}}).appendTo(r);w('<span class="ms-check-btn"/>').on("click",w.proxy(s,this)).appendTo(r),w('<span class="ms-close-btn"/>').on("click",w.proxy(o,this)).appendTo(r);l.width(a),l.height(n.children().height()),w(c).trigger("editorClicked",[c,e]),m=!0}},_onTriggerClick:function(){if(!1===c.isDisabled()&&(!0!==l.expandOnFocus||d.length!==l.maxSelection))if(w(c).trigger("triggerclick",[c]),!0===l.expanded)c.collapse();else{var e=c.getRawValue().length;e>=l.minChars?(c.input.trigger("focus"),c.expand()):S._updateHelper(l.minCharsRenderer.call(this,l.minChars-e))}},_onWindowResized:function(){S._renderSelection()}};null!==e&&S._render(e)};w.fn.magicSuggest=function(a){var e=w(this);return 1===e.length&&e.data("magicSuggest")?e.data("magicSuggest"):(e.each(function(e){var t=w(this);if(!t.data("magicSuggest")){"select"===this.nodeName.toLowerCase()&&(a.data=[],a.value=[],w.each(this.children,function(e,t){t.nodeName&&"option"===t.nodeName.toLowerCase()&&(a.data.push({id:t.value,name:t.text}),w(t).attr("selected")&&a.value.push(t.value))}));var n={};w.each(this.attributes,function(e,t){n[t.name]="value"===t.name&&""!==t.value?JSON.parse(t.value):t.value});var i=new s(this,w.extend([],w.fn.magicSuggest.defaults,a,n));t.data("magicSuggest",i),i.container.data("magicSuggest",i)}}),1===e.length?e.data("magicSuggest"):e)},w.fn.magicSuggest.defaults={}}(jQuery);