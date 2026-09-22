function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if the inputs are valid numbers
    if(!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        console.log('here');
        let result = multiply(num1, num2);
        displayResult(result);
    } else {
        console.log('in the else')
        displayResult('Please enter valid numbers');
    }
}

function multiply(a,b) {
    // Introduce a debugger statement to pause execution
    console.log("multiply the numbers")
    debugger;
    return a * b; // multiply the numbers
}

function displayResult(msg){
    console.log('msg:', msg);
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${msg}`;
}