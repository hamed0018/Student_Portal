const InputEmail = document.getElementById('email')
const InputUserName = document.getElementById('user')
const InputPassword = document.getElementById('pass')
const btnSubmit = document.getElementById('reg')
const ListUsers = []

const Addusers = () =>{
    let user={
        id:ListUsers.length+1,
        name :InputUserName.value ,
        email  :InputEmail.value ,
        password : InputPassword.value
    }
    localStorage.setItem("user" , user.name)
    localStorage.setItem("pass" , user.password)
    ListUsers.push(user)

}
btnSubmit.addEventListener('click' ,() => Addusers())