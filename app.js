const day = document.querySelector("#day"),
  hour = document.querySelector("#hour"),
  minute = document.querySelector("#minut"),
  second = document.querySelector("#second"),
  title = document.querySelector('#title')

let currentYear = 2023

const updateCountdown = () => {
    const countdownDate = new Date(`July 27 ${currentYear}`);
    const currentDate = new Date();
    
  
    const timeRemaining = countdownDate - currentDate;
    

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    hour.textContent = getZero(hours)
    day.textContent = getZero(days)
    minute.textContent = getZero(minutes)
    second.textContent = getZero(seconds)
    title.textContent = "It's my birthday after these days "
    if(timeRemaining <= 0){
        clearInterval(updateTime)
        hour.textContent = '00'
        day.textContent = '00'
        minute.textContent = '00'
        second.textContent = '00'
        title.textContent = 'Happy Birthday To Me!'
        currentYear++

        setTimeout(() => {
            updateTime = setInterval(updateCountdown,1000)
        },86400)
    }

}
let updateTime = setInterval(updateCountdown,1000)

const  getZero = (time) => {
    if(time<10){
        return `0${time}`
    }else{
        return time
    }
}
