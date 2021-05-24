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
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [https://www.frontendmentor.io/profile/dalvinderjitsingh](https://www.frontendmentor.io/profile/dalvinderjitsingh)
- Live Site URL: [https://dalvinderjitsingh.github.io/frontend-mentor-challenges/stats-preview-card-component](https://dalvinderjitsingh.github.io/frontend-mentor-challenges/stats-preview-card-component)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learned how to add a filter on an image by overlaying a div on top of the image and setting the prefered background colour and amount of opacity.

To see what I mean, check out the code snippet below:

```html
<div id="hero-image">
  <img
    src="images/image-header-desktop.jpg"
    alt="A group of women working together and using their laptop."
    width="100%"
    height="100%"
  />
  <div id="img-overlay"></div>
</div>
```

```css
#hero-image {
  width: 50%;
  height: 100%;
  position: relative;
}

img {
  display: block;
  max-width: 100%;
  height: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
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

### Continued development

I would like to learn more about the CSS filter property and how to add visual effects to images.

## Author

- Website - [Dalvinderjit Singh](https://dalvinderjitsingh.github.io/)
- Frontend Mentor - [@dalvinderjitsingh](https://www.frontendmentor.io/profile/dalvinderjitsingh)
- Twitter - [@dalvinderjit01](https://twitter.com/dalvinderjit01)