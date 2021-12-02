const input = `forward 5
down 5
forward 8
up 3
down 8
forward 2`.split("\n");

let x = 0, y = 0;

input.forEach(v => {
    let [dir, m] = v.split(" ");
    m = +m;

    switch (dir) {
        case "forward":
            x += m;
            break;
        case "down":
            y += m;
            break;
        case "up":
            y -= m;
            break;
    }
});

console.log(x * y);
