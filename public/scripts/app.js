const cityForm = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');


const upadteUi =  (data) =>{
    
    const cityInfo = data.cityInfo;
    const weatherInfo = data.weatherInfo;

    details.innerHTML = `
                    <h5 class="my-3">${cityInfo.EnglishName}</h5>
                    <div class="my-3">${weatherInfo.WeatherText}</div>
                    <div class="display-4 my-4">
                        <span>${weatherInfo.Temperature.Metric.Value}</span>
                        <span>&deg;C</span>
                    </div>`;

    
    
    const iconSrc =  `img/icons/${weatherInfo.WeatherIcon}.svg`;
    icon.setAttribute('src',iconSrc);

    

    let imgSrc=null;
    if(weatherInfo.IsDayTime){
        imgSrc='img/day.svg';
        console.log("image is here");
    }
    else{
        imgSrc='img/night.svg';
    }

    time.setAttribute('src',imgSrc);

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

};


const updateCity = async(id) => {

    const cityInfo = await getCity(id);
    const weatherInfo = await getWeather(cityInfo.Key);

    return {
        cityInfo : cityInfo,
        weatherInfo  : weatherInfo
    }

}

cityForm.addEventListener('submit', (e) =>{
    //to prevent the default action on submit
    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    //function for updating the city informations
    updateCity(city)
        .then(data => upadteUi(data))
        .catch(err => console.log(err));

    
    localStorage.setItem('city',city);


});

if(localStorage.getItem('city')){
    updateCity(localStorage.getItem('city'))
    .then(data => upadteUi(data))
    .catch(err => console.log(err));
}