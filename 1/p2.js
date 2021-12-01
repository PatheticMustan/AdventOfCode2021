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

const sliding =
  new Array(input.length-2)
    .fill(0)
    .map((v,i) => input[i] + input[i+1] + input[i+2]);

let last = 999999;
let result = 0;

sliding.forEach(v => {
  if (v > last) result++;
  last = v;
});

console.log(result);
