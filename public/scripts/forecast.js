const key='8CMtTMi5AG58rl5FPLeJOhYNSZGrCmQo ';

//retrieving weather info
const getWeather = async (id) =>{

    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};



//for getting the city.key value for weather info
const getCity = async (city) => {

    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query =`?apikey=${key}&q=${city}`;

    const response = await fetch(base+query);
    const data = await response.json();

    return data[0];
};


