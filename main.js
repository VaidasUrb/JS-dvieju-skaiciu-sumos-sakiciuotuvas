let forma = document.querySelector("form");
let rezultatas = document.createElement("h4");

forma.addEventListener("submit", function (e) {
    e.preventDefault();
    let number1 = +forma["number1"].value;
    let number2 = +forma["number2"].value;
    sum = number1 + number2;
    if (sum == sum) {
        rezultatas.textContent = `Atsakymas ${sum} `;
    } else {
        rezultatas.textContent = "nesamone";
    }
    body.appendChild(rezultatas);
})


