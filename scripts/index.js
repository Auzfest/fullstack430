function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
function printText() {
    var textarea1 = document.getElementById('first_name');
    var textarea2 = document.getElementById('last_name');
    var user = { firstName: textarea1.value, lastName: textarea2.value };
    console.log(user);
    var greeting = document.getElementById("greeting");
    greeting.textContent = greeter(user);
}
;
