<p align="center"><img alt="Woah!!!" src="https://github.com/joerez/Woah.css/blob/master/Woah.css.gif?raw=true"></p>


# Woah.css
CSS Animation Library for eccentric web developers.

View demo here: http://www.joerezendes.com/projects/Woah.css/

Write up: https://medium.com/@joerezendes_91375/need-stars-on-github-21a2fab3550d

Official documentation: http://www.joerezendes.com/projects/woah.css/docs/docs/#/
## Installation

To install via npm, simply do the following:
```
$ npm install woah.css --save
```

To install via Bower, simply do the following:
```
$ bower install woah.css --save
```


## How to use
Download woah.css and put it in your documents ```head```.

```
<head>
  <link rel="stylesheet" href="/woah.css">
</head>
```
Due to some (Overly) Elaborate animations, like scaleOut, you need to include this link after your main stylesheet.

## Adding Animations
To animate an element, simply add the class ```woah``` followed by whichever animation you choose. Example:

```
<h1 class="woah wowzors">Hello world</h1>
```

## Iterate Animations Forever
Want to repeat your animations for all of eternity? Use the infinite class. Example:
```
<h1 class="woah wowzors infinite">Woah</h1>
```
# Different types of animations
Woah.css has three different types of animations to choose from.

- Woah animations
-- These are very eccentric and barely practical, but are very fun and showy.

- Wow animations
-- These are still a little eccentric, but could very well be used in normal websites.

- Normie animations
-- These are very basic.

## To Do List
 - Add CSS Variables to easily change duration with inline styles
 - More animations that make use of pseudo elements, Ex: dealWithIt
 - Cross browser functionality
