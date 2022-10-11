/*------1-----*/
// const userName = prompt("Введите имя")
// const userLastname = prompt("Введите фамилие")

// alert("Здраствуйте " + userName)
// console.log("Здраствуйте " + userName);

/*------2------*/

// const num1 = prompt("Введите первое число")
// const num2 = prompt("Введите второе число")

// if(num1 < num2) {
//     console.log(num1 + "<" + num2);
// }else if (num2 == num1) {
//     console.log("Равно");
// }else {
//     console.log(num1 + ">" + num2);
// }

/*------3------*/
const color = prompt("Укажите цвет")

switch (color) {
    case ("yellow"):
        alert ("wait")
        break;
    case ("red"):
        alert ("stop")
        break;
    case ("green"):
        alert ("go")
        break;
    default:
        alert("unknown color")
        break;
}