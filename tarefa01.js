
function Pares(n1,n2){
  var n1=0;
  var n2=100;
  for(var x= n1; x<=n2; x++){
    if(x%2===0){
        console.log("numero par: "+ x + ".");
    }

  }
}


function soma(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
      soma += array[i];
    }
    return soma;
  }
  function removenegativo(array) {
    return array.filter(function(num) {
      return num >= 0;
    });
  }
  function multiplicar(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
      newArray.push(array[i] * 2);
    }
    return newArray;
  }
  function promise(n1,n2){
    var soma=n1+n2;
    if(soma%2==0){
      console.log("O valor é par e o resultado é : "+soma);

    }else if(soma%2==1){
      console.log("...");
    }
  }
  
  
  
  const numeros = [1,2,3,4,5,6,7,8,9,10];
  const resultado = soma(numeros);
  const numerosnegativos =[1,-2,-3,4,5,6,-7];
  var removido= removenegativo(numerosnegativos);

  var multiplicado = multiplicar(numeros);
  console.log(multiplicado); 
  
 
  

console.log(Pares(0,100));
console.log("Soma total dos numeros : " + resultado);
console.log("Numeros negativos removidos, apenas positivos: "+ removido);
console.log("Array multiplicado: "+multiplicado);
console.log(promise(1,1)); 


