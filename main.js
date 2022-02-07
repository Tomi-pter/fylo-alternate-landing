const input = document.querySelectorAll("input");
const btn = document.querySelectorAll("button");
const span = document.querySelectorAll(".validity");

const inputArr = Array.from(input);
const spanArr = Array.from(span);
const btnArr = Array.from(btn);
console.log(btnArr);

inputArr[0].addEventListener("input", validateInput1);
inputArr[1].addEventListener("input", validateInput2);
btnArr[0].addEventListener("click", submit);
btnArr[1].addEventListener("click", submit);

function validateInput1() {
    if (inputArr[0].validity.typeMismatch) {
        spanArr[0].textContent = "Please provide a valid email";
    } else if (inputArr[0].value.length === 0) {
        spanArr[0].textContent = "Please input your email";
    } else {
        spanArr[0].textContent = "";
        return true;
    }
}

function validateInput2() {
    if (inputArr[1].validity.typeMismatch) {
        spanArr[1].textContent = "Please provide a valid email";
    } else if (inputArr[1].value.length === 0) {
        spanArr[1].textContent = "Please input your email";
    } else {
        spanArr[1].textContent = "";
        return true;
    }
}

function submit(e) {
    if (!validateInput1() && !validateInput2()) {
        e.preventDefault();
    }
}