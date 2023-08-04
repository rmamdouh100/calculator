function appendToResult(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculate() {
    var result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
}
document.addEventListener("keydown", function(event) {
    const key = event.key;
    const operators = ["+", "-", "*", "/"];
    const validKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ...operators, "=", "Enter", "Backspace", "Delete"];

    if (validKeys.includes(key)) {
        event.preventDefault();
        
        if (key === "=" || key === "Enter") {
            calculate();
        } else if (key === "Backspace" || key === "Delete") {
            clearResult();
        } else {
            appendToResult(key);
        }
    }
});