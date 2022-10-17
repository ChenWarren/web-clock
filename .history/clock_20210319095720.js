// setInterval(setClock, 1000)

function setClock()
{
    let date = new Date()
    let hourRetio = date.getHours()/12
    let minute = date.getMinutes()/60
    let second = date.getSeconds()/60


    document.getElementsByClassName('hour')[0].style.setProperty('--rotation', hour*360)

    console.log(hour)
}  