'use strict';

var node = document.createElement('style');
//node.innerHTML = '.siteLinks ul li:first-child,.siteLinks .languageSwitcher{display:none;}'; // hide redundant links in hamburger menu
node.innerHTML += '.content {display:none;}'; // hide wikipedia panel
node.innerHTML += '.relatedLibrarian.content,.relatedTopics.content,.researchGuides.content {display:block;}' // show relevant panels

// To add more CSS, use lines like this:
// node.innerHTML += '.selector { font-size: large }';

document.body.appendChild(node);

// Fix off-campus login link to redirect to current search results after login.
// We're going to depend on Summon's dependence on jQuery here.
var fixBannerLink = function () {
  links = $('.vpnBanner.customAuthBanner div a');
  if (links.length === 0) {
    setTimeout(fixBannerLink, 100);
    return;
  }
  
  links.each(function(idx) {
    if (/^Off the UCSF network/.test(this.text)) {
      this.href = 'https://ucsf.idm.oclc.org/login?qurl=' + encodeURIComponent(location.href);
    }
  });
}

$().ready(fixBannerLink);
