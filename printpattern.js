

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
console.log(plusPattern(20));