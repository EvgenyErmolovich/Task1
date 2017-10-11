// JavaScript source code
function calc(element) {
    if (typeof element != 'number' && typeof element != 'string') {
        return element;
    }
    element = parseInt(element, 10);
    if (element == 0) {
        return element += 10;
    }
    if (element > 100) {
        return element -= 100;
    }
    if (element < 100) {
        return element += 100;
    }
    return element;
}

for (var i = 0; i < data.length; i++) {
    data[i] = calc(data[i]);
}