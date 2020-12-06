DOM & HTML

DOM and HTML have new standards called web components. <— added by W3C


4 Categories
- HTML Imports
- HTML Templates
- Shadow DOM
- Custom elements

Front-End Framework (a.k.a. CSS Framework)
- Package of files
- Grid
- Typography
- Components like side panels, buttons, nav bars
- Compatible with most browsers (pre-tested)
- Examples:
    - Bootstrap (most popular, distinct look, mobile-first)
    - Foundation
    - Stylus
    - Semantic UI
    - UI Kit
    - Skeleton
    - Yaml
    - Gumby


Bootstrap Grid System
https://getbootstrap.com/docs/4.0/layout/grid/

<div class=“row”>
	<div class=“col-xs-4 text-center”>1 of 3</div>			// xs keeps it on one horizontal line
	<div class=“col-xs-4 text-center”>2 of 3</div>
	<div class=“col-xs-4 text-center”>3 of 3</div>
</div>

form-group vs control-group
form group is from Bootstrap3.
control group is from Bootstrap2.

<form …>	// Form element
	<input …>	// Input tag specifies input field
	<input…>	// Input elements


<h1>Title</h1>		// element

HTML Stuff

Ordering attributes in HTML tags.

- Angular projects in GitHub have good “correct” examples.
- id first
    - Used to point to style in stylesheet or to be manipulated by JS.
    - Used for DOM manipulation.
- name
    - Matters for inputs of forms

UI containers/windows that appear above content.
- modal/dialog (Click anwhere to dismiss.)
- popup (Must click x to close, eventually.)
- lightbox/theater (Enlarge and bring on part of screen into focus.)
- Popover/tooltip/hover card

Modal
- Create mode that diables main window.
- Main window still visible.
- Modal window a “child” window in front.

