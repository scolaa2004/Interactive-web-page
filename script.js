// Declare variables of different data types
let userName = "jack"; // String
let age = 30; // Number
let isActive = true; // Boolean

// Define functions for basic arithmetic operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        console.log("Error: Division by zero");
        return "Error: Division by zero";
    }
    return a / b;
}

// DOM Manipulation
document.getElementById("addBtn").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = add(num1, num2);
    document.getElementById("resultText").textContent = "Result: " + result;
    console.log("Add:", result);
});

document.getElementById("subtractBtn").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = subtract(num1, num2);
    document.getElementById("resultText").textContent = "Result: " + result;
    console.log("Subtract:", result);
});

document.getElementById("multiplyBtn").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = multiply(num1, num2);
    document.getElementById("resultText").textContent = "Result: " + result;
    console.log("Multiply:", result);
});

document.getElementById("divideBtn").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = divide(num1, num2);
    document.getElementById("resultText").textContent = "Result: " + result;
    console.log("Divide:", result);
});

// Chart.js integration
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
