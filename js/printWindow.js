/**
 * 2. Write a JavaScript program to print the contents of the current window.
 */


const printWindow = () => {   
    const button =  document.querySelector('#print');

    button.addEventListener('click', function() {
       window.print();
    });
}

 printWindow();