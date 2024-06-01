let extensionesPermitidas = ['jpg', 'png', 'jpeg']

function validacionArchivo(selector, extensiones) {
    let rutaArchivo = document.querySelector(selector).value || ''
    let tipoArchivo = rutaArchivo.split('.').pop().toLowerCase()
    if (!extensiones.includes(tipoArchivo)) {
        alert('Por favor suba archivos con una extension valida: ' + extensiones.join(', '))
        location.reload(true)
        return false
    }
    return true
}

document.querySelector('#fotoMascota').addEventListener('change', () => {
    validacionArchivo('#fotoMascota', extensionesPermitidas)
})

function validacionEdad(edad) {
    let edadMascota = parseInt(document.querySelector(edad).value)
    if (edadMascota < 1) {
        alert('La edad ingresada no es valida...')
        location.reload(true)
    }
}

document.querySelector('#edad').addEventListener('keyup', () => {
    validacionEdad('#edad')
})

function habilitarOtro(tipo) {
    let tipoSeleccionado = document.querySelector(tipo).value
    if (tipoSeleccionado === 'otro') {
        document.querySelector('#otraMascota').disabled = false
    } else {
        document.querySelector('#otraMascota').disabled = true
    }
}

document.querySelector('#tipoMascota').addEventListener('change', () => {
    habilitarOtro('#tipoMascota')
})