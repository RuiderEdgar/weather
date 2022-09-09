import './sass/main.scss';
import './assets/snow.gif';
import './assets/github.png';
import './assets/mas.png';

const today = new Date;
const getHour = (date) => {

    const hour = date.getHours();
    // const hour = toString(today.getHours()); 
    // const minutes = toString(today.getMinutes()); 
    const minutes = date.getMinutes();
    const clock = hour + ":" + minutes;
    return clock
}

const getNumberDay = (date) => date.getDate();
const getYear = (date) => date.getFullYear();
const getMonth = (date) => {
    var month = date.getMonth()
    switch (month) {
        case 0:
            return 'Enero';
            break;
        case 1:
            return 'Febrero';
            break;
        case 2:
            return 'Marzo';
            break;
        case 3:
            return 'Abril';
            break;
        case 4:
            return 'Mayo';
            break;
        case 5:
            return 'Junio';
            break;
        case 6:
            return 'Julio';
            break;
        case 7:
            return 'Agosto';
            break;
        case 8:
            return 'Septiembre';
            break;
        case 9:
            return 'Octubre';
            break;
        case 10:
            return 'Noviembre';
            break;
        case 11:
            return 'Diciembre';
            break;
        default:
            return 'error get Month'
            break;
    }
};
const getDay = (date) => {
    const dayOfTheWeek = date.getDay()
    switch (dayOfTheWeek) {
        case 0:
            return 'Domingo';
            break;
        case 1:
            return 'Lunes';
            break;
        case 2:
            return 'Martes';
            break;
        case 3:
            return 'Miercoles';
            break;
        case 4:
            return 'Jueves';
            break;
        case 5:
            return 'Viernes';
            break;
        case 6:
            return 'Sabado';
            break;
        default:
            return 'error get day of the week'
            break;
    }
};

// Ajustando la hora y fecha actual del usario
const clock = document.querySelector('#clock');
const day = document.querySelector('#day');
const month = document.querySelector('#month');
clock.innerHTML = getHour(today);
day.innerHTML = getDay(today) + " " + getNumberDay(today);
month.innerHTML = getMonth(today) + " " + getYear(today);