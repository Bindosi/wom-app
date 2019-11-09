// JavaScript source code

function gotowam1 () {
    location.href = "whack-a-mole-1.html";
};

function gotowam() {
    location.href = "whack-a-mole.html";
};

function gotodraw() {
    location.href = "draw.html";
};

function clear() {
    var grid = clickableGrid(8, 8, function (el, row, col, i) {
        /*console.log("You clicked on element:", el);
        console.log("You clicked on row:", row);
        console.log("You clicked on col:", col);
        console.log("You clicked on item #:", i);
        console.log("Item colour:", el.style.backgroundColor);
        */

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
    var table = document.getElementById("statusTable");
    //var tl = body.getElementById("timeLeft");
    var x = table[0];
   
        x.innerHTML = --i;
}

function countdown(time) {
    setInterval(change(time), 1000);
}

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("w3-bar");
var sticky = navbar.offsetTop;


// Get the offset position of the navbar
//var sticky = navbar.offset;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
} 

