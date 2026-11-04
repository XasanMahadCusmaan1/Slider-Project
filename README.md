# Image Slider

A vanilla JavaScript image carousel with arrow controls and generated navigation dots.

## Features and current scope

- Previous and next slide controls with wraparound.
- One generated navigation dot per image.
- CSS translateX moves the image strip.

## Built with

HTML, CSS, and vanilla JavaScript. No package installation or build step is required.

## Run locally

Clone or download this repository, then serve its root with a local static server, such as VS Code Live Server. Open the address provided by the server. Serving the repository root preserves root-relative asset paths.

## Project structure

- `index.html`
- `style.css`
- `main.js`

## Learning focus

DOM collections, event listeners, loops, transforms, and keeping navigation state synchronized.

## Current limitations

Slide movement is based on a fixed 700px width. The dot-click handler assigns slideNumber = 1 + 1 instead of using the clicked index, so subsequent arrow navigation may be inconsistent. Documentation reflects source inspection; browser behavior was not tested during this README update.
