// setInterval(setClock, 1000)

function setClock()
{
    let date = new Date()
    let hourRetio = date.getHours()/12
    let minuteRetio = date.getMinutes()/60
    let secondRetio = date.getSeconds()/60

    let hour = document.getElementsByClassName('hour')[0]
    let minute =

    .style.setProperty('--rotation', hour*360)

    console.log(hour)
}  