//const { process } = require("./process");
var Queue = require('queue-fifo');
const readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var queue = [];
var availability = {}; //new Object();
var shift = new Object();
var sAv = {};
var sSh = new Object();
function main() {
    console.log('Write your code here!');
    procesline();

}

var procesline = function () {

    rl.on('line', function (line) {
        var s = line.split(' ');
        const fro = new Date(s[2] + 'T' + s[3] + ':00').getTime();
        const to = new Date(s[5] + 'T' + s[6] + ':00').getTime();
        const time = new Date(to).getTime();
        if (s[0] == 'Availability')
            availability[fro] = [to, s[1].slice(0, -1)];
        else
            shift[fro] = [to, s[1]];

    }).on('close', function () {
        sAv = sortkeys(availability);
        sSh = sortkeys(shift);
        var i = 0;
        for (var key in sAv)
            queue.push([key, sAv[key]])

        processSchedule(queue, sSh)

    })

}


processSchedule = (ava, shi) => {
    j = 0;
    console.log("from here")
    for (key in shi) {
        console.log(' ava ' + ava[0][0] + ' key ' + key)

        for (i = 0; i < ava.length; i++) {
            if (ava[i][0] <= key) {

                if (shi[key][0] <= ava[i][1][0]) {

                   console.log(shi[key][1] + " j : " + j++ + " " + ava[i][1][1])
                    break
                }
            }
        }
        while (ava[0][1][0] < key) {
            ava.shift();
            console.log('hi :')
        }

    }
    console.log(ava);

}

sortkeys = (obje) => Object.keys(obje).sort().reduce(
    (obj, key) => {
        obj[key] = obje[key];
        return obj;
    },
    {}
)


if (require.main === module) {
    main();
}
