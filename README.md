# WebChallenge 3

Below PSD design converted to code.

Converted page is available at: https://marcin-l-szczepanski.github.io/WebChallenge3/

* [BEM](../blob/master/LICENSE)

![WebChallenge3 PSD design](#BEM)

## BEM
### MODIFIER

Modifiers are flags on blocks or elements to change appearance or behavior.

#### Naming
In this project, two types of modifiers are used:
 - a boolean flag
 - key/value pair.
Naming conventions:

  * Boolean modifiers:<br>
    Original block/element name + double dash + mod name<br>
    **.b-block--mod** or **.b-block__elem--mod**
  * Key/value modifiers:<br>
    Original block/element name + double dash + mod key name + single underscore + mod value<br>
    **.b-block--key_value** or **.b-block__elem--key_value**

For example:
```html
  <button type="button" class="button button--secondary">...</button>
  <section class="l-section l-section--background_light">...</section>
```

Elements can also be affected by a block-level modifier:
```css
.l-section--offer .l-section__content-wrapper {
    background: url("../img/offer/background.png");
}
```
See more: http://getbem.com/faq/#block-modifier-affects-elements

BEM cheatsheet: https://gist.github.com/ingdir/0b211b9253c376f9cfa5#bem-cheatsheet