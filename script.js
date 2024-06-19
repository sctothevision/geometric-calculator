
function calculateTriangle() {
    let side1 = document.getElementById('triangle-side1').value;
    let side2 = document.getElementById('triangle-side2').value;
    let side3 = document.getElementById('triangle-side3').value;
    let semiPerimeter = (parseInt(side1) + parseInt(side2) + parseInt(side3)) / 2;
    let area = Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));
    document.getElementById('triangle-result').innerHTML = 'Площадь: ' + area.toFixed(2);
}


function calculateSquare() {
    let side = document.getElementById('square-side').value;
    let area = side * side;
    let perimeter = 4 * side;
    document.getElementById('square-result').innerHTML = 'Площадь: ' + area + ', Периметр: ' + perimeter;
}

function calculateRectangle() {
    let width = document.getElementById('rectangle-width').value;
    let height = document.getElementById('rectangle-height').value;
    let area = width * height;
    let perimeter = 2 * (parseInt(width) + parseInt(height));
    document.getElementById('rectangle-result').innerHTML = 'Площадь: ' + area + ', Периметр: ' + perimeter;
}

function calculateCircle() {
    let radius = document.getElementById('circle-radius').value;
    let area = Math.PI * radius * radius;
    let circumference = 2 * Math.PI * radius;
    document.getElementById('circle-result').innerHTML = 'Площадь: ' + area.toFixed(2) + ', Длина окружности: ' + circumference.toFixed(2);  
}

  
function calculateTriangle() {
    let side1 = document.getElementById('triangle-side1').value;
    let side2 = document.getElementById('triangle-side2').value;
    let side3 = document.getElementById('triangle-side3').value;
    let semiPerimeter = (parseInt(side1) + parseInt(side2) + parseInt(side3)) / 2;
    let area = Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));
    document.getElementById('triangle-result').innerHTML = 'Площадь: ' + area.toFixed(2);
}