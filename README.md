jquery.checkradios
==================

A jQuery Plugin that allows you to use CSS to style checkboxes and radios without using images.


##Introduction

This jQuery plugin was designed to allow you to fully customize checkboxes and radios without using standard images and with scalability in mind. Most plugins I have come across use images such as jpegs and pngs to add custom checkbox ticks and radio circles. This plugin instead uses vector based icons/fonts to add in the ticks and circles which allows far greater customisation as well as scalability and ultimately much greater control over the checkboxes and radios using css.

This plugin uses custom icons provided by icomoon (icomoon.io) for its ticks and radios circles built in by default however it is also compatible with other font based icons platforms such as FontAwsome.


##Installation


###Javascript
Include jquery.checkradios.min.js anywhere after jQuery, ideally at the bottom of the body tag.

```html

<!-- jQuery - Required to use the jQuery plugin (Obviously) -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>

<!-- Checkradios plugin -->
<script src="<PATH-TO-PLUGIN>/jquery-checkradios/js/jquery.checkradios.min.js"></script>

```

###CSS

Include the query.checkradios.min.css CSS in the head tag of your page

```html

<!-- The main styles for the checkradios plugin to provide default styles -->
<link rel="stylesheet" href="<PATH-TO-PLUGIN>/jquery-checkradios/css/jquery.checkradios.min.css" type="text/css"/>

```



##Usage

###Basic Setup

To get started simply add the following to your __Javascript__:

```javascript

$(document).ready(function(){

    $('.checkradios').checkradios();

});

```

Then add your checkboxes and/or radios within your __HTML__:

```html

<input type="checkbox" class="checkradios" checked/>
<input type="radio" class="checkradios" checked/>

```

This should be the __outcome__:

![alt text](demo_assets/img/basic_example.jpg?raw=true "Basic Setup")


##Customising

###Adding Custom Styles

You can add custom styles to the check boxes and radios by simply adding a class to the checkbox
or radio input and targeting it within the css. All classes added to the input will be applied 
to the container that the plugin creates to display the new customised checkbox and radio.

To add custom styling, create a css class like this:

```css

.custom{
    
    font-size:50px;
    color:#6CF;
    border:2px solid #6CF;
	
    -webkitbox-shadow:inset 0px 0.1em 0.1em rgba(0,0,0,0.3);
    -moz-box-shadow:inset 0px 0.1em 0.1em rgba(0,0,0,0.3);
    box-shadow:inset 0px 0.1em 0.1em rgba(0,0,0,0.3);
	

}

```




