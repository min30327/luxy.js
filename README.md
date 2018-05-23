# luxy.js

Inertia scroll and parallax effect plugin in Vanilla.js


## Demo
[View the demo](http://min30327.github.io/luxy.js/)

## Installation

You can install it using npm:

```
npm install luxy.js --save
```

Or just include the script in your page:

```html
<script src="path/to/luxy.js" charset="utf-8"></script>
```

Included luxy.js in your project and initialize:

```html
<script charset="utf-8">
    luxy.init();
</script>
```

## Usage

Wrap the entire content with the element specified in the wrapper option. Please exclude fixed elements.

```html
<div id="luxy">
    ... Entire content
</div>
```

Add .luxy-el to the element for which parallax effect is to be specified.

```html
<div id="luxy">
    <div class="luxy-el"></div>
</div>
```

Specify the speed of the parallax effect with the data-speed-y attribute and offset with the data-offset attribute.

```html
<div id="luxy">
    <div class="luxy-el" data-speed-y="5" data-offset="-50"></div>
</div>
```

If you want to move horizontally, specify data-horizontal="1" and specify the speed in the horizontal direction with the data-speed-x attribute.

```html
<div id="luxy">
    <div class="luxy-el" data-horizontal="1" data-speed-x="-5"></div>
</div>
```

## Options

| Name         | default    | description                       |
|--------------|------------|-----------------------------------|
| wrapper      | '#luxy'    | Entire content wrapper element.   |
| targets      | '.luxy-el' | Parallax effect targets elements. |
| wrapperSpeed | 0.08       | Inertia scroll speed.             |



