//Calculate my age - lol

let myAge = 0;



document.getElementById('myAge').innerHTML = getAge("1999/06/28");

document.getElementById('yearsProducing').innerHTML = getAge("2015/08/07");




function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
