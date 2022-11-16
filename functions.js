function plusPattern (x) {
     const n = x;
     let text = "";
     let t = " ";
     let sign = "+";
     let countCol = 1;
     let countRow = n;
     let newsign = "";
     while(countCol <= countRow - 1){
          text = text.concat(t);
          countCol++;
     }
     while(countRow > 0){
          if(text.length > 0){
               newsign = newsign.concat(sign);
               console.log(`${text}${newsign}`);
               text = text.slice(0, text.length - 1);
               countRow--;            
          }else {
               countRow = 0;   
          }
     }

}


function factorial(x){
     let num = x;
     let result = 1;
     for(i = num; i > 0; i--){
          result = result * num;
          num--;
     }
     return result;
}




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




function lcm(z, m){
     let var1 = z * m;
     let var2 = gcd(z, m);
     return var1 / var2;
}



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



module.exports = {
     plusPattern: plusPattern,
     factorial: factorial,
     gcd: gcd,
     lcm: lcm,
     toHex: toHex
};