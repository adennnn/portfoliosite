import * as PIXI from "https://cdn.skypack.dev/pixi.js";
import { KawaseBlurFilter } from "https://cdn.skypack.dev/@pixi/filter-kawase-blur";
import SimplexNoise from "https://cdn.skypack.dev/simplex-noise";
import hsl from "https://cdn.skypack.dev/hsl-to-hex";
import debounce from "https://cdn.skypack.dev/debounce";
import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.2/build/threejs-toys.module.cdn.min.js'
neonCursor({
  el: document.getElementById('app'),
  shaderPoints: 16,
  curvePoints: 80,
  curveLerp: 0.5,
  radius1: 5,
  radius2: 30,
  velocityTreshold: 10,
  sleepRadiusX: 100,
  sleepRadiusY: 100,
  sleepTimeCoefX: 0.0025,
  sleepTimeCoefY: 0.0025
})

$(document).ready(() => {
  let typingElement = $('.typing');

  typingElement.on('click', (e) => {
    typingElement.removeClass('animate');
    setTimeout(() => typingElement.addClass('animate'), 1);
  })
});
