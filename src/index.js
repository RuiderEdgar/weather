import './sass/main.scss';
import './assets/snow.gif';
import './assets/github.png';
import './assets/mas.png';
const getHour = (date) => {
    //Formato 24h
    const hour = date.getHours();

    const minutes = date.getMinutes();
    if (minutes < 10) {
        return hour + ":" + "0" + minutes;
    } else {
        return hour + ":" + minutes;
    }
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



const city = document.querySelector('#city');
const temperatura = document.querySelector('#temperatura');
const descripcion = document.querySelector('#descripcion');
const iconWeather = document.querySelector('#iconWeather');
const clock = document.querySelector('#clock');
const day = document.querySelector('#day');
const month = document.querySelector('#month');

const succes = ubicacion => {
    var cordenadas = ubicacion.coords;
    console.log('Your current position is:');
    console.log(`Latitude : ${cordenadas.latitude}`);
    console.log(`Longitude: ${cordenadas.longitude}`);
    // Ajustando la hora y fecha actual del usario
    const today = new Date;


    clock.innerHTML = getHour(today);
    day.innerHTML = getDay(today) + " " + getNumberDay(today);
    month.innerHTML = getMonth(today) + " " + getYear(today);
    const options = { method: 'GET', headers: { Authorization: 'Basic Og==' } };

    fetch(`https://api.weatherbit.io/v2.0/current?lat=${cordenadas.latitude}&lon=${cordenadas.longitude}&key=a6b0938f5e5f49e58d566e2b5c563a2f&lang=es&include=minutely`, options)
        .then(response => response.json())
        .then(response => {
            //variables datos
            var cityName = response.data[0].city_name;
            var country = response.data[0].country_code;
            var temperature = response.minutely[0].temp;
            var description = response.data[0].weather.description;
            var icon = response.data[0].weather.icon;
            //Cambios
            city.innerHTML = cityName + ", " + country;
            temperatura.innerHTML = temperature + "°";
            descripcion.innerHTML = description;
            iconWeather.setAttribute('src', `https://www.weatherbit.io/static/img/icons/${icon}.png`);
            //temas
            if (temperature <= 10) {
                document.querySelector("#main").classList.add('themeCold-fondo');
                document.querySelector("#container-add").classList.add('themeCold-section');
                document.querySelector("#container-data").classList.add('themeCold-article');
                document.querySelector("#main-popover").classList.add('themeCold-section');
            } else if (temperature >= 27) {
                document.querySelector("#main").classList.add('themeHot-fondo');
                document.querySelector("#container-add").classList.add('themeHot-section');
                document.querySelector("#container-data").classList.add('themeHot-article');
                document.querySelector("#main-popover").classList.add('themeHot-section');
            } else {
                document.querySelector("#main").classList.add('themeGood-fondo');
                document.querySelector("#container-add").classList.add('themeGood-section');
                document.querySelector("#container-data").classList.add('themeGood-article');
                document.querySelector("#main-popover").classList.add('themeGood-section');
            }
        })
        .catch(err => console.error(err));
}

const error = err => {
    console.warn(`ERROR($ { err.code }): $ { err.message }`);
}

const options = {
    enableHighAccuracy: true, // Alta precisión
    maximumAge: 0, // No queremos caché
    timeout: Infinity // Esperar solo 5 segundos
};
// Solicitar
navigator.geolocation.getCurrentPosition(succes, error, options);

//boton cambiar ciudad
const btnAdd = document.querySelector("#btn-add-city");
btnAdd.addEventListener('click', () => {
    document.querySelector("#container-popover").style.display = "flex";
})