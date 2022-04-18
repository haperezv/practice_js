/**
 * 3. Write a JavaScript program to get the current date and show the date in the expected format.  
 */


 const getCurrent = () => {     // ES6
    let today = new Date();
    let date =  `${today.getMonth() + 1} - ${today.getDate()} -  ${today.getFullYear()}`;
    let re = /-/gi;
    console.log(`${date.replace(re, '/')} , ${date}`);
 }

 getCurrent();