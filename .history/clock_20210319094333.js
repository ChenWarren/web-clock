setInterval(setClock, 1000)

function setClock()
{
    let date = new Date()
    let hour = date.getHours()/12
    let minute = date.getMinutes()/60
    let second = date.getSeconds()

    // document.getElementsByClassName('hour')[0].

    console.log(hour)
}  