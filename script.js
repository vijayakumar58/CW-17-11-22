let weather=fetch("https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=87fe926676d0f2ab9b9cda9b1587fb87")
//console.log(weather);
weather.then((data)=>data.json()).then((res)=>{console.log(res)});

async function foo(){
   const weatherApi=await fetch("https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=87fe926676d0f2ab9b9cda9b1587fb87")
   // console.log(weatherApi);
   const res=await weatherApi.json()
   console.log(res);
}
foo();