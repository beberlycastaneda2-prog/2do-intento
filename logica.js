let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let resultado=document.getElementById("resultado")
let boton = document.getElementById("boton")

boton.addEventListener("click",sumar)
function sumar (){

let suma
let num
let numero
num=Number(num1.value)
numero=Number(num2.value)
suma=num+numero
resultado.textContent=(suma)
}



