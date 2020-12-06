# jQuery

## About

All JavaScript plugins for Bootstrap require jQuery be included. jQuery must be included before Bootstrap in head.

## Anchors
#### Scroll to top
`a href="#"`

#### Don't go anywhere
`a href="#!"`

#### Scroll to element named little-div
`a href="#little-div"`

## Other
Android browsers (browser, chrome, etc) won't accept click events on anything but anchor tags. So say you want to use jQuery's .click() method on a `<div></div>`, it won't work. Either has to be on an anchor or you have to use touch events.

The onclick=".." attribute is called an inline event handler.

Where `id-name` corresponds to `<div id="id-name"></div>`

`$('#id-name').methodName('otherArgs');`

Putting the "#" symbol as the href for something means that it points not to a different URL, but rather to another id or name tag on the same page.

## Functions
The .read() function not necessary if your js is last thing that loads before closing `</body>` tag.
```
$(document).ready(function() {
// do something on document ready
});
```

The shorthand for $(document).ready:
```
$(function() {
// do something on document ready
});
```

## Resources
https://www.w3schools.com/jquery/trysel.asp
http://elijahmanor.com/differences-between-jquery-bind-vs-live-vs-delegate-vs-on/
https://openclassrooms.com/en/courses/3273226-dive-into-bootstrap/3276742-jquery-plugins
