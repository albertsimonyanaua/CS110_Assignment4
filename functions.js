// function factorial(x){
//      let num = x;
//      let result = 1;
//      for(i = num; i > 0; i--){
//           result = result * num;
//           num--;
//      }
//      console.log(`The factorial of ${x} is ${result}`);
// }

// console.log(factorial(3));


// function gcd(num1, num2){
//      let reminder = 0;
//      let x = Math.abs(num1);
//      let y = Math.abs(num2);
//      if(x == 0 || y == 0){
//           console.log(`There is no gcd for ${num1} and ${num2}`);
//      }else if(x == y){
//           console.log(`The gcd of ${num1} and ${num2} is ${x}`);
//      }else if(x > y){
//           reminder = x % y;
//           if(reminder == 0){
//                console.log(`The gcd of ${num1} and ${num2} is ${y}`);
//           }else{
//                while(x != 0 && y != 0){
//                     reminder = y;
//                     y = x % y;
//                     x = reminder;
//                }
//                if( x >= y && x <= reminder){
//                     console.log(`The gcd of ${num1} and ${num2} is ${x}`);
//                }else if(y >= x && y <= reminder){
//                     console.log(`The gcd of ${num1} and ${num2} is ${y}`);
//                }else{
//                     console.log(`The gcd of ${num1} and ${num2} is ${reminder}`);
//                }
//           }
//      }else{
//           reminder = y % x;
//           if(reminder == 0){
//                console.log(`The gcd of ${num1} and ${num2} is ${x}`);
//           }else{
//                while(x != 0 && y != 0){
//                     reminder = x;
//                     x = y % x;
//                     y = reminder;
//                }
//                if( x >= y && x <= reminder){
//                     console.log(`The gcd of ${num1} and ${num2} is ${x}`);
//                }else if(y >= x && y <= reminder){
//                     console.log(`The gcd of ${num1} and ${num2} is ${y}`);
//                }else{
//                     console.log(`The gcd of ${num1} and ${num2} is ${reminder}`);
//                     }
//                }
//           }
//      }

// console.log(gcd(-4548796427,-987261124423));



function toHexaDecimal(n){
     let x = n;
     let reminder = [];
     let reverse = ``;
     let hex = ``;
     let finalHex = ``;
     while(x >= 1){
          reminder.push(x % 2);
          x = Math.floor(x / 2);
     }
     for(i = reminder.length - 1; i >= 0; i--){
          reverse += `${reminder[i]}`;
     }
     
     function addSign(str, index){
          return str.substring(index - 4, index) + ' ';
     }

     if(reverse.length % 4 == 0){
          let ind = 4;
          while(ind < reverse.length){
               hex = hex + addSign(reverse, ind);
               ind = ind + 4;
          }
     }else{
          while(reverse.length % 4 != 0){
               reverse = '0' + reverse;
          }
          let ind = 4;
          while(ind < reverse.length){
               hex = hex + addSign(reverse, ind);
               ind = ind + 4;
          }
          hex = hex + addSign(reverse, reverse.length);
     }
     let arr = hex.split(' ');
     console.log(arr);
     for(f= 0; f < arr.length; f++){
          switch(arr[f]){
               case '0000':
                    finalHex = finalHex.concat('0');
                    break;
                    case '0001':
                         finalHex = finalHex.concat('1');
                         break;
                         case '0010':
                              finalHex = finalHex.concat('2');
                              break;
                              case '0011':
                                   finalHex = finalHex.concat('3');
                                   break;
                                   case '0100':
                                        finalHex = finalHex.concat('4');
                                        break;
                                        case '0101':
                                             finalHex = finalHex.concat('5');
                                             break;
                                             case '0110':
                                                  finalHex = finalHex.concat('6');
                                                  break;
                                                  case '0111':
                                                       finalHex = finalHex.concat('7');
                                                       break;
                                                       case '1000':
                                                            finalHex = finalHex.concat('8');
                                                            break;
                                                            case '1001':
                                                                 finalHex = finalHex.concat('9');
                                                                 break;
                                                                 case '1010':
                                                                      finalHex = finalHex.concat('A');
                                                                      break;
                                                                      case '1011':
                                                                           finalHex = finalHex.concat('B');
                                                                           break;
                                                                           case '1100':
                                                                                finalHex = finalHex.concat('C');;
                                                                                break;
                                                                                case '1101':
                                                                                     finalHex = finalHex.concat('D');
                                                                                     break;
                                                                                     case '1110':
                                                                                          finalHex = finalHex.concat('E');
                                                                                          break;
                                                                                          case '1111':
                                                                                               finalHex = finalHex.concat('F');
                                                                                               break;
          }
     }
     console.log(`Your number ${n} in binary is ${reverse}`);
     console.log(`Splitted binary number is ${hex}`);
     console.log(`Your number ${n} in hexadecimal is ${finalHex}`);
}

console.log(toHexaDecimal(200));

