let operationList = {
    '/': '\u00F7',
    '%': '\u0025',
    '*': '\u00D7',
    '-': '\u2212',
    '+': '\u002B',
}

let result = "0";

function cleanResults () {
    document.getElementById('display-summary').value = 0
    document.getElementById('display-result').value = 0
}

function appendToResult (value) {
    const summary = document.getElementById('display-summary')
    const initialValue = summary.value

    if(initialValue === '0') {
        summary.value = operationList[value] ? "0" : value;
        result = operationList[value] ? result : value;
    } else {
        summary.value += operationList[value] ?? value;
        result += value;
    }
}

function getResult () {
    if(result.includes('%')) { result = result.replace(/%/g, "* 0.01 *"); }
    document.getElementById('display-result').value = eval(result)
}

function switchTheme () {
    document.getElementById('calculator').classList.toggle('dark');
}