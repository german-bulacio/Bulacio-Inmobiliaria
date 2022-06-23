console.log("funciona")
const heading=document.querySelector(".header__text h2")//
heading.textContent="Carga de datos propiedad"
console.log(heading);

const datosPP={
    codigoPP:Number(),
    direccionPP:"",
    numCllPP:Number(),
    barrioPP:"",
    tipoPP:"",
}

const codPP=document.querySelector("#codigoPP");
const direccion=document.querySelector("#direccionPP");
const numCllPrp=document.querySelector("#numCllPP");
const barrioProp=document.querySelector("#barrioPP");
const tipoProp=document.querySelector("#tipoPP");
codPP.addEventListener("input", cargaCmps );
direccion.addEventListener("input", cargaCmps);
numCllPrp.addEventListener("input", cargaCmps);
barrioProp.addEventListener("input", cargaCmps);
tipoProp.addEventListener("input", cargaCmps);
function cargaCmps(e){
    datosPP[e.target.id]=e.target.value;
    console.log(e.target);
    console.log(datosPP)
}










/*let usuario;
let administrador;
let inquilino;

console.log("inicio")
function cliente(){
    usuario = prompt("ingrese usuario");
    if(usuario == "admin"){
    admin();
    }
    else if(usuario == "inquilino"){
        inquilinoCl();
    }
    else{
        propietarioCl();
    }

}
cliente();

function admin(){
    let administradorPP;
administradorPP = prompt("ingrese administrador");
const password = Number(prompt("ingrese password"));
while (administradorPP != "administrador" && password == 1234) {
    alert("usuario o password incorrectos,ingrese nuevamente")
}
 menuAdm();
}

function menuAdm(){
let op;
let bandera=0;
do{
    console.log("Menu Administrador");
    alert("menu: 1-carga clientes/ 2-busqueda de clientes/ 3-gestion de clientes");
    op= Number(prompt("ingrese opcion"));
    switch(op)
    {
        case 1:
            cargaCl ();
            bandera = 1;
            break;
        case 2:
            if (bandera == 0)
            mensaje ();
            else
            {
            busquedaDeCl();           
            }
            break;

        case 3:
            if (bandera == 0)
            mensaje ();
            else
            gestionDeCl ();
            break;
    }
}
while (op != 4);
}

function cargaCl(){
    do{
        console.log("Carga Clientes");
        alert("menu: 1-cargar dueño / 2-carga inquilino / 3-carga propiedad");
        op= Number(prompt("ingrese opcion"));
        switch(op)
        {
            case 1:
                cargaDuenio ();
                break;
            case 2:
                cargaInquilino();           
                break
            case 3:
                cargaPropiedad();
                break;
        }
    }
    while (op != 4);
    }*/
/*class Duenio{
    constructor(nombreDn,apellidoDn,dniDn,domicilioDn,numCll,barrio,codigoPP){
        this.nombreDn=nombreDn
        this.apellidoDn=apellidoDn
        this.dniDn=dniDn
        this.domicilioDn=domicilioDn
        this.numCll=numCll
        this.barrio=barrio
        this.codigoPP=codigoPP
    }
}
    const dueniosfl=[];

    function crearDuenio(){
        let nombreDn=prompt("ingrese nombre")
        let apellidoDn=prompt("ingrese apellido")
        let dniDn=Number(prompt("ingrese dni"))
        let domicilioDn=prompt("ingrese domicilio")
        let numCll=Number(prompt("ingrese altura"))
        let barrio=prompt("ingrese barrio")
        let codigoPP=Number(prompt("codigoPP"))
        dueniosfl.push(new Duenio (nombreDn,apellidoDn,dniDn,domicilioDn,numCll,barrio,codigoPP))
    }
    
    function cargaDuenio() {
        let numCl = parseInt(prompt("ingrese el numero de dueños a cargar"));
        for (i = 1; i <= numCl; i++) {
        crearDuenio()
    }
}*/

