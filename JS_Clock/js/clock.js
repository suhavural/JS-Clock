// promp ile isim bilgisi aldik

let userName = prompt("Adınız Nedir ?")
let myName = document.querySelector("#myName")
myName.innerHTML = `${userName.length > 0 ? userName:"Geçersiz Kullanıcı"}`

function time () {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let dayNumber = now.getDay();

    let day=[`Pazar`,`Pazartesi`, `Sali`, `Carsamba`, `Persembe`, `Cuma`, `Cumartesi`]
    let dayName = day[dayNumber]
    let clock = document.querySelector("#myClock")

    clock.innerHTML = `${hour},${minute},${second},${dayName}`
}
setInterval(time, 500);