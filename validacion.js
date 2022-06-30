
/*const formulario = document.querySelector("#my-form1")
const admin = document.querySelector('#admin')
admin.addEventListener('input', () => {
    // console.log(direccion.value)

    if (admin.value.length <= 1) {
        admin.classList.add('border-danger')
        admin.classList.remove('border-success')
        
    } else {
        admin.classList.add('border-success')
        admin.classList.remove('border-danger')
    }
})

const inputPassword = document.querySelector('#input-pass')
const btnPass = document.querySelector('#btn-pass')


btnPass.addEventListener('click', (e) => {
    e.preventDefault()
    if (inputPassword.type === "password") {
        inputPassword.type = "text"
    } else {
        inputPassword.type = "password"
    }
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)
    // console.log(e.target[0])
    // console.log("submit del form")
    
    const userData = {
        admistrador: admin.value,
        password: inputPassword.value
    }

    console.log(userData)
})*/

let usuario
const usuarioLs = localStorage.getItem('user')
if(usuarioLs){
    usuario = usuarioLs
}else{
    usuario=prompt("ingrese usuario")
    localStorage.setItem("user",usuario)
}

const sbtitulo = document.querySelector("#subtt1")
sbtitulo.innerText = `bienvenido:${usuario}`