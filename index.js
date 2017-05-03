'use strict';

var node = document.createElement('style');
node.innerHTML = '.siteLinks ul li:first-child{display:none;}';

// To add more CSS, use lines like this:
// node.innerHTML += '.selector { font-size: large }';

document.body.appendChild(node);
