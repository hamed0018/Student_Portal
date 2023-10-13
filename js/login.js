const InputName = document.getElementById('user')
const InputPassword = document.getElementById('pass')
const btn = document.getElementById('sub')
const alertShow = document.getElementById('alert')
const form = document.getElementById('form')
const handleSubmit = () =>{
    const name = localStorage.getItem('user')
    const pass = localStorage.getItem('pass')
    alertShow.classList.add('show')
    
}
form.addEventListener('submit',(e)=>{
    handleSubmit()
    e.preventDefault()
})
