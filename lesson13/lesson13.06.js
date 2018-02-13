/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

// your code goes here

var countdown = 60
var tasks = {
    '50': 'Orbiter transfers from ground to internal power',
    '31': 'Ground launch sequencer is go for auto sequence start',
    '16': 'Activate launch pad sound suppression system',
    '10': 'Activate main engine hydrogen burnoff system',
    '6': 'Main engine start',
    '0': 'Solid rocket booster ignition and liftoff!'
    };

while (countdown >= 0) {
    if (countdown in tasks) {
        console.log(tasks[countdown]);
    } else {
        console.log('T-' + countdown + ' seconds');
    }
    countdown--;
}