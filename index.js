'use strict';

// custom CSS

var node = document.createElement('style');

//node.innerHTML = '.siteLinks ul li:first-child,.siteLinks .languageSwitcher{display:none;}'; // hide redundant links in hamburger menu
node.innerHTML = '.siteLinks .languageSwitcher{display:none;}'; // hide language switcher in hamburger menu
node.innerHTML += '.vpnBanner .btn-link{font-size:inherit;}'; // make Refworks text in VPN banner the same size as other text
node.innerHTML += '.vpnBanner .list-inline>li{padding-left:8px;padding-right:8px;}'; //give VPN banner links more breathing room
node.innerHTML += '.thirdPanel .topicSummary {width:100%;}'; // hide wikipedia panel, but show relevant panels
node.innerHTML += '.topicSummary .content {display:none;}'; // hide wikipedia panel, but show relevant panels
node.innerHTML += '.topicSummary .relatedLibrarian.content,.topicSummary .relatedTopics.content,.topicSummary .researchGuides.content {display:block;}'; // hide wikipedia panel, but show relevant panels
node.innerHTML += '.togglePreview {display:inline-block;padding:.2em .5em;background-color:#e5f1f8;}'; // make PREVIEW toggle more prominent
node.innerHTML += '.togglePreview a {color:005380 !important;}'; // make PREVIEW toggle more prominent
node.innerHTML += '.togglePreview:after {border-top-color#005380 !important;}'; // make PREVIEW toggle more prominent
node.innerHTML += 'span.highlight {background-color:#f26d04;color:#000;font-weight:bold;letter-spacing:.1em;padding:8px;}'; // make staff feedback link in VPN banner stand out
node.innerHTML += '.availability .availabilityLink {text-decoration: none; color: #007cbe;}'; // standardize availability links to our style
node.innerHTML += '.rollup .documentSummary .summary .authors a, .documentSummary .summary .authors a {text-decoration: none;}'; // standardize author links to our style





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
