interface Person {
    firstName: string;
    lastName: string;
}
   
function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
   
function printText() {
      
    const textarea1 = document.getElementById('first_name') as HTMLTextAreaElement;
    const textarea2 = document.getElementById('last_name') as HTMLTextAreaElement;
    const user = {firstName:textarea1.value, lastName: textarea2.value};
    console.log(user);
   
    let greeting = document.getElementById("greeting") as HTMLParagraphElement;
    greeting.textContent = greeter(user);
};