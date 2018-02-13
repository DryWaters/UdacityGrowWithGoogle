/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num) {
    var output = '';
    for (var x = 0; x < num; x++) {
        output += 'ha'
    }
    return output += '!';
}

console.log(laugh(10));