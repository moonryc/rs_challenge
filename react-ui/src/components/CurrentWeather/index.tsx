import React, { useState } from "react";

interface CurrentWeatherProps {
  tz_id:string
  region:string
  localtime:string
  uv:number
  temp_c:number
  temp_f:number
  feelslike_c:number
  feelslike_f:number
  last_updated:string
  humidity:number
  cloud:number
  vis_km:number
  vis_miles:number
  pressure_in:number
  pressure_mb:number
}


const CurrentWeather = ({temp_f, temp_c, cloud, feelslike_c, feelslike_f, humidity, last_updated, localtime, region, uv, tz_id, vis_km, vis_miles, pressure_mb, pressure_in}:CurrentWeatherProps) => {

  const [isMetric, setIsMetric] = useState(false);

  const timeZome = tz_id
  const temperature = isMetric ? temp_c : temp_f
  const feelsLike = isMetric ? feelslike_c : feelslike_f
  const visibility = isMetric ? vis_km : vis_miles
  const pressure = isMetric ? pressure_mb : pressure_in



  return (
    <div>

    </div>
  );
};

export default CurrentWeather;
