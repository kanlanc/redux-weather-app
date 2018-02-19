import axios from "axios"


const api_key="4cba8b4ac30acee92104c447316a4939";
const ROOT_URL=` http://api.openweathermap.org/data/2.5/forecast?appid=${api_key}`;

export const FETCH_WEATHER="FETCH_WEATHER";

export default function fetchWeather(city) {
    let url=`${ROOT_URL}&q=${city}`
    let request=axios.get(url);
    return {
        type:FETCH_WEATHER,
        payload:request
    };
}