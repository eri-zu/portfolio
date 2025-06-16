precision mediump float;

uniform sampler2D uTexture;
uniform float uProgress;
uniform float uTime;
uniform bool isBaseScanLine;
uniform bool isGrainNoise;
uniform bool isColorShift;

varying vec2 vUv;

// Author @patriciogv - 2015
// http://patriciogonzalezvivo.com
// random2d function
// 0 - 1
float random2d(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main() {
  float baseScaneLine = 0.0;
  float grainNoise = 1.0;
  vec3 texColor = texture2D(uTexture, vUv).rgb;

  if(isBaseScanLine) {  
    vec2 newUv = vUv;
    newUv *= vec2(1.0, 150.0);
    newUv = fract(newUv - vec2(0.0, uTime * 100.0));

    baseScaneLine = smoothstep(0.0, 0.5, newUv.y); // グラデ1端
    baseScaneLine *= smoothstep(1.0, 0.5, newUv.y); // グラデ2端
    baseScaneLine = 1.0 - baseScaneLine; // 反転
    // baseScaneLine *= 0.03;
    baseScaneLine *= 0.07;
  }

  if(isGrainNoise) {
    vec2 newUv = vUv;

    grainNoise = random2d(newUv + uTime * 0.001) * 0.1; // 0 - 1
    float brightness = 0.7;
    grainNoise = mix(brightness, 1.0, grainNoise);
  }

  if(isColorShift) {
    float shift1 = 0.04 * 0.15;
    float shift2 = 0.01 * 0.15;
    float shift3 = 0.03 * 0.15;
    float r = texture2D(uTexture, vUv + vec2(shift1, 0.0)).r;
    float g = texture2D(uTexture, vUv + vec2(shift3, 0.0)).g;
    float b = texture2D(uTexture, vUv + vec2(shift2, 0.0)).b;

    texColor = vec3(r, g, b);
  } else {
    texColor = texture2D(uTexture, vUv).rgb;
  }

  gl_FragColor = vec4((texColor + baseScaneLine) * grainNoise, 1.0);
  
}