const bsePropiedades=[{tipoPP:"departamento",direccionPP:"colon",numCllPP:"122",barrioPP:"alberdi",aptoParaVV:true,aptoParaCm:false,codigoPP:100},
                      {tipoPP:"casa",direccionPP:"rioja",numCllPP:"150",barrioPP:"palmas",aptoParaVV:true,aptoParaCm:true,codigoPP:102},
                      {tipoPP:"local",direccionPP:"gral paz",numCllPP:"130",barrioPP:"centro",aptoParaVV:false,aptoParaCm:true,codigoPP:105},
                      {tipoPP:"galpon",direccionPP:"jujuy",numCllPP:"220",barrioPP:"bower",aptoParaVV:false,aptoParaCm:true,codigoPP:200},
                      {tipoPP:"departamento",direccionPP:"9 julio",numCllPP:"2122",barrioPP:"cerro nuevo",aptoParaVV:true,aptoParaCm:true,codigoPP:250},
                      {tipoPP:"garage",direccionPP:"colon",numCllPP:"1220",barrioPP:"alto alberdi",aptoParaVV:false,aptoParaCm:true,codigoPP:400},
]

/*const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
                  {  id: 2,  nombre: "Fideo", precio: 70 },
                  {  id: 3,  nombre: "Pan"  , precio: 50},
                  {  id: 4,  nombre: "Flan" , precio: 100}];*/

/*for (const propiedad of bsePropiedades) {
    let contenedorA = document.querySelector("contenedorA");
    
    contenedorA.innerHTML = `<h3> ID: ${propiedad.codigoPP}</h3>
                            <p> ${propiedad.direccionPP}</p>
                            <p> ${propiedad.numCllPP}</p>
                            <p> ${propiedad.barrioPP}</p>
                            <p> ${propiedad.aptoParaVV}</p>
                            <p> ${propiedad.aptoParaCm}</p>
                            <p> ${propiedad.tipoPP}</p>`;
    document.body.appendChild(contenedorA);
}*/





/*class Prueba{
    constructor(nombre,apellido,precio,codigoPP){
        this.nombre=nombre
        this.apellido=apellido
        this.precio=precio
        this.codigoPP=codigoPP
    }
    sumarIva(){
        this.precio=this.precio*1.21;
        }
    sumarhonorarios(){
        this.precio=this.precio*1.2;
        }
    }
const pruebas=[]

function crearPruebas(){
    let nombre=prompt("ingrese nombre")
    let apellido=prompt("ingrese apellido")
    let precio=Number(prompt("ingrese precio"))
    let codigoPP=Number(prompt("codigoPP"))
    pruebas.push(new Prueba (nombre,apellido,precio,codigoPP))
}
function cargaPruebas() {
    let numCl = parseInt(prompt("ingrese el numero de inquilino a cargar"));
    for (i = 1; i <= numCl; i++) {
    crearPruebas()
    }
}
/*cargaPruebas()
console.log(pruebas)
for(const Prueba of pruebas){
    Prueba.sumarIva();
    Prueba.sumarhonorarios();
}*/

/*const resultado = bsePropiedades.find((bsePropiedades)=>{
   return bsePropiedades.direccionPP ==="jujuy"
})
console.log(resultado)*/

/*const resultado2 = pruebas.find((Prueba)=>{
    return Prueba.apellido ==="lopez"
 })
 console.log(resultado2)

function agregarCliente(){
    crearPruebas()
}*/

//console.log(pruebas) 


