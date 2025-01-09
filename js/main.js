const display = document.querySelector(".display");
const Genbtn = document.querySelector(".Genbtn");
const copybtn = document.querySelector(".copybtn");

const length = 12;
const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase ="abscefghijklmnopqrstuvwxyz"
const number ="0123456789"
const SomeSym = "!@#$%^&*(){}[]\/><.,"

const allcart = upperCase+ lowerCase+ number+ SomeSym;

  
function GenPass() {
  let pass = "";
    pass += upperCase[Math.floor(Math.random() * upperCase.length)];
    pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    pass += number[Math.floor(Math.random() * number.length)];
    pass += SomeSym[Math.floor(Math.random() * SomeSym.length)];
    while (length > pass.length) {
        pass += allcart[Math.floor(Math.random() * allcart.length)];  
    }
    display.value =pass;
}
copybtn.addEventListener("click", () => {
display.select();
  navigator.clipboard.writeText(display.value);
});
