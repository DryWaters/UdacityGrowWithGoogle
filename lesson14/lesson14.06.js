/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

var laugh = function(num) {
    var output = '';
    for (var x = 0; x < num; x++) {
        output += 'ha';
    }
    return output+='!';
}

console.log(laugh(3));