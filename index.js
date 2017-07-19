'use strict';

var node = document.createElement('style');
node.innerHTML = '.siteLinks ul li:first-child,.siteLinks .languageSwitcher{display:none;}'; // hide redundant links in hamburger menu
node.innerHTML += '.topicSummary .content {display:none;}'; // hide wikipedia panel
node.innerHTML += '.topicSummary .relatedLibrarian.content,.topicSummary .relatedTopics.content,.topicSummary .researchGuides.content {display:block;}' // show relevant panels

// To add more CSS, use lines like this:
// node.innerHTML += '.selector { font-size: large }';

document.body.appendChild(node);

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
