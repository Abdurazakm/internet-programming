const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

document.getElementById("add").addEventListener("click", function () {
    calculate("+");

});

document.getElementById("subst").addEventListener("click", function () {
    calculate("-");
});

document.getElementById("mult").addEventListener("click", function () {
    calculate("*");
});

document.getElementById("division").addEventListener("click", function () {
   
        calculate("/");

});
function calculate(operand){
    const number1 = parseFloat(num1.value);
    const number2 = parseFloat(num2.value);

    let calculation;

    switch(operand){
        case "+":
            calculation=number1 + number2;
            break;
        case "-":
            calculation = number1 - number2;
            break;
        case "*":
            calculation = number1 * number2;
            break;
        case "/":
            if(number2!==0)
                calculation = number1 / number2;
            else{
                result.innerHTML = "Error: Division by zero!";
                return;
            }

            break;
            default:
                result.innerHTML = "Error: Invalid operation";
    }
    result.innerHTML = `Result: ${calculation}`;
}
