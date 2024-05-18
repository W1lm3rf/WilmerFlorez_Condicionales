let num1 = parseInt(prompt("Ingrese el primer numero: "));
let num2= parseInt(prompt("Ingrese el segundo numero: "));
let num3= parseInt(prompt("Ingrese el segundo numero: "));

if(num1<num2 && num1<num3){
    alert("El numero "+num1+"es el mas chico" )
}else if(num2<num1 && num2<num3){
    alert("El numero "+num2+"es el mas chico" )
}else{
    alert("El numero "+num3+"es el mas chico" )
}
