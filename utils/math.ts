// random
// ランダムな数(float)
// -----------------------------------
// @min : 最小値(float)
// @max : 最大値(float)
// return : min(含む)からmax(含む)までのランダムな数(float)
// -----------------------------------
export function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
