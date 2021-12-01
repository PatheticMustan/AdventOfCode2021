const input = `199
200
208
210
200
207
240
269
260
263`.split("\n").map(Number);

let last = 999999;
let result = 0;

input.forEach(v => {
  if (v > last) result++;
  last = v;
});

console.log(result);
