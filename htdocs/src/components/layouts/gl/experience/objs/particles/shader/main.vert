precision mediump float;

// default uniform
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

// default attribute
attribute vec3 position;
attribute vec3 offset;
attribute vec4 randomNum;

// custom uniform
uniform float uTime;
uniform float uSize;

// custom varying
varying vec2 vUv;
varying vec4 vRandomNum;
varying float vScaleAnimation;

void main() {
  vec3 pos = position;
  pos += offset;
  
  vec4 modelPosition = modelMatrix * vec4(pos, 1.0); 
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectPosition = projectionMatrix * viewPosition;

  float scaleAnimation = smoothstep(0.0, 1.0, sin(uTime * 0.8 + randomNum.x * 3.14 * 2.0));

  gl_Position = projectPosition;
  gl_PointSize = uSize * (smoothstep(0.0, 2.5, offset.z) + 1.0) * scaleAnimation;
  
  vRandomNum = randomNum;
  vScaleAnimation = scaleAnimation;
}