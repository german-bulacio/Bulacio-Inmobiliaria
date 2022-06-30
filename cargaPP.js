console.log("funciona")

const heading=document.querySelector(".header__text h2")//
heading.textContent="Carga de datos propiedad"
console.log(heading);

const bsePropiedades=[];

let datosPP = {
    codigoPropiedad:Number(),
    direccionPP:'',
    numeracion:Number(),
    barrioPropiedad:'',
    tipoPropiedad:''
}

const formulario = document.querySelector("#my-form")
const codPP=document.querySelector("#codPP")
const direccion=document.querySelector("#direccion")
const numCllPrp=document.querySelector("#numCllProp")
const barrioProp=document.querySelector("#barrioProp")
const tipoProp=document.querySelector("#tipoProp")



codPP.addEventListener('keydown', (event) => {   
    if (codPP.value.length <= 1) {
        codPP.classList.add('border-danger')
        codPP.classList.remove('border-success')
    } else {
        codPP.classList.add('border-success')
        codPP.classList.remove('border-danger')
    }
})



direccion.addEventListener('input', () => {
    // console.log(direccion.value)

    if (direccion.value.length <= 1) {
        direccion.classList.add('border-danger')
        direccion.classList.remove('border-success')
        
    } else {
        direccion.classList.add('border-success')
        direccion.classList.remove('border-danger')
    }
})

numCllPrp.addEventListener('input', () => {
    // console.log(numCllPrp.value)

    if (numCllPrp.value.length <= 1) {
        numCllPrp.classList.add('border-danger')
        numCllPrp.classList.remove('border-success')
        
    } else {
        numCllPrp.classList.add('border-success')
        numCllPrp.classList.remove('border-danger')
    }
})


barrioProp.addEventListener('input', () => {
    // console.log(barrioProp.value)

    if (barrioProp.value.length <= 1) {
        barrioProp.classList.add('border-danger')
        barrioProp.classList.remove('border-success')
        
    } else {
        barrioProp.classList.add('border-success')
        barrioProp.classList.remove('border-danger')
    }
})
tipoProp.addEventListener('input', () => {
    // console.log(barrioProp.value)
    if (tipoProp.value.length <= 1) {
        tipoProp.classList.add('border-danger')
        tipoProp.classList.remove('border-success')
        
    } else {
        tipoProp.classList.add('border-success')
        tipoProp.classList.remove('border-danger')
    }
})
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)
    // console.log(e.target[0])
    // console.log("submit del form")
        const datosPP = {
        codigoPropiedad:codPP.value,
        direccionPP:direccion.value,
        numeracion:numCllPrp.value,
        barrioPropiedad:barrioProp.value,
        tipoPropiedad:tipoProp.value
    } 
    console.log(datosPP)
})
 
function verDatosPP(datosPP){
    console.log(datosPP)

}

let {codigoPropiedad,direccionPP,numeracion,barrioPropiedad,tipoPropiedad} = datosPP;
console.log(codigoPropiedad)
console.log(direccionPP)
console.log(numeracion)
console.log(barrioPropiedad)
console.log(tipoPropiedad)

 
class Propiedad{
    constructor(codigoPropiedad,direccionPP,numeracion,barrioPropiedad,tipoPropiedad){
    this.codigoPropiedad= codigoPropiedad
    this.direccionPP=direccionPP
    this.numeracion=numeracion
    this.barrioPropiedad=barrioPropiedad
    this.tipoPropiedad=tipoPropiedad
    }
        CargaPrp(datosPP){
        bsePropiedades.push(new Propiedad(codigoPropiedad,direccionPP,numeracion,barrioPropiedad,tipoPropiedad))
    }
}
