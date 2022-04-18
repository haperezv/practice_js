/**
 * 1. Write a JavaScript program to display the current day and time in the following format.  Sample Output : Today is : Tuesday.
 *Current time is : 10 PM : 30 : 38
 */

const currentDay = () => {
   
let today = new Date();
let date =  `${today.getMonth() + 1} - ${today.getDate()} -  ${today.getFullYear()}`;
let days = today.getDay();
let dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let time = `${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()}`;
let day =`Today is : ${dayList[days]};
Current time is : ${time}`;
console.log(day);
}

currentDay();

