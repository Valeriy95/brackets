module.exports = function check(str, bracketsConfig) {
      let open = [];
      let close = new Object();
      let stack = [];
      
      bracketsConfig.flat().forEach((v, i, arr) => ( i % 2 == 0) ? open.push(v) : close[v] = arr[i - 1]);
      
      for (let i = 0; i < str.length; i++) {
         let currentSymbol = str[i];
         if(open.includes(currentSymbol)) {
            if(stack.includes('|') && currentSymbol == '|') {
               stack.pop();
            } else if(stack.includes('7') && currentSymbol == '7') {
               stack.pop();
            } else if(stack.includes('8') && currentSymbol == '8') {
               stack.pop();
            } else {
            stack.push(currentSymbol);
            }
         } else {
            if (stack.length === 0) {
               return false;
            }
   
            let topElement = stack[stack.length - 1];
   
            if (close[currentSymbol] === topElement) {
               stack.pop();
            } else {
               return false;
            }
         }
      }
      return stack.length === 0;  
   };
   