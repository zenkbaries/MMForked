---
date: "2018-10-27 07:28:11 -0600"
canvas: true
title: Bouncing Dots
css: canvas
js: bouncingdot
description:
tags:
-   coding
-   javascript
-   animation
-   canvas
---

## Codes

```javascript
function Dots() {
  this.x = Math.round(Math.random() * c.width);
  this.y = Math.round(Math.random() * c.height);
}

if ((dot.x <= 0) || (dot.x >= screenWidth)) {
  dirX = dirX * -1;
}

if ((dot.y <= 0) || (dot.y >= screenHeight)) {
  dirY = dirY * -1;
}

dot.x = dot.x + dirX;
dot.y = dot.y + dirY;

```
