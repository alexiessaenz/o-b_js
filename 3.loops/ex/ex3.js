let num = 3;
var fact = 1;
for(let i=1 ; i <= num; i++){
    fact*=i;
}
console.log("factorial de "+ num + ": "+ fact);

fact = 1;
num = 1;
while(num <= 3){
    fact*=num;
    num++;
}
console.log("factorial de "+ (num-1) + ": "+ fact);

fact = 1;
num = 1;
while(true){
    fact*=num;
    num++;
    if(num > 3){
        break;
    }
}
console.log("factorial de "+ (num-1) + ": "+ fact);