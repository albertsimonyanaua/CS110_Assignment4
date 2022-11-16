function factorial(x){
     let num = x;
     let result = 1;
     for(i = num; i > 0; i--){
          result = result * num;
          num--;
     }
     return result;
}

console.log(factorial(10));


function gcd(num1, num2){
     let reminder = 0;
     let x = Math.abs(num1);
     let y = Math.abs(num2);
     if(x == 0 || y == 0){
          console.log(`There is no gcd for ${num1} and ${num2}`);
     }else if(x == y){
          return x;
     }else if(x > y){
          reminder = x % y;
          if(reminder == 0){
               return y;
          }else{
               while(x != 0 && y != 0){
                    reminder = y;
                    y = x % y;
                    x = reminder;
               }
               if( x >= y && x <= reminder){
                    return x;
               }else if(y >= x && y <= reminder){
                    return y;
               }else{
                    return reminder;
               }
          }
     }else{
          reminder = y % x;
          if(reminder == 0){
               return x;
          }else{
               while(x != 0 && y != 0){
                    reminder = x;
                    x = y % x;
                    y = reminder;
               }
               if( x >= y && x <= reminder){
                    return x;
               }else if(y >= x && y <= reminder){
                    return y;
               }else{
                    return reminder;
                    }
               }
          }
     }

console.log(gcd(-4548796427,-987261124423));


function lcm(z, m){
     let var1 = z * m;
     let var2 = gcd(z, m);
     return var1 / var2;
}

console.log(lcm(13,20));

function toHex(x){
     const digit = '0123456789ABCDEF';
     let num = '';
     let hex = '';

     while(x > 0){
          num = num.concat(digit[x % 16]);
          x = Math.floor(x / 16);
     }

     for(let i = num.length - 1; i >= 0; i--){
          hex = hex.concat(num[i]);
     }

     return hex;
}

console.log(toHex(5498653478));

module.export = {
     factorial: factorial,
     gcd: gcd,
     lcm: lcm,
     toHex: toHex
};