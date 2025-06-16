precision mediump float;
varying vec2 vUv;
varying vec3 vNormal;
varying float vDistort;

uniform vec3 uBrightness;
uniform vec3 uContrast;
uniform vec3 uOscilation;
uniform vec3 uPhase;


// Simple color palettes by Inigo Quilez
// https://iquilezles.org/articles/palettes/
vec3 cosPalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  return a + b * cos(6.28318 * (c * t + d));
}

void main() {
  float distort = smoothstep(-0.1, 0.1, vDistort);

  vec3 brightness = uBrightness;
  vec3 contrast = uContrast;
  vec3 oscilation = uOscilation; // 周期
  vec3 phase = uPhase; // 色の位相
  vec3 color = cosPalette(distort, brightness, contrast, oscilation, phase);

  gl_FragColor = vec4(color, 1.0);
}