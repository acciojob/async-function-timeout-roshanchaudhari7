//your JS code here. If required.
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const submitBtn = document.getElementById('btn');
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const outputDisplay = document.getElementById('output');
submitBtn.addEventListener('click', async function() {
    // Get the user input values
    let textValue = textInput.value;
    let delayTimeValue = delayInput.value;
    outputDisplay.innerHTML = '';

    // Wait for the specified delay before resolving the promise.
    await delay(delayTimeValue);

    // Display the text after the delay
    outputDisplay.innerText = textValue;
});