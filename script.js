let display = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);

let string = '';

buttonsArray.forEach(btn => {
    btn.addEventListener('click',(e) => {

        if(e.target.innerHTML == 'DE'){
            string = string.substring(0, string.length-1);
            display.value = string;
        }else if(e.target.innerHTML == 'AC'){
            string = '';
            display.value = string;

        }else if(e.target.innerHTML == '='){
            string = eval(string);
            display.value = string;
        } else{
            string += e.target.innerHTML;
            display.value = string;
        }

    });

});