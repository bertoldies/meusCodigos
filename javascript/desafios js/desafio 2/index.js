

let productValue = Number(prompt('enter the product value'))

if(productValue >= 20){
    document.getElementById('result').innerHTML = 'Approved'
}
else{
    document.getElementById('result').innerHTML = 'Denid'
}

console.log(typeof(productValue))
console.log(productValue)