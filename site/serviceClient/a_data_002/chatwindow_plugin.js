define(function(a){function b(a){function b(){var b=a.getBusinesscaseId(),e=d.browserStorage.get("bc_"+b+"_state");if("entrypoint"===e){x===!1&&(x=!0,a.publishEvent("entrypoint_match_proactive"));var g=L.getInteractedInvitePlugin(a.uuid);if(w||g)a.publishEvent("agents_interacted");else{var i=L.isAnotherPluginUIMaximized(a.uuid),j=L.isAnyPluginUIStarted(a.uuid);if(i||j)return;F||G&&E||H&&D?h():C.removed&&c(),f()}}}function c(){z===!1&&(z=!0,a.publishEvent("entrypoint_no_availability")),v.isRendered=!1,v.headerLoaded=!1,v.currentPrediction=null,I.toggleMobileView(v,a,!1),window.parent.removeEventListener("resize",o),a.remove()}function f(){A===!1&&(D!==!1?a.publishEvent("agents_available"):E?a.publishEvent("agents_unavailable_logged_in"):a.publishEvent("agents_unavailable_logged_out"),A=!0)}function g(){a.watchData("availability",function(a){H&&!a&&c()}),a.watchData("someone_connected",function(a){G&&!a&&c()}),v.isGlobalPluginWatcherSet||(v.isGlobalPluginWatcherSet=!0,d.browserStorage.bind("kernel.pluginUIStates",function(){var b=L.isPluginMatchState(a.getPluginState(),a.getBusinesscaseId()),d=L.isPluginUIStateStopped(a.uuid),e=L.isPluginUIStateMinimized(a.uuid),f=L.getInteractedInvitePlugin(a.uuid),g=L.isAnotherPluginUIMaximized(a.uuid),h=L.isAnotherPluginUIMinimized(a.uuid),i=L.isAnyPluginUIStarted(a.uuid),j=L.isPluginUIStateMaximized(a.uuid);return!b||v.isRendered||f||!d||h||(i||g)&&!j?d&&h&&!j?void v.render(a):void(v.isRendered&&(b&&e&&v.ractive&&!v.ractive.get("isMinimized")?r():b&&j&&v.ractive&&v.ractive.get("isMinimized")&&q(),(d||f)&&c())):void v.startPlugin()}))}function h(){v.isRendered=!0,y===!1&&(y=!0,a.publishEvent("entrypoint_display_proactive")),a.render(function(b){u=document.createElement("div"),t(),d.browserStorage.remove(N),b.appendChild(u),v.ractive=new Ractive({el:u,template:a.getCompiledTemplate("chatwindow_plugin"),data:{position:v.position,color:v.color,headerColor:v.headerColor,iconsActiveColor:v.iconsActiveColor,text:v.bc_chat_title,theme:a.getTheme(),isMinimized:!0,type:v.type,messages:v.messages,navigator:v.navigator,isMobile:v.isMobile,isTablet:v.isTablet,isIpad:v.isIpad,isIPhone:v.isIPhone,hostname:d.hostname,activeChannel:S,campaignFeatureDefault:O,campaignFeatures:Q,desktopType:v.desktopType||e.CHAT_BUTTON_TYPES.BAR,mobileType:v.mobileType||e.CHAT_BUTTON_TYPES.BUBBLE,trans:a.translate,setButtonLink:v.setButtonLink,toggleChatScreen:v.toggleChatScreen,navigateToLink:v.navigateToUrl}}),i(),j();var c=L.isPluginUIStateMinimized(a.uuid);if(!c){var f=L.isPluginUIReservedStateMinimized(a.uuid);f?(r(),L.removeReservedPluginUIState(a.uuid)):q()}})}function i(){var b=I.createInternalMessage(v.message,"opening_text",a.getLocale());b.internal.body=I.addTargetBlankAttr(J.toHTML(b.internal.body)),v.messages.push(b),v.ractive.set("messages",v.messages),d.browserStorage.set("invite_message",v.message)}function j(){v.ractive.on("toggleChatWindow",function(a){return p(),a&&a.original.preventDefault&&a.original.preventDefault(),!1}),v.ractive.on("keyPressed",function(a){13!==a.original.keyCode||a.original.shiftKey?d.browserStorage.set(P,v.ractive.get("newMessage")):(a.original.preventDefault(),l())}),v.ractive.on("startChat",function(a){return l(),a&&a.original.preventDefault&&a.original.preventDefault(),!1}),v.ractive.on("close",function(a){return n(),a&&a.original.preventDefault&&a.original.preventDefault(),!1}),window.parent.addEventListener("resize",o);var a;"function"==typeof Event?a=new Event("resize"):(a=document.createEvent("Event"),a.initEvent("resize",!0,!0)),window.parent.dispatchEvent(a),v.generateQrCodeForWhatsapp()}function k(a){return a===R}function l(){var b=v.ractive.get("newMessage");"string"==typeof b&&b.length>0&&(b=b.replace(/\n/g,"\n\n"),d.browserStorage.set("start_message",b),v.stop(),a.setDone(),m())}function m(){a.publishEvent("entrypoint_click_proactive",{accept_url:a.getClientUrl()}),L.setPluginUIState(a,e.CHAT_STATES.accepted,!1)}function n(){a.publishEvent("entrypoint_rejected_proactive"),d.browserStorage.remove("invite_message"),K.removeInviteMessageFromStorage(),v.stop(),L.setPluginUIState(a,e.CHAT_STATES.declined,!1)}function o(){const b=a.mainDocument.getElementById("_"+a.uuid),c=L.isMobileView(),d={desktopType:v.desktopType,mobileType:v.mobileType};return!!b&&(M.resetFrameButton(b),M.switchToMobile(b,d,c),void I.toggleMobileView(v,a,c&&!b.classList.contains("minimized")))}function p(){var b=a.mainDocument.querySelector("#_"+a.uuid);b.classList.contains("minimized")?(q(),d.browserStorage.set(N,v.position)):(r(),d.browserStorage.remove(N))}function q(){var b=a.mainDocument.querySelector("#_"+a.uuid);v.ractive.set("isMinimized",!1),L.setPluginUIState(a,e.CHAT_STATES.maximised,!0),a.setData(B,"displayed"),b.classList.remove("minimized"),b.classList.add("maximized"),s(),window.parent.innerWidth<e.MOBILE_WIDTH_THRESHOLD&&!b.classList.contains("minimized")&&I.toggleMobileView(v,a,!0,!0)}function r(){var b=a.mainDocument.querySelector("#_"+a.uuid);v.ractive.set("isMinimized",!0),L.setPluginUIState(a,e.CHAT_STATES.minimised,!0),b.classList.remove("maximized"),b.classList.add("minimized"),I.toggleMobileView(v,a,!1)}function s(){v.headerLoaded||(a.fetchLogo(function(a){null!==a&&v.ractive.set("logo",a)}),v.headerLoaded=!0);var b=a.getData("prediction");v.currentPrediction!==b.prediction_id?a.fetchPredictedAgent(function(a){a&&(v.agent={nickname:a.prediction_name,firstname:a.firstname,photo:a.avatar},v.currentPrediction=a.prediction_id),v.ractive.set("agent",v.agent)}):v.agent&&v.ractive.set("agent",v.agent)}function t(){a.mainDocument.querySelector("iframe#_"+a.uuid).classList.add(v.position)}var u,v=this,w=a.getData("hasConnected"),x=!1,y=!1,z=!1,A=!1,B="cwi_state_"+a.getBusinesscaseId(),C=a.getField("availability"),D=a.checkAvailability(),E=a.isSomeoneConnected(),F="availability.always"===C.showed,G="availability.someoneOnline"===C.showed,H="availability.onlyWhenAgent"===C.showed,I=a.getService("cb_utils"),J=a.getService("cb_markdown"),K=a.getService("cb_exchange"),L=a.getService("cb_visitor_utils"),M=a.getService("cb_button_switch"),N=e.STR_CWP_POSITION+a.getBusinesscaseId(),O=e.CAMPAIGN_FEATURES_DEFAULTS,P="cwi_message_"+a.getBusinesscaseId(),Q=a.getField("campaignFeatures")||[],R="whatsapp",S="liveChat";v.isRendered=!1,v.startPlugin=function(){var c=d.browserStorage.get("declinedChat")||d.browserStorage.get("inviteAccepted");return!!c||(v.position=d.browserStorage.get(N)||e.STR_CWP_POSITION_DEFAULT,v.color=a.getField("color"),v.headerColor=window.tinycolor(a.getField("color")).isLight()?" dark":" light",v.iconsActiveColor="#ffffff"===a.getField("color")?e.DEFAULT_CHAT_TEXT_COLOR:a.getField("color"),v.bc_chat_title=a.getField("bc_chat_title"),v.message=a.getField("inviteMessage"),v.type=a.type,v.headerLoaded=!1,v.currentPrediction=null,v.agent=null,v.messages=[],v.navigator=I.isIpadIOS11(navigator.userAgent)?"ipad-ios11":"",v.isMobile=I.isMobile(navigator.userAgent),v.isTablet=I.isTablet(navigator.userAgent),v.isIpad=I.isIpad(navigator.userAgent),v.isIPhone=I.isIphone(navigator.userAgent),v.desktopType=a.getField("desktop_type"),v.mobileType=a.getField("mobile_type"),!w&&a.getData("chatMode")&&(w=a.getData("chatMode").length>0),b(),void g())},v.stop=function(){d.browserStorage.unbind("chatwindow_invite.*").remove(P),c()},v.generateQrCodeForWhatsapp=function(){var a=Q.find(function(a){return a.type===R});if(a){var b=O.whatsapp.href+a.value;QRCode.toCanvas(v.ractive.find("#canvas_qr_code"),b),v.ractive.set("whatsappLink",b)}},v.setButtonLink=function(a,b){k(a)?v.toggleChatScreen(a,"#cobrowsing-dialogcontent"):v.navigateToUrl(O[a].href+b)},v.toggleChatScreen=function(a,b){v.ractive.set("activeChannel",a),b&&I.scrollToBottomBlock(v.ractive.find(b))},v.navigateToUrl=function(a){window.open(a,"_blank")}}function c(a){function b(){u.headerLoaded=!1,u.isRendered=!1,u.currentPrediction=null,window.parent.removeEventListener("resize",r),C.toggleMobileView(u,a,!1),a.remove()}function c(){a.watchData("availability",function(a){w=a,A&&f()}),a.watchData("someone_connected",function(a){x=a,z&&f()}),d.browserStorage.bind("kernel.pluginUIStates",function(){var c=F.isPluginMatchState(a.getPluginState(),a.getBusinesscaseId()),d=F.isAnotherPluginUIMaximized(a.uuid),e=F.isPluginUIStateMaximized(a.uuid),g=F.isPluginUIStateMinimized(a.uuid),h=F.isAnyPluginUIStarted();d||h?b():!u.isRendered&&c?f():c&&e&&u.ractive&&u.ractive.get("isMinimized")?o():g&&u.ractive&&!u.ractive.get("isMinimized")&&p()})}function f(){var c=F.isAnotherPluginUIMaximized(a.uuid),d=F.isAnyPluginUIStarted(a.uuid);if(c||d)return void b();if(B===!1&&(B=!0,a.publishEvent("entrypoint_match_reactive")),y||A&&w||z&&x){var f=F.isPluginUIStateStopped(a.uuid);f&&F.setPluginUIState(a,e.CHAT_STATES.minimised),g()}else b();C.publishAgentAvailabilityEvent(w,x,a)}function g(){u.isRendered=!0,a.render(function(b){var c=document.createElement("div");b.appendChild(c),d.browserStorage.set(K,u.position),u.ractive=new Ractive({el:c,template:a.getCompiledTemplate("chatwindow_plugin"),data:{position:u.position,color:u.color,headerColor:u.headerColor,iconsActiveColor:u.iconsActiveColor,text:u.text,theme:a.getTheme(),isMinimized:!0,type:u.type,messages:u.messages,navigator:u.navigator,isMobile:u.isMobile,isTablet:u.isTablet,isIpad:u.isIpad,isIPhone:u.isIPhone,campaignFeatures:L,activeChannel:N,campaignFeatureDefault:J,desktopType:u.desktopType||e.CHAT_BUTTON_TYPES.BAR,mobileType:u.mobileType||e.CHAT_BUTTON_TYPES.BUBBLE,trans:a.translate,setButtonLink:u.setButtonLink,toggleChatScreen:u.toggleChatScreen,navigateToLink:u.navigateToUrl}}),a.publishEvent("entrypoint_display_reactive"),j(),h();var f=F.isPluginUIStateMaximized(a.uuid);f&&(u.visualReminderStarted=!1,u.headerLoaded=!1,u.currentPrediction=null,o()),u.ractive.set("newMessage",d.browserStorage.get(I))})}function h(){u.ractive.on("toggleChatWindow",function(a){return n(),a&&a.original.preventDefault&&a.original.preventDefault(),!1}),u.ractive.on("keyPressed",function(a){13!==a.original.keyCode||a.original.shiftKey?d.browserStorage.set(I,u.ractive.get("newMessage")):(a.original.preventDefault(),t())}),u.ractive.on("startChat",function(a){return t(),a&&a.original.preventDefault&&a.original.preventDefault(),!1}),window.parent.addEventListener("resize",r);var a;"function"==typeof Event?a=new Event("resize"):(a=document.createEvent("Event"),a.initEvent("resize",!0,!0)),window.parent.dispatchEvent(a),u.generateQrCodeForWhatsapp()}function i(a){return a===M}function j(){a.mainDocument.querySelector("iframe#_"+a.uuid).classList.add(u.position)}function k(b){if(u.openingText.enable&&!m()||b){l();var c=C.createInternalMessage(u.openingText.message,"opening_text",a.getLocale());c.internal.body=C.addTargetBlankAttr(D.toHTML(c.internal.body)),b?u.messages=u.messages.map(function(a){return a.internal&&"opening_text"===a.internal.type?c:a}):u.messages.push(c),u.ractive.set("messages",u.messages)}else if(m()){var d=u.openingText.original_message!==u.openingText.messages;d&&k(!0)}}function l(){u.openingText.original_message||(u.openingText.original_message=u.openingText.message),u.openingText.message=E.parse(u.openingText.original_message)}function m(){return!!u.messages.find(function(a){return"opening_text"===a.internal.type})}function n(){var b=a.mainDocument.querySelector("#_"+a.uuid);b&&b.classList.contains("minimized")?(o(),d.browserStorage.set(K,u.position)):(p(),d.browserStorage.remove(K))}function o(){var b=a.mainDocument.querySelector("#_"+a.uuid);u.ractive.set("isMinimized",!1),F.setPluginUIState(a,e.CHAT_STATES.maximised),a.setData(H,"maximized"),b.classList.remove("minimized"),b.classList.add("maximized"),q(),window.parent.innerWidth<e.MOBILE_WIDTH_THRESHOLD&&!b.classList.contains("minimized")&&C.toggleMobileView(u,a,!0)}function p(){var b=a.mainDocument.querySelector("#_"+a.uuid);u.ractive.set("isMinimized",!0),F.setPluginUIState(a,e.CHAT_STATES.minimised),b.classList.remove("maximized"),b.classList.add("minimized"),C.toggleMobileView(u,a,!1)}function q(){u.headerLoaded||(a.fetchLogo(function(a){null!==a&&u.ractive.set("logo",a)}),u.headerLoaded=!0);var b=a.getData("prediction");u.currentPrediction!==b.prediction_id?a.fetchPredictedAgent(function(a){a&&(u.agent={nickname:a.prediction_name,firstname:a.firstname,photo:a.avatar},E.setConversationAgent(u.agent),u.currentPrediction=a.prediction_id),u.ractive.set("agent",u.agent),k(),s()}):u.agent&&(u.ractive.set("agent",u.agent),k(),s())}function r(){const b=a.mainDocument.getElementById("_"+a.uuid),c=F.isMobileView(),d={desktopType:u.desktopType,mobileType:u.mobileType};return!!b&&(G.resetFrameButton(b),G.switchToMobile(b,d,c),void C.toggleMobileView(u,a,c&&!b.classList.contains("minimized")))}function s(){if(u.openingText.enable===!0&&u.openingText.visual_reminder===!0&&!u.visualReminderStarted){var a=u.ractive.find(".cb_opening_text");C.visualReminder.init(),C.visualReminder.start(a),u.visualReminderStarted=!0}}function t(){var b=u.ractive.get("newMessage");"string"==typeof b&&b.length>0&&(b=b.replace(/\n/g,"\n\n"),a.setData("ChatWindowButton","Clicked"),d.browserStorage.set("start_message",b),a.publishEvent("entrypoint_click_reactive",{accept_url:a.getClientUrl()}),u.stop(),a.setDone())}var u=this,v=a.getField("availability"),w=a.checkAvailability(),x=a.isSomeoneConnected(),y="availability.always"===v.showed,z="availability.someoneOnline"===v.showed,A="availability.onlyWhenAgent"===v.showed,B=!1,C=a.getService("cb_utils"),D=a.getService("cb_markdown"),E=a.getService("cb_custom_fields"),F=a.getService("cb_visitor_utils"),G=a.getService("cb_button_switch"),H="cwp_state_"+a.getBusinesscaseId(),I="cwp_message_"+a.getBusinesscaseId(),J=e.CAMPAIGN_FEATURES_DEFAULTS,K=e.STR_CWP_POSITION+a.getBusinesscaseId(),L=a.getField("campaignFeatures")||[],M="whatsapp",N="liveChat";u.isRendered=!1,u.startPlugin=function(){u.position=a.getField("cwp_position"),u.text=a.getField("cwp_text"),u.color=a.getField("cwp_color"),u.headerColor=window.tinycolor(a.getField("cwp_color")).isLight()?" dark":" light",u.iconsActiveColor="#ffffff"===a.getField("cwp_color")?e.DEFAULT_CHAT_TEXT_COLOR:a.getField("cwp_color"),u.openingText=a.getField("opening_text"),u.type=a.type,u.headerLoaded=!1,u.currentPrediction=null,u.agent=null,u.messages=[],u.navigator=C.isIpadIOS11(navigator.userAgent)?"ipad-ios11":"",u.isMobile=C.isMobile(navigator.userAgent),u.isTablet=C.isTablet(navigator.userAgent),u.isIpad=C.isIpad(navigator.userAgent),u.isIPhone=C.isIphone(navigator.userAgent),u.desktopType=a.getField("cwp_desktop_type"),u.mobileType=a.getField("cwp_mobile_type"),d.browserStorage.set(K,u.position),f(),c()},u.stop=function(){b(),d.browserStorage.unbind("chatwindow_button.*").remove(I)},u.generateQrCodeForWhatsapp=function(){var a=L.find(function(a){return a.type===M});if(a){var b=J.whatsapp.href+a.value;QRCode.toCanvas(u.ractive.find("#canvas_qr_code"),b),u.ractive.set("whatsappLink",b)}},u.setButtonLink=function(a,b){i(a)?u.toggleChatScreen(a,"#cobrowsing-dialogcontent"):u.navigateToUrl(J[a].href+b)},u.toggleChatScreen=function(a,b){u.ractive.set("activeChannel",a),b&&C.scrollToBottomBlock(u.ractive.find(b))},u.navigateToUrl=function(a){window.open(a,"_blank")}}var d=a("sdk/cobrowser"),e=a("sdk/config");window.registerPlugin({type:"button",context:"visitor",name:"chatwindow_button",scope:c,handlers:[{name:"criteriaMatched",execute:function(){this.startPlugin()}},{name:"stop",execute:function(){this.stop()}}]}),window.registerPlugin({type:"invite",context:"visitor",name:"chatwindow_invite",scope:b,handlers:[{name:"criteriaMatched",execute:function(){this.startPlugin()}},{name:"stop",execute:function(){this.stop()}}]})});
//# sourceMappingURL=chatwindow_plugin.js.map