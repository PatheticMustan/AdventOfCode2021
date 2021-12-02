const input = `forward 5
down 5
forward 8
up 3
down 8
forward 2`.split("\n");

let x = 0, y = 0, aim = 0;

input.forEach(v => {
    let [dir, m] = v.split(" ");
    m = +m;

    switch (dir) {
        case "forward":
            x += m;
            y += aim * m;
            break;
        case "down":
            aim += m;
            break;
        case "up":
            aim -= m;
            break;
    }
});

console.log(x * y);
