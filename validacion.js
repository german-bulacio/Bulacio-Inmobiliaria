
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

let admistrador
const administradorLs = localStorage.getItem('admin')
if(admistrador){
    admistrador = admistradorLs
}else{
    admistrador =prompt("ingrese admistrador")
    localStorage.setItem("admin",administradorLs)
}

const sbtitulo = document.querySelector("#subtt1")
sbtitulo.innerText = `bienvenido:${admistrador}`

/*let inquilino
const inquilinoLs = localStorage.getItem('inquil')
if(inquilinoLs){
    inquilino = inquilinoLs
}else{
    inquilino=prompt("ingrese inquilino")
    localStorage.setItem("inquil",inquilino)
}

const sbtitulo = document.querySelector("#subtt2")
sbtitulo.innerText = `bienvenido:${inquilino}`

let propietario
const propietarioLs = localStorage.getItem('propi')
if(propietarioLs){
    propietario = propietarioLs
}else{
    propietario =prompt("ingrese propietario")
    localStorage.setItem("propi",usuario)
}

const sbtitulo = document.querySelector("#subtt3")
sbtitulo.innerText = `bienvenido:${propietario}`*/


let tipoPr = Number(prompt("ingrese el numero de tipo propiedad:1-departamento,2-casa;3-local"));

/*if (tipoPr == 1) {
    departamento = 1;
    alert("es un departamento");
}
else if (tipoPr == 2) {
    casa = 2;
    alert("es una casa");
}
else if (tipoPr == 3) {
    local = 3;
    alert("es un local");
}*/

tipoPr == 2 ? alert("No tiene expensas") : alert("Tiene expesas")