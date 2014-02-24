jquery-checkradios
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

####Javascript
To get started simple add the following to your javascript:

```javascript

$('.checkradios').checkradios();

```
*Note: Make sure you add this javascript within a document ready function i.e $(document).ready();*

####HTML
Then add your checkboxes and/or radios within your markup:

```html

<input type="checkbox" class="checkradios" checked/>
<input type="radio" class="checkradios" checked/>

```









