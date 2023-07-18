let birthDate = prompt("Doğum Yılınızı Giriniz.");
const date = new Date();
let currentYear = date.getFullYear();
alert(currentYear-birthDate + " " + "Yaşındasınız.");