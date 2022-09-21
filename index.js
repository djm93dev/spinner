// create slider to control the speed of the spinner
var slider = document.createElement('input');
slider.type = 'range';
slider.id = 'slider';
slider.min = 10;
slider.max = 1000;
slider.value = 1000;
slider.style.width = '100px';
document.body.appendChild(slider);

// create a var to hold the spinner
var spinner = document.getElementById('spinner');

// event handler for the slider & spinner interaction
slider.oninput = function() {
    spinner.style.animationDuration = slider.value + 'ms';
    rps = 1000 / slider.value;
    rpsDiv.innerHTML = rps + ' rotations per second';
    };

// claculate rotations per second
var rps = 1000 / slider.value;
// create a div to display the rps
var rpsDiv = document.createElement('div');
rpsDiv.innerHTML = rps + ' rotations per second';
// center the rpsDiv
rpsDiv.style.textAlign = 'center';
// add the rpsDiv to the body
document.body.appendChild(rpsDiv);

// color incrementor
var colors = [];
for (var i = 0; i < 360; i++) {
    i = (i + 1) % 360;
    var color = 'hsl(' + i + ', 100%, 50%)';
    colors.push(color);
    
    }
var i = 0;

// increment the color of the spinner
spinner.onanimationiteration = function() {
    spinner.style.boxShadow = '0 0 20px 5px ' + colors[i];
    spinner.style.backgroundColor = colors[i];
    i = (i + 1) % colors.length;
    }
    




