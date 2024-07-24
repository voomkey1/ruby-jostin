// Calcula la diferencia en milisegundos entre la fecha actual y el 6 de agosto de 2024
const countdownDate = new Date('2024-08-06T00:00:00Z').getTime();

// Actualiza el contador cada segundo
const interval = setInterval(() => {
    const now = new Date().getTime();
    const difference = countdownDate - now;

    // Calcula días, horas, minutos y segundos restantes
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Actualiza el DOM con los valores calculados
    document.getElementById('days').innerText = formatTime(days);
    document.getElementById('hours').innerText = formatTime(hours);
    document.getElementById('minutes').innerText = formatTime(minutes);
    document.getElementById('seconds').innerText = formatTime(seconds);

    // Si el contador llega a cero, detiene la cuenta regresiva
    if (difference < 0) {
        clearInterval(interval);
        document.querySelector('.countdown').innerHTML = '<h2>¡Tiempo cumplido!</h2>';
    }
}, 1000);

// Función para asegurar que los números siempre tengan dos dígitos
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
