'use strict';

var node = document.createElement('style');
node.innerHTML = '.siteLinks ul li:first-child,.siteLinks .languageSwitcher{display:none;}'; // hide redundant links in hamburger menu
node.innerHTML += '.content {display:none;}'; // hide wikipedia panel
node.innerHTML += 'relatedLibrarian.content,.relatedTopics.content,.researchGuides.content {display:block;}' // show relevant panels

// To add more CSS, use lines like this:
// node.innerHTML += '.selector { font-size: large }';

document.body.appendChild(node);
