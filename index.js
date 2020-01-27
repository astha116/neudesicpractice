document.getElementById("add").onclick = cal()
document.getElementById("sub").onclick = cal()
document.getElementById("div").onclick = cal()
document.getElementById("mul").onclick = cal()

function cal(idd)
{
    let number1=parseFloat(document.getElementById("num1").value)
    let number2=parseFloat(document.getElementById("num2").value)

    if(isNaN(number1)||isNaN(number2))
        alert("not valid number. Please enter Valid number");
    else if(idd=="add")
    document.getElementById("ans").value=number1+number2;
    else if(idd=="sub")
    document.getElementById("ans").value=number1-number2;
    else if(idd=="div")
    document.getElementById("ans").value=number1/number2;
    else if(idd=="mul")
    document.getElementById("ans").value=number1*number2;    
}


