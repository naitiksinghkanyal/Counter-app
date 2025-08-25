const countValue = document.querySelector('#counter');

const increment = () => {
    let value = parseInt(countValue.innerText); // get the value from the UI 
    value = value + 1; // increase the value of the counter
    countValue.innerText = value; // writing the new value in the counter 


};

const decrement = () => {
    let value = parseInt(countValue.innerText); // get the value from the UI 
    value = value - 1; // decrease the value of the counter
    countValue.innerText = value; // writing the new value in the counter 

};