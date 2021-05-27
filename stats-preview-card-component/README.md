# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/responsive-card-using-html-and-css--l6vYO-v2](https://www.frontendmentor.io/solutions/responsive-card-using-html-and-css--l6vYO-v2)
- Live Site URL: [https://dalvinderjitsingh.github.io/frontend-mentor-challenges/stats-preview-card-component](https://dalvinderjitsingh.github.io/frontend-mentor-challenges/stats-preview-card-component)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learned how to add a filter to an image. At first, I achieved this by overlaying a div on top of the image and setting the prefered background colour and amount of opacity.

To see what I mean, check out the code snippet below:

```html
<div id="hero-image">
  <img
    src="images/image-header-desktop.jpg"
    alt="Three people are sitting at a table. Two are using their laptops and another is smiling while looking towards their left."
  />
  <div id="img-overlay"></div>
</div>
```

```css
#hero-image {
  width: 49%;
  height: 100%;
  position: relative;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

img {
  display: block;
  max-width: 100%;
  height: 100%;
}

#img-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* The "a" in "hsla()" specifies the opacity of the color. */
  background-color: hsla(277, 96%, 30.5%, 0.5);
}
```

However, after receiving feedback to try out the CSS mix-blend-mode property and to set the value to multiply, I learned that this method was much simpler and decided to use it instead.

To see what I mean, check out the code snippet below:

```html
<div class="hero-image">
  <img
    src="images/image-header-desktop.jpg"
    alt="Three people are sitting at a table. Two are using their laptops and another is smiling while looking towards their left."
  />
</div>
```

```css
.hero-image {
  width: 49%;
  height: 100%;
  background-color: hsl(277, 64%, 61%);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

img {
  display: block;
  max-width: 100%;
  height: 100%;
  mix-blend-mode: multiply;
  opacity: 0.75;
}
```

### Continued development

I would like to learn more about the CSS filter and mix-blend-mode property and usefull ways to add visual effects to images. I would also like to learn more about html and css accessibility best practices.

### Useful resources

- [W3Schools](https://www.w3schools.com/cssref/pr_mix-blend-mode.asp) - This is a resource I'd recommend to anyone who wants to learn about the CSS mix-blend-mode property.
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode) - This is another resource I'd recommend to anyone who wants to learn about the CSS mix-blend-mode property.

## Author

- Website - [Dalvinderjit Singh](https://dalvinderjitsingh.github.io/)
- Frontend Mentor - [@dalvinderjitsingh](https://www.frontendmentor.io/profile/dalvinderjitsingh)
- Twitter - [@dalvinderjit01](https://twitter.com/dalvinderjit01)

## Acknowledgments

I would like to thank every Frontend Mentor community member's solution which I drew insight and inspiration from and also @palprogramming and @grace-snow for providing helpful feedback on my solution.
