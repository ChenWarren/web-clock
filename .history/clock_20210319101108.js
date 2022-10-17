setInterval(setClock, 1000)

function setClock()
{
    let date = new Date()
    let hourRetio = date.getHours()/12
    let minuteRetio = date.getMinutes()/60
    let secondRetio = date.getSeconds()/60

    let hour = document.getElementsByClassName('hour')[0]
    let minute = document.getElementsByClassName('minute')[0]
    let second = document.getElementsByClassName('second')[0]

    let hourDeg = hourRetio * 360 + 'deg'
    let minuteDeg = minuteRetio * 360 + 'deg'
    let secondDeg = secondRetio * 60 + 'deg'

    hour.style.setProperty('--rotation', hourDeg)
    minute.style.setProperty('--rotation', minuteDeg)
    second.style.setProperty('--rotation', secondDeg)

    
    console.log(secondDeg)
}  

setClock()