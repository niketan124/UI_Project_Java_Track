const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.forms[0]

var emailVal
var passVal

let users = [
    {email: "test1",password:"test1"},
    {email: "test2",password:"test2"},
    {email: "test3",password:"test3"},
    {email: "test4",password:"test4"},
    {email: "test5",password:"test5"},
]

email.addEventListener('input',(e) =>  emailVal = e.target.value)
password.addEventListener('input',(e) =>  passVal = e.target.value)


form.addEventListener('submit',(e) => {
    e.preventDefault()
    console.log(users);
    const res = users.find(findUser)
    function findUser(person) {
        return person.email==emailVal && person.password==passVal
    }
    if (users.includes(res)) {
        console.log(true);
        alert("Login sucessfull")
    } else {
        alert("INVALID CREDINTIALS")
        return
    }
    form.submit()
    console.log(emailVal,passVal);
})
