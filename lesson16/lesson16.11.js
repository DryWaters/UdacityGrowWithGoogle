/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name: 'Daniel',
    friends: 10,
    messages:  ['One message', 'Two message'],
    postMessage: function(message) {
        this.messages.push(message);
    },
    deleteMessage: function(index) {
        this.messages.splice(index, 1);
    },
    addFriend: function() {
        this.friends++;
    },
    removeFriend: function() {
        this.friends--;
    }
}