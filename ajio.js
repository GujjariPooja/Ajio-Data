const changeMode = () => {
    let mybody =document.body;
    mybody.classList.toggle('mydark');
}

const onloadPage = () => {
    document.getElementById('coupon').style.visibility = 'visible';
    const coupon = document.getElementById('coupon');
    const component = document.querySelector('.component');
    const statement = document.querySelector('.statement');
    const delivery = document.querySelector('.delivery');
    const hitstate = document.querySelector('.hitstate');
    const hit = document.querySelector('.hit');
    const wal = document.querySelector('.wal');
    const brandss = document.querySelector('.brandss');
    const fit = document.querySelector('.fit');
    const pit = document.querySelector('.pit');
    const offer = document.querySelector('.offer');
    const arrival = document.querySelector('.arrival');
    const last = document.querySelector('.last');
    const foot = document.querySelector('.foot');
    const cares = document.querySelector('.cares');
    coupon.style.opacity = '1';
    component.style.opacity = '0.5';
    statement.style.opacity = '0.5';
    delivery.style.opacity = '0.5';
    hitstate.style.opacity = '0.5';
    hit.style.opacity = '0.5';
    wal.style.opacity = '0.5';
    brandss.style.opacity = '0.5';
    fit.style.opacity = '0.5';
    pit.style.opacity = '0.5';
    offer.style.opacity = '0.5';
    arrival.style.opacity = '0.5';
    last.style.opacity = '0.5';
    foot.style.opacity = '0.5';
    cares.style.opacity = '0.5';



    //setTimeout(closeCoupon, 3000);
    
}

const closeCoupon = () => {
    document.getElementById('coupon').style.visibility = 'hidden';
    const coupon = document.getElementById('coupon');
    const component = document.querySelector('.component');
    const statement = document.querySelector('.statement');
    const delivery = document.querySelector('.delivery');
    const hitstate = document.querySelector('.hitstate');
    const hit = document.querySelector('.hit');
    const wal = document.querySelector('.wal');
    const brandss = document.querySelector('.brandss');
    const fit = document.querySelector('.fit');
    const pit = document.querySelector('.pit');
    const offer = document.querySelector('.offer');
    const arrival = document.querySelector('.arrival');
    const last = document.querySelector('.last');
    const foot = document.querySelector('.foot');
    const cares = document.querySelector('.cares');
    coupon.style.opacity = '1';
    component.style.opacity = '1';
    statement.style.opacity = '1';
    delivery.style.opacity = '1';
    hitstate.style.opacity = '1';
    hit.style.opacity = '1';
    wal.style.opacity = '1';
    brandss.style.opacity = '1';
    fit.style.opacity = '1';
    pit.style.opacity = '1';
    offer.style.opacity = '1';
    arrival.style.opacity = '1';
    last.style.opacity = '1';
    foot.style.opacity = '1';
    cares.style.opacity = '1';
    
    
}

window.onload = onloadPage();


let a = document.getElementById('out');
let b = document.getElementById('weather');

function geolocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
        a.classList.toggle('weathervisible');
        b.classList.toggle('weathervisible');
    } else {
        a.innerText = "Geo not supported";
    }
}

function showPosition(data) {
    console.log(data)


    let lat = data.coords.latitude;
    let lon = data.coords.longitude;
    a.innerText = `Latitude is ${lat} and longitude is ${lon}`
    const url= `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    fetch(url,{method:'GET'})
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        let cityName = data.city.name;
        let temp=data.list[0].temp.day + " °C"
        b.innerText = `Weather of ${cityName} is ${temp}`
    })

}

    