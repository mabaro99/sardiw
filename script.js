window.addEventListener('DOMContentLoaded', () => {
    let fecha = document.querySelector('time');
    let hoy = new Date(Date.now());
    fecha.setAttribute("datetime",`${hoy.getDate()}/${(hoy.getMonth()+1).toString().padStart(2,'0')}/${hoy.getFullYear()}`);

    const event = new Date(Date.now());
    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    fecha.innerText=event.toLocaleDateString('es-es', options);
});
