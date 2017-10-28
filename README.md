# WebChallenge 3

Below PSD design converted to responsive website.

Converted page is available at: https://marcin-l-szczepanski.github.io/WebChallenge3/

More information about the project:
* [BEM](#bem)
* [CSS specificty](#css-specificity)
* [Media queries](#media-queries)
* [File structure](#file-structure)


![WebChallenge3 PSD design](https://github.com/Marcin-L-Szczepanski/WebChallenge3/blob/master/resources/3.jpg)

## BEM

[BEM methodology](https://en.bem.info) has been used in this project.

Naming convention follows [Harry Roberts' naming convention](https://en.bem.info/toolbox/sdk/bem-naming/#harry-roberts-naming-convention)
Read more in the [Guidelines](https://cssguidelin.es/#bem-like-naming).
Two types of modifiers are used:
 - a boolean flag
 - a key/value pair
 
  * Boolean modifiers:<br>
    Original block/element name + double dash + mod name<br>
    **.b-block--mod** or **.b-block__elem--mod**
  * Key/value modifiers:<br>
    Original block/element name + double dash + mod key name + single underscore + mod value<br>
    **.b-block--key_value** or **.b-block__elem--key_value**

For example:
```html
  <button class="button button--secondary">...</button>
  <section class="l-section l-section--background_light">...</section>
```

A descendant selector can be used to modify an Element based on a Modifier on the Block, i.e.
an Element can be affected by a Block-level Modifier:
```css
.l-section--offer .l-section__content-wrapper {
    background: url("../img/offer/background.png");
}
```
See more: http://getbem.com/faq/#block-modifier-affects-elements

BEM cheatsheet: https://gist.github.com/ingdir/0b211b9253c376f9cfa5#bem-cheatsheet

## CSS specificity

It is often [recommended](https://css-tricks.com/strategies-keeping-css-specificity-low/) to keep specificity low, consistent and very little difference between the selectors in order to make the stylesheet maintainable.
Use of BEM methodology in this project allowed to keep specificity low and avoid spikes.
The below graph, genearated by Jonas Ohlsson’s [CSS Specificity Graph Generator](https://jonassebastianohlsson.com/specificity-graph/) shows specificity of this project's stylesheet.
![Project's stylesheet specificity](https://github.com/Marcin-L-Szczepanski/WebChallenge3/blob/master/resources/specificity.png)
Notes: 

## Media queries
Inspired by https://medium.com/front-end-developers/the-solution-to-media-queries-in-sass-5493ebe16844
!ADD DESCRIPTION


## File structure
```
src/
|
|-- abstracts/
|   |-- _mixins.scss          # Scss Mixins
|   |-- _typography.scss      # Scss Variables
|   ...
|
|-- base/                     # Base style
|   ...
|
|-- style.scss                # Main Scss file compiles to style.css

```
