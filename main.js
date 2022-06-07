
/*let usuario;
let administrador;
let inquilino;
console.log("inicio")
function cliente(){
    usuario = prompt("ingrese usuario");
    if(usuario == administrador){
    admin();
    }
    else if(usuario == inquilino){
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

*/

console.log("inicio")
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

console.log("fin")
*/