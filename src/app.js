var nombre = "Luis";
var id = 5;
function ageCalculator(birthdayStr) {
    var today = new Date();
    var birthday = new Date(birthdayStr);
    var age = today.getFullYear() - birthday.getFullYear();
    if (today.getMonth() < birthday.getMonth() || (today.getMonth() === birthday.getMonth() && today.getDate() < birthday.getDate())) {
        age--;
    }
    return age;
}
var birthday = "2005-03-22";
console.log("La persona tiene ".concat(ageCalculator(birthday), " a\u00F1os."));
birthday = "2005-10-22";
console.log("La persona tiene ".concat(ageCalculator(birthday), " a\u00F1os."));
