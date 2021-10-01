const readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});


if (require.main === module) {
    main();
}

function main() {

    var availQueue = [];
    var availability = new Object();
    var shift = new Object();
    var sortedAvail = new Object();
    var sortedShift = new Object();

    rl.on('line', function (line) {

        var s = line.split(' ');
        const fro = new Date(s[2] + 'T' + s[3] + ':00').getTime();
        const to = new Date(s[5] + 'T' + s[6] + ':00').getTime();

        if (s[0] == 'Availability')
            availability[fro] = [to, s[1].slice(0, -1)];
        else
            shift[fro] = [to, s[1].slice(0, -1)];

    }).on('close', function () {

        sortedAvail = sortkeys(availability);
        sortedShift = sortkeys(shift);
        for (var key in sortedAvail)
            availQueue.push([key, sortedAvail[key]])

        processSchedule(availQueue, sortedShift)

    })
}

processSchedule = (ava, shi) => {

    for (key in shi) {
        for (i = 0; i < ava.length; i++)
            if (ava[i][0] <= key)
                if (shi[key][0] <= ava[i][1][0]) {
                    console.log(shi[key][1])
                    break
                }
        while (ava[0][1][0] < key)
            ava.shift();
    }
}

sortkeys = (obje) => Object.keys(obje).sort().reduce(
    (obj, key) => {
        obj[key] = obje[key];
        return obj;
    },
    {}
)

/*  j = 0;
  console.log(ava);
       console.log(' ava ' + ava[0][0] + ' key ' + key)
      console.log(shi[key][1] + " j : " + j++ + " " + ava[i][1][1]) */
