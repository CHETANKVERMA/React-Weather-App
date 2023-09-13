import React from 'react'
import '../weathApp/weatherapp.css'

import clearicon from '../Assets/clear.png';
import cloudicon from '../Assets/cloud.png'
import drizzleicon from '../Assets/drizzle.png'
import humididtyicon from '../Assets/humidity.png';
import rainicon from '../Assets/rain.png'
import searchicon from '../Assets/search.png'
import snowicon from '../Assets/snow.png';
import windicon from '../Assets/wind.png';

export default() => {

  let ApiKey="eeb020f603695d56c5e4fc3d5ef85829";
 const searchHere = async ()=>{
  const element=document.getElementsByClassName("cityInput");
  if(element[0].value===""){
    return 0;
  }
  let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${ApiKey}`
  let response= await fetch(url);
  let data= await response.json();

  const humidity =document.getElementsByClassName("humidity percentage")
  const windSpeed =document.getElementsByClassName("wind-speed")
  const temperature =document.getElementsByClassName("weathertemp")
  const location =document.getElementsByClassName("weatherlocation")

  humidity[0].innerHTML=data.main.humidity +"%" ;
  windSpeed[0].innerHTML=data.wind.speed +"Km/h";
  temperature[0].innerHTML=data.main.temp +"°C";
  location[0].innerHTML=data.name;

 }

  return (
   
    <div className='mainContainer'>
  
<div className='container'>

        <div className='topBar'>
            <input type='text' className='cityInput' placeholder='Give City Name Here' ></input>
            <div className='searchIcon' onclick={ ()=> {searchHere()}} >
             
                <img src={searchicon} alt="searchIcon"/>
            </div>
            </div>
            <div className='weatherimage'>
                <img src={cloudicon} alt="cloudIcon"/>
            </div>

            <div className='weathertemp'>24°C</div>
            <div className='weatherlocation'>london</div>

            <div className='datacontainer'>
              <div className='element'>
              <img src={humididtyicon} alt="" className='icon'/>
              <div className='data'>
                <div className='humidity percentage'>64%</div>
                <div className='text'>Humidity</div>
              </div>
              </div>

             
              <div className='element'>
              <img src={windicon} alt="" className='icon'/>
              <div className='data'>
                <div className='wind-speed'>18Km/h</div>
                <div className='text'>Wind Speed</div>
                </div>
              </div>

              


            </div>

   


</div>
</div>

  )
}

