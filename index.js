'use strict';

var node = document.createElement('style');
node.innerHTML = '.siteLinks ul li:first-child,.siteLinks .languageSwitcher{display:none;}'; //hide redundant links in hamburger menu

// To add more CSS, use lines like this:
// node.innerHTML += '.selector { font-size: large }';

document.body.appendChild(node);
