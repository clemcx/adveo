var common_addtocart=(function(a,b){a.doAddToCartAction=function(f){var k=f.closest("form"),h=f[0],j=h.id,i=$this.attr("class"),c=buttonId=="couponInformation"?buttonId:"",g="",e=0,d="?ajaxATCRequest=true&sourcePage="+c+"&"+$this.attr("name")+"="+encodeURI(this.value);if(i.indexOf("doNotLoadLB")>0||i.indexOf("showStoreLocatorModal")>0){return}if(buttonId=="quickAdd"){return}f.blur();k.find('input[type!="submit"]').each(function(m){var l=this.name||"",n=this.value.trim(),o=parseInt(n,10);if(l==="skuDescription"){return}g+=l+"="+encodeURI(n)+"&";if(l.search(".qty$")>-1&&n!=""){e++}});if(window.location.protocol.indexOf("https")!=-1){d="/cart/addSkuByButtonSecure.do"+d}else{if(useSecureAddSkuByButton){d="/cart/addSkuByButton.do"+d}}if(e<1&&(h.name==="cmd_addSKU.button"||c==="couponInformation")){if(hasOrderDetails){e=orderQty;return true}else{b(".shaded.separator").css("background","#FFB3B3");b(".shaded.separator").animate({backgroundColor:"#F6F6F6"},"slow");b("#qtySelectMsg").show();return false}}else{if(e>1){return true}}if(coreMetricsEnabled){cmCreatePageElementTag("intlbox","shop_enhancement")}common_addtocart.showAddToCartDialog(common_utils.appendSessionId(d),"",c,g);return false};a.showAddToCartDialog=function(e,h,c,g){var j=b("#addToCartDialogContent"),i,k=240,f=630,d,l;if(j.length){j.empty()}else{}j.removeClass("isLoaded");b("#quickViewContainer").remove();j.addClass("carouselLoading").common_dialog({ajax:{ajaxImg:"/images/vkg/v4/ajax-loader.gif",dataType:"html",data:g,type:"POST",url:e},dialogId:"addToCartDialog",closeImg:"/images/vkg/v4/close_button.png",closeText:"Close",finishedCallback:function(m){j.removeClass("carouselLoading").addClass("isLoaded").html(m);i=b("#addToCartDialog");if(!document.getElementById("addToCartDialog").length){d="populateCartEntryIds=";l=b(".minBackOrderEntryId").val();if(!!l){window.location=common_utils.appendSessionId("/cart/itemsAdded.do?keepLastAnalysis=true&"+d+"&minBackOrderEntryId="+l)}else{window.location=common_utils.appendSessionId("/cart/itemsAdded.do?keepLastAnalysis=true&"+d)}return}},height:400,overlay:{opacity:0.5,background:"linear-gradient(#ff8800, #663388, #33aaaa,#ff8800, #663388, #33aaaa,#ff8800, #663388, #33aaaa,#ff8800, #663388, #33aaaa)"},title:{textContent:""},width:f})};return a}(common_addtocart||{},jQuery));$(function(){$("#relatedSkusHorizontalForm").find("input").keypress(function(i){return common_utils.defaultSubmit(i)});var e=$("#searchRefine");var m=$(".gridList");if(m.length){m.on("click",".tabGrid",function(i){$("#productView").removeClass("list_view").addClass("grid_view");$(".tabList").removeClass("current");$(this).addClass("current");if(coreMetricsEnabled){cmCreateElementTag("grid_view","Site Wide Elements")}common_utils.setCookie("skuList","grid_view")}).on("click",".tabList",function(i){$("#productView").removeClass("grid_view").addClass("list_view");$(".tabGrid").removeClass("current");$(this).addClass("current");if(coreMetricsEnabled){cmCreateElementTag("list_view","Site Wide Elements")}common_utils.setCookie("skuList","list_view")})}e.find(".dealIconImg").hover(function(){$(this).parent().toggleClass("active")});$(".pppHeader").not(".pppLearnLink").on("click",function(u){u.preventDefault();var i=$(this);i.next().slideToggle("slow");i.children("a").toggleClass("pppShown")});$(".pppAddedItems").find(".pppContents").show();$("a#learnmore").on("click",function(){if(coreMetricsEnabled){var i=$("#skuNumber").text();var u=$("#vendorName").text().trim();cmCreatePageElementTag("SD:MOREABT:LK:"+u+":"+i,"SKU_DETAILS")}openDescriptionTab();return true});$("#mainqtybox").on("keyup",function(){var i=this.value.trim();if(validQuantity(i)){$("#secondaryqtybox").val($("#mainqtybox").val());$("#originalchecked").prop("checked",true)}});$(".related_qty, #secondaryqtybox").on("keyup",function(){var i=this.value.trim();if(validQuantity(i)){$(this).next().prop("checked",true)}});$(".related_checkbox, #originalchecked").on("click",function(){var u=$(this);if(u.prop("checked")){var i=u.prev().val().trim();if(!i.length){u.prev().val("1")}}});var g=$("#pageVersionIndicator");if(g.length){var o=g.text();switch(o){case"1":if($("#relatedTab.li3").length){$("#navTabs").find("li").removeClass("defaultTab");$("#relatedTab.li3").addClass("defaultTab");$("#navTabContent > div").removeClass("show").addClass("hide");$("#navTabContent > .related_tab").addClass("show").removeClass("hide")}break;case"4":$("#navTabs").find("li").removeClass("defaultTab");$("#secondTab.li2").addClass("defaultTab");$("#navTabContent > div").removeClass("show").addClass("hide");$("#navTabContent > .sku_det").addClass("show").removeClass("hide");break}}var b=$("#skuDetails").find("#navTabContent").find(".show").find("li");if(!b.parent().is("ul")){b.wrapAll("<ul></ul>")}e.find(".paginationRecordsPerPage").on("change",function(v){var i=$("a.paginationRecordsPerPageLink").attr("href");var u=i.replace(/recordsPerPageNumber=(\d*)/,"recordsPerPageNumber="+this.value);var u=u.replace(/viewAll=(\d*)/,"");window.location.href=u});var q=$("#refinementsection");var t=q.find("input[type=checkbox]");t.css("visibility","visible");q.find(".more").css("visibility","visible");q.find("label").css("color","#111");e.find(".narrowByLink").on("click",function(){throwSearchRefinementElementTag($("#refinementForm").attr("action"),"Narrow By",$(this).text().trim())});$("a.expandKeywordLink").on("click",function(){window.location=$(this).attr("href");return true});if(t.length){q.on("click","input[type=checkbox]",function(v){common_uielements.lightboxLoader($("#refinementsLoading").html());var i=$(this);if(i.attr("class").indexOf("expandKeywordCheckBox")>-1){i.siblings("a").click();return true}t.not(":checked").prop("disabled",true);if(coreMetricsEnabled){if(i.prop("checked")){var u=i.parent();var w=u.text().trim();if(w.length<1){w=u.parent().find("img").attr("alt")}throwSearchRefinementElementTag($("#refinementForm").attr("action"),u.parents().filter("div:eq(0)").attr("id"),w)}}window.setTimeout(function(){$("#refinementForm").submit()},800)})}q.on("click",".styleAcc",function(){$(this).toggleClass("accOpen").next().toggle()});var k=q.find(".styleAcc"),l=k.length;k.addClass("accOpen");for(var p=0;p<l;p++){var f=k.eq(p);thisStyleAcc=k[p];var j=f.index(thisStyleAcc);var n=f.next().find(".refinement:checked").length;if(j>2&&n===0){f.click()}}q.find("a.more").on("click",function(x){x.preventDefault();var w=$(this);var u=w.attr("href");var v="";var i=w.parent().parent();i.find("input.refinement").each(function(){v+=this.value+"|"});$.getJSON(common_utils.appendSessionId("/mobile/utils.do?action=getMoreInfo&url="+encodeURIComponent(u)+"&alreadyDisplayed="+v),function(y){i.slideUp(500,function(){i.empty();var A=y.object;var z="";for(var C=0;C<A.length;C++){if(!!A[C].url){z+='<li><a href="'+A[C].url+'" class="refinements_checkbox_link'+((A[C].checked)?" checked":"")+'"><label>'+A[C].name+"("+A[C].hitCount+")</label></a></li>"}else{z+='<li><input type="checkbox" class="refinement" value="'+A[C].id+'" name="cbxRefine" style="visibility: visible;"'+(A[C].checked?"checked=checked":"")+'/><label style="color: #111;">'+A[C].name+" ("+A[C].hitCount+")</label></li>"}}i.append(z);var B=$("#refinementsection").find("input[type=checkbox]");B.click(function(){B.not(":checked").prop("disabled",true);$("#refinementForm").find(".refinementSubmit").find("input[type=submit]").click()});w.parent().remove();i.slideDown(500)})})});var d=$("div.pppSkuPage");if(d.length){d.find("a").not("a.pppRemoveLink").not("div.a_ppp a","a.pppLearnLink").on("click",function(i){i.preventDefault();if($(".pppSect2re").is(":visible")){return}if($(this).children(".pppSkuSpan").html()==""){$('input[name$="selectDecline"]').val("1");$('input[name$="pppSku"]').val("");$("li.lastDecline > a > span.radio_off").addClass("pppSect1re").removeClass("radio_off pppSect1");$("li.lastDecline > a > span").show();return}else{$('input[name$="pppSku"]').val($(this).children(".pppSkuSpan").html())}$(".self_radio_on").show();$(".pppSect2re").show();$(".pppSect1").addClass("pppSect1re f_left").removeClass("radio_off pppSect1");$(".pppSect2").addClass("pppSect3re").removeClass("pppSect2");$(".pppContents").find("a").not(this).parent().not(".pppSect2re").hide()})}$(".pppRemoveLink").on("click",function(i){i.preventDefault();$('input[name$="pppSku"]').val("");$('input[name$="selectDecline"]').val("1");$(".self_radio_on").hide();$(".pppSect1re").addClass("radio_off pppSect1").removeClass("pppSect1re f_left");$(".pppSect3re").addClass("pppSect2").removeClass("pppSect3re");$(".pppContents a").parent().show();$(".pppSect2re").hide();$("li.lastDecline > a > span.radio_off").addClass("pppSect1re").removeClass("radio_off pppSect1");$("li.lastDecline > a > span").show()});var c=$(".pppLearnLink");if(!$("#shoppingCart").length&&c.length){$(".pppLearnLink").find(".a_ppp").find("a").on("click",function(u){u.preventDefault();Newcorp.InteractiveSales.initialize("ODU","en",$(".urlClass").html(),"");var i=parseFloat($(".pppSkuSpan3").html());Newcorp.InteractiveSales.showInfoForServicePlan($(".pppSkuSpan1").html(),$(".pppSkuSpan2").html(),i,$(".pppSkuSpan4").html(),$(".pppSkuSpan5").html(),$(".pppSkuSpan6").html())})}$("#sharelinks").on("mouseover",function(){$(".hover_menu").fadeIn("fast").data("hidden",false);$(this).addClass("sfhover");if(browser.msie){$("#sku").addClass("socialMediaPage");$("#productTabs").addClass("socialMediaTabs")}}).on("mouseout",function(){$(".hover_menu").fadeOut("medium").data("hidden",true);$(this).removeClass("sfhover")});$(".share_twitter").on("click",function(){var i="https://"+top.location.host+"/catalog/catalogSku.do?id="+$("#skuId").val();var u="https://twitter.com/home?status="+i;window.open(u,"","toolbar=0, resizable=yes, scrollbars=yes, status=0, width=795, height=700");return false});var s=$("#skuPageEntity");if(s.length>0){s.find("img.entity").tooltip({contentAttr:"alt"})}var h=$("#shippingCostDisclaimer").find("a");if(h.length>0){var r=h.attr("title");if(r!=undefined&&r.length>0){h.tooltip({contentAttr:"title"})}}$("#mainSkuForm").find(".skuShoppingListSubmit").tooltip({contentAttr:"title"});$("#skuListFormID").find("input[type=text]").on("keypress",common_utils.addToCartDefaultSubmit);for(var j=0;j<5;j++){$("#skuListFormID_"+j).find("input[type=text]").on("keypress",common_utils.addToCartDefaultSubmit)}if(coreMetricsEnabled){var a=$("#product");if(a.length){a.find("#productTourLinkTrack").on("click",function(){throwElementTag("Product Tour","Product Page Entity")});a.find("#deliveryFeeLinkTrack").on("click",function(){throwElementTag("Delivery Fee","Product Page Entity")});a.find("#sameDayLinkTrack").on("click",function(){throwElementTag("Same Day Delivery","Product Page Entity")});a.find("#hubLinkTrack").on("click",function(){throwElementTag("HUB","Product Page Entity")});a.find("#clearanceLinkTrack").on("click",function(){throwElementTag("Clearance","Product Page Entity")});a.find("#zoomEntityLinkTrack").on("click",function(){throwElementTag("Zoom","Product Page Entity")});a.find("#msdsEntityLinkTrack").on("click",function(){throwElementTag("MSDS","Product Page Entity")});a.find(".pictureEntityLinkTrack").on("click",function(){throwElementTag("Dynamic Zoom","Product Page Entity")})}$(document).on("click","#sku .rebateFormLink",function(v){var i=$("#skuNumber").text();var u=$("#vendorName").text().trim();cmCreatePageElementTag("SD:REBATE:LK:"+u+":"+i,"SKU_DETAILS")}).on("click","#jq_contentManufOn",function(v){var i=$("#skuNumber").text();var u=$("#vendorName").text().trim();cmCreatePageElementTag("SD:MANUINFO:LK:"+u+":"+i,"SKU_DETAILS")}).on("click","#buttonCustomize1, #buttonCustomize2, #buttonCustomize3",function(v){var i=$("#skuNumber").text();var u=$("#vendorName").text().trim();cmCreatePageElementTag("PR:CUSTOMIZE:BN:"+u+":"+i,"SKU_PROMOTIONAL")}).on("click","#buttonOrderSample1, #buttonOrderSample2, #buttonOrderSample3",function(v){var i=$("#skuNumber").text();var u=$("#vendorName").text().trim();cmCreatePageElementTag("PR:ORDSAMPLE:BN:"+u+":"+i,"SKU_PROMOTIONAL")})}$("#fullProductInfo").click(function(i){$("#secondTab.skuDetailsTab").click()})});function showTab(){$("#reviewTab").click()}function isGiftCardPresent(b){var a=/gift card/i;var e=$("#skuHeading").html();if(e){if(e.search(a)>-1){return true}}var f=b.find(".description").toArray();for(var d=0;d<f.length;d++){var c=f[d].innerHTML;if(c.search(a)>-1){return true}}return false}function throwElementTag(b,c){var a=$("#skuId").val();if(c!="firstTab"){if(coreMetricsEnabled){cmCreatePageElementTag(b,c,a)}}}function throwSearchRefinementElementTag(c,e,d){var a="Search";var b="";if(typeof c=="undefined"||c.indexOf("browse")>-1){a="Browse"}if(e!=undefined){if(e.indexOf("ref_el_")>-1){e=e.substring(7,e.length)}}else{e=""}b=$("#siteBreadcrumb").find(".lastBreadCrumb:last").text();if(coreMetricsEnabled){cmCreatePageElementTag(a,"Refinements","''","''","''"," -_-"+e+"-_-"+d+"-_- -_-"+b)}}function throwProductViewTag(e,d){var b=$("#productViewTag").text();b=b.replace("*rating*",d);b=b.replace("*count*",e);var c="<input type='hidden' name='avgRating' value='"+d+"'><input type='hidden' name='totalReviewCount' value='"+e+"'>";$("#mainSkuForm").append(c);var a=b.split("|||");if(coreMetricsEnabled){cmCreateProductviewTag(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}}function openDescriptionTab(){$("ul#navTabs").find("li").removeClass("defaultTab");$("li#firstTab.li1").addClass("defaultTab");$("#navTabContent > div").removeClass("show").addClass("hide");$("#navTabContent > div.sku_desc").addClass("show").removeClass("hide")}function validQuantity(b){var c=new RegExp("^[0-9]+$");var a=c.test(b);return a}function getBVRatingImage(a){return $("#bvPath").html()+"/"+$("#bvContext").html()+"/"+a+"/ratings.gif"}function declinePPP(a){if(a=="lightbox"){if(coreMetricsEnabled){cmCreatePageElementTag("intlbox_ppp_decl","intlbox_ppp_action")}}else{if(coreMetricsEnabled){cmCreatePageElementTag("int_ppp_decl","int_ppp_action")}}}function acceptPPP(a){if(a=="lightbox"){if(coreMetricsEnabled){cmCreatePageElementTag("intlbox_ppp_acc","intlbox_ppp_action")}}else{if(coreMetricsEnabled){cmCreatePageElementTag("int_ppp_acc","int_ppp_action")}}}function throwCMTag4ViewPaperProds(){if(coreMetricsEnabled){cmCreatePageElementTag("SHOP:CATEGORY:BN:PAPER_PRODUCTS","TBD")}}function mainColumnContentTab(a){if(coreMetricsEnabled){cmCreatePageElementTag(a,"TBD")}}function throwCMTag4ViewPaperProds(){if(coreMetricsEnabled){cmCreatePageElementTag("SHOP:CATEGORY:BN:PAPER_PRODUCTS","TBD")}}function mainColumnContentTab(a){if(coreMetricsEnabled){cmCreatePageElementTag(a,"TBD")}}function throwCMTag4ViewPaperProds(){if(coreMetricsEnabled){cmCreatePageElementTag("SHOP:CATEGORY:BN:PAPER_PRODUCTS","TBD")}}function mainColumnContentTab(a){if(coreMetricsEnabled){cmCreatePageElementTag(a,"TBD")}}function handleCmForAddToLinks(b){if(coreMetricsEnabled){var a="";if(b=="Add to Trolley Main"){a="addtotrolleymain"}else{if(b=="Add to List"){a="addtolist"}else{if(b=="Add to Favorites"){a="addtofavorites"}}}cmCreateManualLinkClickTag("/catalog/skuRouter.do?cm_sp=skupage-_-addtolinks-_-"+a,b);cmCreateElementTag(b,"Product Page Elements")}}function handleCmForAddToLinksRedesign(b){if(coreMetricsEnabled){var a="";if(b=="Add to List"){a="Summary"}cmCreateManualLinkClickTag("/catalog/skuRouter.do?cm_sp=AddtoList-_-ProductPage-_-"+a,b)}}function chkStockAndLoc(){if(coreMetricsEnabled){var a=$("#skuNumber").text();var b=$("#vendorName").text().trim();cmCreatePageElementTag("SD:CKLOCAL:LK:"+b+":"+a,"SKU_DETAILS")}};