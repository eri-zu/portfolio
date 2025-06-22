precision mediump float;
varying vec2 vUv;
varying vec3 vPosition;
uniform float uTime;
uniform vec3 uBrightness;
uniform vec3 uContrast;
uniform vec3 uOscilation;
uniform vec3 uPhase;
varying float vNoise;

// Author @patriciogv - 2015
// http://patriciogonzalezvivo.com
// random2d function
// 0 - 1

float random2d(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

// Simple color palettes by Inigo Quilez
// https://iquilezles.org/articles/palettes/
vec3 cosPalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  return a + b * cos(6.28318 * (c * t + d));
}

void main() {
  float brightnessY = smoothstep(0.0, 6.0, vPosition.z);
  float brightnessX = 1.0 - smoothstep(0.0, 5.0, abs(vPosition.x));
  float posY = smoothstep(-2.0, 100.0, vPosition.y);

  float edgeFadeX = smoothstep(4.0, 2.0, vPosition.x) * smoothstep(-4.0, -2.0, vPosition.x);
  float edgeFadeY = smoothstep(0.0, 0.5, vUv.y) * smoothstep(1.0, 0.5, vUv.y);
  float edgeFade = edgeFadeX * edgeFadeY;

  vec3 brightness = uBrightness; 
  vec3 contrast = uContrast;
  vec3 oscilation = uOscilation; // 周期
  vec3 phase = uPhase; // 色の位相
  vec3 color = cosPalette(vPosition.y, brightness, contrast, oscilation, phase) * edgeFade;

  color *= brightnessY * brightnessX;

  gl_FragColor = vec4(color, 1.0);

}