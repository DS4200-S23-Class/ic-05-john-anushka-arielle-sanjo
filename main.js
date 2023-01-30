
function buttonClicked() {
    let numberDiv = parseInt(document.getElementById("number-div").value);
    let result = numberDiv += 1;
    document.getElementById("number-div").value = result;
}