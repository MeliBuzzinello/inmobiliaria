
//-------------CODIGO A EJECUTAR ---------------------------
const txtTelefono = document.getElementById('txtTelefono')
const txtNombre = document.getElementById('txtNombre')
const selectHorario = document.getElementById('selectHorario')
const contenedorHijo = document.getElementById('contenedorHijo')
const miFormulario = document.getElementById('formulario')
const DivEnviado = document.getElementById('DivEnviado')
const btnEnviar = document.getElementById('btnEnviar')
const DivHorario = document.getElementById('DivHorario')
const DivNum = document.getElementById('DivNum')
const contenedorPadre = document.getElementById('icNombre')

recuperar()


//---------------- FUNCIONES ------------------------------

function recuperar() {
    
        txtNombre.value = localStorage.getItem('txtNombre')
        txtTelefono.value = localStorage.getItem('txtTelefono')
        selectHorario.value = localStorage.getItem('selectHorario')
    
}

// ----------------EVENTOS ---------------------------------

//txtNombre
txtNombre.addEventListener('change', () => {
    contenedorPadre.innerHTML = "";

    const iconoNom = document.createElement('div')
    if (txtNombre.value == "") {
        iconoNom.innerHTML = `<img src="assets/img/borrar.png" width="16">`
    }
    else {
        iconoNom.innerHTML = `<img src="assets/img/comprobado.png" width="16">`
        localStorage.setItem('txtNombre', txtNombre.value)
    }
    contenedorPadre.appendChild(iconoNom)
})

txtNombre.addEventListener('keypress', (e) => {
    const tecla = (document.all) ? e.keyCode : e.which
    if (tecla == 13) {
        alert('se presiona tecla ENTER')
    }
})

//txTelefono
txtTelefono.addEventListener('change', () => {
    DivNum.innerHTML = "";
    localStorage.setItem('txtTelefono', txtTelefono.value)
    let telefono = txtTelefono.value
    const iconoTel = document.createElement('div')
    if (telefono.length != 10) {
        iconoTel.innerHTML = `<img src="assets/img/borrar.png" width="16">`

    }
    else {
        iconoTel.innerHTML = `<img src="assets/img/comprobado.png" width="16">`
    }
    DivNum.appendChild(iconoTel)
})

txtTelefono.addEventListener('keypress', (e) => {
    const tecla = (document.all) ? e.keyCode : e.which

    if (tecla == 13) {

        alert('se presiona tecla ENTER')
    }
})


//selectHorario
selectHorario.addEventListener('change', () => {

    let divH = document.createElement('div')

    if (selectHorario.value == "select1") {

        divH.innerHTML = `<h4>Usted sera contactado en el horario de 8 a 13 hs</h4>`
    }
    else {
        divH.innerHTML = `<i class="fa-solid fa-alarm-clock"></i><h4>Usted sera contactado en el horario de 13 a 19 hs</h4>`
    }
    DivHorario.appendChild(divH);
    setTimeout(() => {
        DivHorario.removeChild(divH
        )
    }, 3000);
    localStorage.setItem('selectHorario', selectHorario.value)
})

//formulario
miFormulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!DivEnviado.hasChildNodes()) {
        let div = document.createElement('div');

        if (txtNombre.value == "" || txtTelefono.value == "") {
            div.className = 'parrafoEnviadoError';
            div.innerHTML = `<h5>Debe Completar los campos solicitados</h5>`

        } else {
            div.className = 'parrafoEnviadoOk';
            div.innerHTML = `<h5>Su información fue enviado correctamente</h5>`
        }
        DivEnviado.appendChild(div);
        setTimeout(() => {
            DivEnviado.removeChild(div)

        }, 2000);

        txtNombre.value = ""
        txtTelefono.value = ""
        selectHorario.value = ""
        contenedorPadre.innerHTML = ""
        DivNum.innerHTML = ""
    }
    localStorage.clear()
})


//btnEnviar
btnEnviar.addEventListener('mouseover', () => {
    btnEnviar.className = 'estiloBtnOver'
})

btnEnviar.addEventListener('mouseout', () => {
    btnEnviar.className = 'estiloBtnOut'
})

btnEnviar.addEventListener('click', () => {
    btnEnviar.className = 'estiloBtnClick'
    localStorage.clear()
})

btnEnviar.addEventListener('mousedown', () => {
    btnEnviar.className = 'estiloBtnMousedown'
})

