document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('ingresarTexto');
    const mensaje = document.getElementById('validacionMensaje');
    const textBox = document.getElementById('text-box');

    // Verifica la validez del texto ingresado
    input.addEventListener('input', function() {
        const regex = /^[a-z\s]*$/; //valores permitidos
        if (!regex.test(input.value)) {   //si es true devuelve el mensaje 
            mensaje.style.display = 'block';
            input.style.borderColor = 'red';
        } else {
            mensaje.style.display = 'none';
            input.style.borderColor = 'initial';
        }
    });

    // Función para encriptar el texto
    window.encriptarTexto = function() {
        const texto = input.value; 
        const textoEncriptado = texto
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');   
        textBox.innerHTML = textoEncriptado;
       // input.style.width = '70%';
        //input.style.height = '300px';

        // Crear y agregar el botón "Copiar"
        let botonCopiar = document.getElementById('botonCopiar');
        if (!botonCopiar) {
            botonCopiar = document.createElement('button');
            botonCopiar.id = 'botonCopiar';
            botonCopiar.textContent = 'Copiar';
            botonCopiar.style.width = '200px';
            botonCopiar.style.height = '40px';
            botonCopiar.style.borderRadius = '24px';
            botonCopiar.style.fontSize = '16px';
            botonCopiar.style.cursor = 'pointer';
            botonCopiar.style.border = '2px solid transparent';
            botonCopiar.style.backgroundColor = '#0A3871';
            botonCopiar.style.color = '#E5E5E5';
            botonCopiar.style.marginTop = '10px';
            botonCopiar.style.marginLeft = '40px';
            botonCopiar.addEventListener('click', copiarEncriptacion);
            textBox.parentElement.appendChild(botonCopiar);
        } else {
            botonCopiar.style.display = 'block';
        }
    };

    // Función para desencriptar el texto
    window.desencriptarTexto = function() {
        const textoEncriptado = input.value;

        const textoDesencriptado = textoEncriptado
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    
        // Mostrar el texto desencriptado en el contenedor
        textBox.innerHTML = textoDesencriptado;
        
        // Crear y agregar el botón "Copiar"
     
    };

    // Función para copiar el texto encriptado o desencriptado
   // Función para copiar el texto encriptado o desencriptado
window.copiarEncriptacion = function() {
    const texto = textBox.innerText; // Obtiene el texto de text-box
    navigator.clipboard.writeText(texto).then(function() {
        Swal.fire({
            icon: 'success',
            title: '¡Copiado!',
            text: 'Texto copiado al portapapeles.',
            showConfirmButton: false,
            timer: 1500
        });
    }, function(err) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema al copiar el texto.',
        });
        console.error('Error al copiar el texto: ', err);
    });
};

});