/*class Inquilino{
    constructor(nombreIq,apellidoIq,dniIq,domicilioIq,numIq,barrioIq,diaPg,mesPg,anioPg,diaIc,mesIc,anioIc,codigoPP,precioAlq){
    this.nombreIq=nombreIq
    this.apellidoIq=apellidoIq
    this.dniIq=dniIq
    this.domicilioIq=domicilioIq
    this.numIq=numIq
    this.barrioIq=barrioIq
    this.diaPg=diaPg
    this.mesPg=mesPg
    this.anioPg=anioPg
    this.diaIc=diaIc
    this.mesIc=mesIc
    this.anioIc=anioIc
    this.codigoPP=codigoPP
    this.precioAlq=precioAlq
    }
}
const inquilinofl=[]

function crearInquilino(){
    let nombreIq=prompt("ingrese nombre")
    let apellidoIq=prompt("ingrese apellido")
    let dniIq=Number(prompt("ingrese dni"))
    let domicilioIq=prompt("ingrese domicilio")
    let numIq=Number(prompt("ingrese altura"))
    let barrioIq=prompt("ingrese barrio")
    let diaPg=Number(prompt("ingrese el dia"))
    let mesPg=Number(prompt("ingrese el mes"))
    let anioPg=Number(prompt("ingrese el año"))
    let diaIc=Number(prompt("ingrese el dia"))
    let mesIc=Number(prompt("ingrese el mes"))
    let anioIc=Number(prompt("ingrese el año"))
    let precioAlq=Number(prompt("ingrese precio alquiler"))
    let codigoPP=Number(prompt("codigoPP"))
    inquilinofl.push(new Inquilino(nombreIq,apellidoIq,dniIq,domicilioIq,numIq,barrioIq,diaPg,mesPg,anioPg,diaIc,mesIc,anioIc,codigoPP,precioAlq))
}   
function cargaInquilino() {
    let numCl = parseInt(prompt("ingrese el numero de inquilino a cargar"));
    for (i = 1; i <= numCl; i++) {
    crearInquilino()
}
}*/
/*class Propiedad{
    constructor(tipoPP,direccionPP,numCllPP,barrioPP,zonaPP,aptoParaVV,aptoParaCm,codigoPP){
    this.tipoPP=tipoPP
    this.direccionPP=direccionPP
    this.numCllPP=numCllPP
    this.barrioPP=barrioPP
    this.zonaPP=zonaPP
    this.aptoParaVV=aptoParaVV
    this.aptoParaCm=aptoParaCm
    this.codigoPP=codigoPP
    }
}
const propiedadfl=[]

function crearPropiedad(){
    let tipoPP=prompt("ingrese nombre")
    let direccionPP=prompt("ingrese apellido")
    let numCllPP=Number(prompt("ingrese altura"))
    let barrioPP=prompt("ingrese barrio")
    let zonaPP=prompt("ingrese barrio")
    let aptoParaVV=prompt("ingrese barrio")
    let aptoParaCm=prompt("ingrese barrio")
    let codigoPP=Number(prompt("codigoPP"))
    propiedadfl.push(new Propiedad (tipoPP,direccionPP,numCllPP,barrioPP,zonaPP,aptoParaVV,aptoParaCm,codigoPP))
}
function cargaPropiedad() {
    let numCl = parseInt(prompt("ingrese el numero de inquilino a cargar"));
    for (i = 1; i <= numCl; i++) {
    crearPropiedad()
}
}*/
//cargaPropiedad()
//cargaDuenio()
//cargaInquilino() 
//console.log([inquilinofl])
//console.log([dueniosfl])
//console.log([propiedadfl])
    
    function inquilinoCl(){
    alert("en contruccion")
    }
    function propietarioCl(){
    alert("en contruccion")
    }
    
 

    //busquedaDeCl()

