// default uniform
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

// default attribute
attribute vec3 position;
attribute vec2 uv;
attribute vec3 normal;

// custom uniform
uniform float uTime;

// custom varying
varying vec2 vUv;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectPosition = projectionMatrix * viewPosition;

  gl_Position = projectPosition;
  
  vUv = uv;
}