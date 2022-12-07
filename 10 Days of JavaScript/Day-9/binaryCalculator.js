var btn = e.target || e.srcElement;
var action = document.getElementById(btn.id).innerHTML;
var res = document.getElementById('res');

switch(action) {
    case '0':
    case '1':
    case '+':
    case '-':
    case '*':
    case '/':
        res.innerHTML += action;
        break;
    case 'C':
        res.innerHTML = '';
        break;
    case '=':
        var expr = res.innerHTML;
        var nums = /(\d+)/g; //A global search for digits
        // Replace all base 2 nums with base 10 equivs
        expr = expr.replace(nums, function(match) {
            return parseInt(match, 2);
        })
        /*
                    ---match()---
          The match() method matches a string against a regular expression **

          The match() method returns an array with the matches.

          The match() method returns null if no match is found.
        */
        /* 
                    ---replace()---
          The replace() method searches a string for a value or a regular expression.

          The replace() method returns a new string with the value(s) replaced.

          The replace() method does not change the original string.
        */
        
        
        // eval in base 10 and convert to base 2
        /*
        The eval Function
         We can use this function to evaluate a string representing an expression. If              the string consists of base-10 integers and mathematical operators, this                  function calculates the result of the mathematical expression.
        */
        res.innerHTML = eval(expr).toString(2);
        break;
    default:
        console.error('should not be executed');
        break;
}
var buttons = document.getElementsByTagName('button');
for (let button of buttons) {
button.onclick = onButton;
}