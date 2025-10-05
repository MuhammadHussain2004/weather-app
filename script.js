const input= document.querySelector("input");
const btn=document.querySelector("button");
const error=document.querySelector(".error");
const weather=document.querySelector(".weather");
const weatherIcon= document.querySelector(".weather-icon");
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey="5128b026279c18211b0b46df6beb5367";


    const weatherInfo= async (city)=>{
               const response= await fetch(apiUrl+ city +  `&appid=${apiKey}`);
                if(response.status===404){
                   error.style.display="block";
                   weather.style.display="none";

                }
                else{
               var data= await response.json();
               console.log(data);

               weather.style.display="block";
               error.style.display="none";
 
             if(data.weather[0].main=="Clouds"){
                     weatherIcon.src="images/clouds.png";
             }
              else if( data.weather[0].main=="Clear"){
            weatherIcon.src="images/clear.png";
        }
        else if(data.weather[0].main =="Rain"){
            weatherIcon.src="images/rain.png";
        }

        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="images/drizzle.png";
        }
        else if(data.weather[0].main =="Mist"){
            weatherIcon.src="images/mist.png";
        }





    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML=data.name; 
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
}
               
    }  

btn.addEventListener("click", ()=>{
weatherInfo(input.value);
});