/**
 * 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically (every 1000 ms)
 * removing one letter from the end of the string and attaching it to the front.
 */

//rotateString('w3resource');

const rotateString = () => {
    let str = 'w3resource';
    let interval = setInterval(() => {
        str = str.slice(1) + str.slice(0, 1);
        console.log(str);
    }, 1000);
    setTimeout(() => {
        clearInterval(interval);
    }, 10000);
}

rotateString();