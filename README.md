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

Naming convention follows [Harry Roberts' naming convention](https://en.bem.info/toolbox/sdk/bem-naming/#harry-roberts-naming-convention).
Read more in the [Guidelines](https://cssguidelin.es/#bem-like-naming).

### Two types of modifiers are used:
 - a boolean flag<br>
    Original block/element name + double dash + mod name<br>
    **.b-block--mod** or **.b-block__elem--mod**
 - a key/value pair<br>
    Original block/element name + double dash + mod key name + single underscore + mod value<br>
    **.b-block--key_value** or **.b-block__elem--key_value**
    
For example:
```html
  <button class="button button--secondary">...</button>
  <section class="l-section l-section--background_light">...</section>
```

### Block-Modifier affects Elements
A descendant selector can be used to modify an Element based on a Modifier on the Block, i.e.
an Element can be affected by a Block-level Modifier:
```css
.l-section--offer .l-section__content-wrapper {
    background: url("../img/offer/background.png");
}
```
See more: http://getbem.com/faq/#block-modifier-affects-elements<br>
BEM cheatsheet: https://gist.github.com/ingdir/0b211b9253c376f9cfa5#bem-cheatsheet

## CSS specificity

It is often [recommended](https://csswizardry.com/2014/10/the-specificity-graph/) to keep specificity low, consistent and very little difference between the selectors in order to make the stylesheet maintainable.
Use of BEM methodology in this project allowed to keep specificity low and avoid spikes.
The below graph, genearated by Jonas Ohlsson’s [CSS Specificity Graph Generator](https://jonassebastianohlsson.com/specificity-graph/) shows specificity of this project's stylesheet.
![Project's stylesheet specificity](https://github.com/Marcin-L-Szczepanski/WebChallenge3/blob/master/resources/specificity.png)
Notes: 

## Media queries
Inspired by Dominique Briggs' [solution](https://medium.com/front-end-developers/the-solution-to-media-queries-in-sass-5493ebe16844)

- all media queries are defined in only one [media-queries.scss](/src/layout/_media-queries.scss) file.
- if a block requires media queries, the file contains mixins at the end - [See example](https://github.com/Marcin-L-Szczepanski/WebChallenge3/blob/4fae64fdc17e7642bb09bd768c4aabda160cfb3f/src/layout/l-wrapper/_l-wrapper.scss#L51)
- these mixins are called inside the break points defined in the media-queries.scss file

Naming convention:
The responsive suffix has been changed the from the Dominique's '--' (same as BEM's modifier suffix) to '@', which is a suggested suffix in [BEMIT syntax](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/) although the use is different than in BEMIT.

Example: <br>
_block.scss
```css
@mixin block\@screen_large {
    .block { styles }
```
_media-queries.scss
```css
@media only screen and (min-width: 850px) {
  @include block\@screen_large;
```

Issues: <br>
- Problem with naming many irregular breakpoints



## Src File structure

The Sass architecture in this project is a modification of solution introduced in Hugo Giraudel's Sass Guidelines:

-> https://sass-guidelin.es/#architecture

Components have been replaced with Blocks to keep reference to BEM methodology that has been used in this project.

Block folder includes _block.scss partial file, which contains the Block's Elements and Modifiers, as well as a block.js file.

All the partials have been stuffed into 5 main folders: Vendor, Abstracts, Base, Blocks and Layout + an additional Shame folder including the [shame.css](https://csswizardry.com/2013/04/shame-css/) that keeps hacks, quick-fix and temporary solution awaiting for better ones.


```
src/
|
|-- abstracts/                # Global Mixins and Variables
|   |-- _mixins.scss
|   |-- _variables.scss
|
|-- base/                     # Base styles
|   |-- _global.scss
|
|-- blocks/                   # Blocks, Elements and Modifiers
|   |-- button/
|       |-- _button.scss
|       |-- button--menu.js
|   |-- _copyright.scss
|   |-- _feature.scss
|   |-- _features.scss
|   |-- _heading.scss
|   |-- _items-list.scss
|   |-- _list.scss
|   |-- _logo.scss
|   |-- menu/
|       |-- _menu.scss
|       |-- menu__item.js
|   |-- _opinion.scss
|   |-- _partners.scss
|   |-- preloader/
|       |-- _preloader.scss
|       |-- preloader.js
|   |-- _project.scss
|   |-- _socials.scss
|
|-- layout/                   # Larger layout components; e.g. header, section, footer, etc.
|   |-- _l-header.scss
|   |-- _l-section.scss
|   |-- _l-wrapper.scss
|   |-- _media-queries.scss
|
|-- shame/                    # Stylings awaiting improving
|   |-- _shame.scss   # ---
|
|-- vendor/                   # Third party CSS files
|   |-- _normalize.scss       # Normalize.css v7.0.0
|
|-- style.scss                # Main Scss file compiles to style.css

```

Note to myself: Try and use ITCSS in next projects.
Check also other structures: 
- http://vanseodesign.com/css/sass-directory-structures/
- http://matthewelsom.com/blog/simple-scss-playbook.html
- https://github.com/chris-pearce/scally