let string = "";
let output = document.querySelector('input');
let btns = document.querySelectorAll(".btn");
let arr = Array.from(btns).forEach((btn) => {
    btn.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {
            string = eval(string);
            output.value = string;
        } else if (e.target.innerHTML == 'AC') {
            string = '';
            output.value = string;
        } else if (e.target.innerHTML == '⬅') {
            string = string.substring(0, string.length - 1);
            output.value = string;
        } else if (e.target.innerHTML == '%') {
            string = string / 100;
            output.value = string;
        } else if (e.target.innerHTML == 'X') {
            string = string + '*';
            output.value = string;
        } else if (e.target.innerHTML == '÷') {
            string = string + '/';
            output.value = string;
        } else {
            string += e.target.innerHTML;
            output.value = string;
        }
    })
})