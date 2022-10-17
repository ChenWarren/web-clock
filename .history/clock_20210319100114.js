// setInterval(setClock, 1000)

function setClock()
{
    let date = new Date()
    let hourRetio = date.getHours()/12
    let minuteRetio = date.getMinutes()/60
    let secondRetio = date.getSeconds()/60

    let hour = document.getElementsByClassName('hour')[0]
    let minute = document.getElementsByClassName('minute')[0]
    let second = document.getElementsByClassName('second')[0]

    hour.style.setProperty('--rotation', hour*360 + 'deg')

    console.log(hour)
}  

setClock()