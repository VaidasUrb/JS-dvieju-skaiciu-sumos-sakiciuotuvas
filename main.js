let forma = document.querySelector("form");
let rezultatas = document.createElement("p");

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


let forma2 = document.getElementsByName("form")[1];
let apskaiciavimas = document.createElement("p");
let content = document.querySelector("body");

forma2.addEventListener("submit", submitInputs);
function ubmitInputs(e) {
    e.preventDefault();
    let svoris = +forma2[number3].value;
    let ugis = +forma2[number4].value;
    displayResult(calcBMI(svoris, ugis));
}

function displayResult(bmi) {
    XPathResult.textContent = `jusu kmi: ${bmi}, busena ${checkWeightStatus(bmi)}.`;

}
function calcBMI(kg, m) {
    return (kg / (m * m)).toFixed(2);
}
function checkWeightStatus(kmi) {
    let result;
    if (kmi < 18.5) {
        result = "mazas svoris";
    } else if (18.5 <= kmi && kmi < 25) {
        result = "vid svoris";
    } else if (25 <= kmi && kmi < 30) {
        result = "vissvoris";
    } else {
        result = "nutukimas";
    }
}