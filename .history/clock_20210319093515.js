setInterval(setClock, 1000)

function setClock()
{
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()


    
    console.log(minute)
}  