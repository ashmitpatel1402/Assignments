function swapCase(str) {
    var swapped = "";
    for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (char === char.toUpperCase()) {
    swapped += char.toLowerCase();
    } else {
    swapped += char.toUpperCase();
    }
    }
    return swapped;
}