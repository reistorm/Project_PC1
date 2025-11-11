
const hoursBlock = document.querySelector('.timer__hours');
const minutesBlock = document.querySelector('.timer__minutes');
const secondsBlock = document.querySelector('.timer__seconds');
const daysBlock = document.querySelector('.timer__days');

let interval;


const numWordSeconds = (value, words) => {
    value = Math.abs(value) % 100;
    const lastNum = value % 10;

    if (value > 10 & value < 20) return words[2]
    if (lastNum > 1 && lastNum < 5) return words[1]
    if (lastNum === 1) return words[0]

    return words[2];
}

const numWordMinutes = (value, words) => {
    value = Math.abs(value) % 100;
    const lastNum = value % 10;

    if (value > 10 & value < 20) return words[2]
    if (lastNum > 1 && lastNum < 5) return words[1]
    if (lastNum === 1) return words[0]

    return words[2];
}

const numWordHours = (value, words) => {
    value = Math.abs(value) % 100;
    const lastNum = value % 10;

    if (value > 10 & value < 20) return words[2]
    if (lastNum > 1 && lastNum < 5) return words[1]
    if (lastNum === 1) return words[0]

    return words[2];
}

const numWordDays = (value, words) => {
    value = Math.abs(value) % 100;
    const lastNum = value % 10;

    if (value > 10 & value < 20) return words[2]
    if (lastNum > 1 && lastNum < 5) return words[1]
    if (lastNum === 1) return words[0]

    return words[2];
}

const updateTimer = () => {
    const date = new Date();
    const dateDeadline = new Date('11 november 2025').getTime();
    const timeRemaining = (dateDeadline - date) / 1000;

    const days = Math.floor((timeRemaining / 3600) / 24);
    const hours = Math.floor((timeRemaining / 3600) % 24);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const seconds = Math.floor(timeRemaining % 60);


    const fDays = hours < 10 ? '0' + days : days;
    const fHours = hours < 10 ? '0' + hours : hours;
    const fMinutes = minutes < 10 ? '0' + minutes : minutes;
    const fSeconds = seconds < 10 ? '0' + seconds : seconds;


    daysBlock.textContent = fDays;
    hoursBlock.textContent = fHours;
    minutesBlock.textContent = fMinutes;
    secondsBlock.textContent = fSeconds;

    secondsBlock.nextElementSibling.textContent = numWordSeconds(seconds, ['секунда', 'секунды', 'секунд']);
    minutesBlock.nextElementSibling.textContent = numWordMinutes(minutes, ['минута', 'минуты', 'минут']);
    hoursBlock.nextElementSibling.textContent = numWordHours(hours, ['час', 'часа', 'часов']);
    daysBlock.nextElementSibling.textContent = numWordDays(days, ['день', 'дня', 'дней'])

    if (timeRemaining <= 0) {
        clearInterval(interval);
        daysBlock.textContent = '00';
        daysBlock.style.color = 'red';
        daysBlock.nextElementSibling.style.color = 'red';
        hoursBlock.textContent = '00';
        hoursBlock.style.color = 'red';
        hoursBlock.nextElementSibling.style.color = 'red';
        minutesBlock.textContent = '00';
        minutesBlock.style.color = 'red';
        minutesBlock.nextElementSibling.style.color = 'red';
        secondsBlock.textContent = '00';
        secondsBlock.style.color = 'red';
        secondsBlock.nextElementSibling.style.color = 'red';
    }

}

updateTimer();

interval = setInterval(updateTimer, 500);


