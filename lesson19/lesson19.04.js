/*
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/

// Start with this variable!
var navList;

navList = $('li.active').prev().children(); // your code goes here!
console.log(navList);
navList.attr('href', '#1');