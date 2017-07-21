'use strict';

var node = document.createElement('style');
node.innerHTML = '.siteLinks ul li:first-child,.siteLinks .languageSwitcher{display:none;}'; // hide redundant links in hamburger menu
node.innerHTML += '.topicSummary .content {display:none;}'; // hide wikipedia panel
node.innerHTML += '.topicSummary .relatedLibrarian.content,.topicSummary .relatedTopics.content,.topicSummary .researchGuides.content {display:block;}' // show relevant panels

// To add more CSS, use lines like this:
// node.innerHTML += '.selector { font-size: large }';

document.body.appendChild(node);


// BEGIN QUALTRICS - fresh from scratch Intercept
var qualtricsNode = document.createElement('div');
qualtricsNode.setAttribute('id', 'SI_1Fl2lq0f3xEqTkh');
document.body.appendChild(qualtricsNode);
(function(){var g=function(e,h,f,g){
this.get=function(a){for(var a=a+"=",c=document.cookie.split(";"),b=0,e=c.length;b<e;b++){for(var d=c[b];" "==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a))return d.substring(a.length,d.length)}return null};
this.set=function(a,c){var b="",b=new Date;b.setTime(b.getTime()+6048E5);b="; expires="+b.toGMTString();document.cookie=a+"="+c+b+"; path=/; "};
this.check=function(){var a=this.get(f);if(a)a=a.split(":");else if(100!=e)"v"==h&&(e=Math.random()>=e/100?0:100),a=[h,e,0],this.set(f,a.join(":"));else return!0;var c=a[1];if(100==c)return!0;switch(a[0]){case "v":return!1;case "r":return c=a[2]%Math.floor(100/c),a[2]++,this.set(f,a.join(":")),!c}return!0};
this.go=function(){if(this.check()){var a=document.createElement("script");a.type="text/javascript";a.src=g+ "&t=" + (new Date()).getTime();document.body&&document.body.appendChild(a)}};
this.start=function(){var a=this;window.addEventListener?window.addEventListener("load",function(){a.go()},!1):window.attachEvent&&window.attachEvent("onload",function(){a.go()})}};
try{(new g(100,"r","QSI_S_SI_1Fl2lq0f3xEqTkh","//zn0ombvsv6b6ofgif-ucsf.siteintercept.qualtrics.com/WRSiteInterceptEngine/?Q_SIID=SI_1Fl2lq0f3xEqTkh&Q_LOC="+encodeURIComponent(window.location.href))).start()}catch(i){}})();
// END QUALTRICS 

// Fix off-campus login link to redirect to current search results after login.
// We're going to depend on Summon's dependence on jQuery here.
(function () {
  var waitingForInitialLoad = true;

  var fixBannerLink = function () {
    var links = $('.vpnBanner.customAuthBanner div a');
    if (waitingForInitialLoad && links.length === 0) {
      setTimeout(fixBannerLink, 100);
      return;
    } else {
      waitingForInitialLoad = false;
      window.addEventListener('hashchange', fixBannerLink);
    }
    
    links.each(function() {
      if (/^Off the UCSF network/.test(this.text)) {
        $(this).attr('ng-href', 'https://ucsf.idm.oclc.org/login?qurl=' + encodeURIComponent(location.href));
        $(this).attr('href', 'https://ucsf.idm.oclc.org/login?qurl=' + encodeURIComponent(location.href));
      }
    });
  }

  $().ready(fixBannerLink);
}());
