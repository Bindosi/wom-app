// JavaScript source code

function gotowam1 () {
    location.href = "moleStartScreen.html";
};

function gotowam() {
    location.href = "moleGame.html";
};

function gotodraw() {
    location.href = "drawV2.html";
};

function clear() {
    var grid = clickableGrid(8, 8, function (el, row, col, i) {

        if (el.style.backgroundColor == "transparent") {
            el.style.backgroundColor = "red";
        } else if (el.style.backgroundColor == "red") {
            el.style.backgroundColor = "green";
        } else if (el.style.backgroundColor == "green") {
            el.style.backgroundColor = "blue";
        } else if (el.style.backgroundColor == "blue") {
            el.style.backgroundColor = "transparent";
        }
    });

    document.body.appendChild(grid);
//TODO
};


/**Clickable grid retrieved from http://jsfiddle.net/6qkdP/2/
 * /
 * @param {any} rows
 * @param {any} cols
 * @param {any} callback
 */
function clickableGrid(rows, cols, callback) { 
    var i = 0;
    var grid = document.createElement('table');
    grid.className = 'grid';
    for (var r = 0; r < rows; ++r) {
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c = 0; c < cols; ++c) {
            var cell = tr.appendChild(document.createElement('td'));
            cell.style.backgroundColor = "transparent";
            //cell.innerHTML = ++i;
            ++i;
            //cell.addEventListener('click', clicked());
            cell.addEventListener('click',
                (function (el, r, c, i) {
                    return function () {
                        callback(el, r, c, i);
                    }
                })
                (cell, r, c, i), false);
        }
    }
    return grid;
}

function change(i) {
    var timer = document.getElementById("countdownTimer");
    timer.innerHTML = --i;
    if (i < 0) {
        timer.innerHTML = "STOP!";
    }
}

function countdown() {
    var timeLeft = 60;
    setInterval(function(timeLeft) {
        var timer = document.getElementById("countdownTimer");
        timer.innerHTML = --timeLeft;
        console.log(timeLeft);
        if (timeLeft < 0) {
            timer.innerHTML = "STOP!";
        }
    }, 1000);
}

