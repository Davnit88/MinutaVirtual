document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const btnGuardar = document.getElementById('btnGuardar');
    const btnLimpiar = document.getElementById('btnLimpiar');

    btnGuardar.addEventListener('click', () => {
        localStorage.setItem('textoGuardado', textInput.value);
        alert('Texto guardado correctamente.');
    });

    btnLimpiar.addEventListener('click', () => {
        textInput.value = '';
    });

    // Cargar texto guardado, si existe
    const textoGuardado = localStorage.getItem('textoGuardado');
    if (textoGuardado) {
        textInput.value = textoGuardado;
    }
});