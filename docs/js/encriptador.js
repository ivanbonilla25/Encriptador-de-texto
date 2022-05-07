let textoPrincipal = document.getElementById('texto');
let textoResultado = document.getElementById('textoResultado');
let botonEncriptar = document.getElementById('botonEncriptar');
let botonDesencriptar = document.getElementById('botonDesencriptar');
let botonCopiar = document.getElementById('botonCopiar');
let cajaDeMensajes = document.getElementById('cajaDeMensajes');
let munieco = document.getElementById('munieco');

function cambioDeVista() {

    textoResultado.style.display = 'block';
    munieco.style.display = 'none';
    cajaDeMensajes.style.display = ' none';
    botonCopiar.style.display = 'flex';

}

function encriptar() {

    if (textoPrincipal.value == '') {
        return false;
    }

    let textoModificado = '';

    for (let i = 0; i < textoPrincipal.value.length; i++) {

        let caracter = textoPrincipal.value.charAt(i);

        switch (caracter) {
            case 'a':
                resultado = 'ai';
                break;
            case 'e':
                resultado = 'enter';
                break;
            case 'i':
                resultado = 'imes';
                break;
            case 'o':
                resultado = 'ober';
                break;
            case 'u':
                resultado = 'ufat';
                break;
            default:
                resultado = caracter;
                break;
        }
        textoModificado = textoModificado + resultado;
    }

    cambioDeVista();
    textoPrincipal.value = '';
    textoResultado.value = textoModificado;

}

function desencriptar() {

    if (textoPrincipal.value == '') {
        return false;
    }

    let textoDesencriptado;

    textoDesencriptado = textoPrincipal.value.replaceAll('ai', 'a');
    textoDesencriptado = textoDesencriptado.replaceAll('enter', 'e');
    textoDesencriptado = textoDesencriptado.replaceAll('imes', 'i');
    textoDesencriptado = textoDesencriptado.replaceAll('ober', 'o');
    textoDesencriptado = textoDesencriptado.replaceAll('ufat', 'u');

    cambioDeVista();
    textoPrincipal.value = '';
    textoResultado.value = textoDesencriptado;

}

function copiarTexto() {

    let textoACopiar = document.getElementById("textoResultado");
    textoACopiar.disabled = false;
    textoACopiar.select();
    document.execCommand('copy');
    textoACopiar.disabled = true;


}

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiarTexto;