precision mediump float;

varying vec4 vRandomNum;
varying float vScaleAnimation;

uniform vec3 uColor1;
uniform vec3 uColor2;
uniform float uAlpha;

void main() {
  vec2 newUv = gl_PointCoord;
  float dist = 1.0 - smoothstep(0.0, 0.5, distance(vec2(0.5), newUv));
  
  vec3 color = mix(uColor1, uColor2, vRandomNum.y);

  gl_FragColor = vec4(color, dist * vScaleAnimation * uAlpha);
}