/*console.log("inicio")
let nombreDuenio;
let apellidoDuenio;
let nombreInq;
let apellidoInq;
let precioMs;
let expensas;
let impuestos;
let iva = 0.21;
let multa;
let morosidad;
let diasMora;
let honorarios;
let ctaCtrt;
let subaSemestral;
let recibos;
let clientesAlquiler;
let tipoPr;
let diaQpago;
let mesQpago;

function verIq(){

    console.log("nombre y apellido inquilino"+ nombreInq+""+apellidoInq);
    alert("nombre y apellido inquilino :"+ nombreInq+""+apellidoInq );

}
function verDnio(){
    console.log("nombre y apellido inquilino"+ nombreDuenio+""+apellidoDuenio);
    alert("nombre y apellido :"+ nombreDuenio+""+apellidoDuenio );

}
console.log("carga datos clientes")

function cargaCl() {
    let numCl = parseInt(prompt("ingrese el numero de clientes a cargar"));
    for (i = 1; i <= numCl; i++) {
        nombreDuenio = prompt("ingrese nombre");
        apellidoDuenio = prompt("ingrese apellido");
        nombreInq = prompt("ingrese nombre");
        apellidoInq = prompt("ingrese apellido");

        let tipoPr = parseInt(prompt("ingrese el numero de tipo propiedad:1-departamento,2-casa;3-local"));

        if (tipoPr == 1) {
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
        }
        let precioMs = parseInt(prompt("ingrese el precio Mensual alquiler"));
        let impuestos = parseInt(prompt("ingrese los impuestos"));
        let honorarios = parseInt(prompt("ingrese los honorarios"));
        if (tipoPr == 1 || tipoPr == 3) {
            let expensas = parseInt(prompt("ingrese los expensas"));
            clientesAlquiler = precioMs + impuestos + honorarios + expensas;
        } else {
            clientesAlquiler = precioMs + impuestos + honorarios;
        }       
        verIq();
        verDnio();
        alert("precio del alquiler=" + clientesAlquiler);
    }
}


cargaCl();

console.log("fin")
/*function gestionDeCl ();
function busquedaDeCl();
function inquilinoCl();
function propietarioCl();
function cgInq();
function cgProPietario();
function cgPropiedad();
function venta();
function alquiler();
function tasacion();
function cargaPP();
/* otro//
    let diaQpago = parseInt(prompt("ingrese el dia del mes que abono"));
    let mesQpago = parseInt(prompt("ingrese el dia del mes que abono"));
    if(diaQpago>10) {
        diasMora = fechaQpago-10;
        else{
            alert("inquilino pago en termino")
        }

    }

    function verExpensas (){

    if (tipoPr == 1 || tipoPr == 3) {
        let expensas = parseInt(prompt("ingrese los expensas"));
        clientesAlquiler = precioMs + impuestos + honorarios + expensas;
        console.log("Tiene expensas");
        alert("Propiedad con Expensas");
    } else {
        clientesAlquiler = precioMs + impuestos + honorarios;
        console.log("No Tiene expensas");
        alert("Propiedad sin Expensas");
    } 
}

//otro algoritmo para la pagina 
console.log("inicio")
let banios;
let dormitorio;
let patio;
let cochera;
let aptoCm;
let aptoPara;
let pt;
let cche;
let ccm;
let paraAV;
let salida;
let tipoPr = prompt("ingrese el numero de tipo propiedad:departamento,casa,local,terreno,otros");
let datosCompletos = prompt("quiere completar datos?(si/no)");
do{
     banios = parseInt(prompt("baños"))
     dormitorios = parseInt(prompt("dormitorios"));
     pt = prompt("tiene patio(si/no)");
     paraAV = prompt("Para venta / alquiler o ambos(venta/alquiler/ambos)");
     cche = prompt("tiene cochera(si/no)");
     ccm = prompt("apto para comercio(si/no)")
    
}while (datosCompletos != "si" )

if (pt == "si") {
    patio = "ok";
}
else {
    patio = "no";
}
if (cche == "si") {
    cochera = "ok";
}
else {
    cochera = "no";
}
if (ccm == "si") {
    aptoCm = "ok";
}
else {
    aptoCm = "no";
}
if (paraAV == "venta") {
    aptoPara = "venta";
}
else if (paraAV == "alquiler") {
    aptoPara = "alquiler";
}else {
        aptoPara = "Venta_Y_Alquiler";
      }

switch (tipoPr) {
    case "departamento":
        salida = tipoPr +""+"con"+""+ banios+""+"baños"+""+"con"+""+ dormitorios +""+ "dormitorios" +""+ "patio:" +""+
        patio +""+"cochera:" +""+ cochera +""+ "apto comercio" +""+ aptoCm +""+"propiedad en"+""+ aptoPara;
        alert(salida); 
        break;
    case "casa":
        alert("es una casa");
        break;
    case "local":
        alert("es un local");
        console.log("ingrese en numero de baños");
        break;
    case "terreno":
        alert("es un terreno");
    default:
        alert("otro tipo propiedad");
        break;
}
console.log("fin")
*/



/*console.log("inicio")
let tipoPr=parseInt(prompt("ingrese el numero de tipo propiedad:1-dto,2-casa;3-terreno,4-local,5-otros"));
if (tipoPr == 1) {
departamento = 1;
alert("es un departamento");
}
else if (tipoPr == 2){
casa = 2;
alert("es una casa");
}
else if(tipoPr == 3){
terreno = 3;
alert("es un terreno");
}
else if(tipoPr == 4){
local = 4;
alert("es un local");
}
else if(tipoPr == 5){
    otros = 5;
    alert("otro tipo de propiedad");
    }
console.log("fin")*/