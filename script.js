let deferredPromt;
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
window.addEventListener('beforeinstallprompt', (e)=>{
e.preventDefault();
deferredPromt =e;
});
// Cuando se cargue todo nuestro DOM
window.addEventListener('load', async () => {
 
if ('serviceWorker'in navigator){
    const response =await navigator.serviceWorker.register('sw.js');
    if (response) {
        console.info('service worker registrado')
    }
  }
const bannerInstall = document.querySelector('inst');
bannerInstall.addEventListener('click', async () => {
    if (deferredPromt) {
        deferredPromt.prompt();
        const response = await deferredPromt.userChoice;
        if (response.outcome === 'dismissed'){
            console.error('elusario cancelo la instalacion');
        }
    }
})




  });
