const cityname=document.getElementById("cityname");
const submitBtn=document.getElementById("submitBtn");
const city_name=document.getElementById("city_name");
const temp_real_val=document.getElementById("temp_real_val");
const temp_status=document.getElementById("temp_status");
//using query seletcor we can use middle layer using data hide
const data_hide=document.querySelector(`.middle_layer`);
const getinfo=async(event)=>{
    event.preventDefault();
    //convert cityname ko aik value day day ga 
    let cityval=cityname.value;
  if(cityval===""){
    city_name.innerText=`Please enter city name first :`;
    data_hide.classList.add("data_hide");
  }else{
    try {
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=380b4b004ed24f9dbcebf0fd00fa8c10`
        const response=await fetch(url);
        //for converting json file into obj
        const data=await response.json();
        const arrdata=[data];
        city_name.innerText=`${arrdata[0].name},${arrdata[0].sys.country}`;
        temp_real_val.innerText=arrdata[0].main.temp+"°C";
        // for show cloudy haze etc
        temp_status.innerText=arrdata[0].weather[0].main;
        //condition to shoe sunny image or haze image or etc
        // const tempmode=arrdata[0].weather[0].main;
        // if(tempmode=="Clear"){
        //     temp_status.innerText=`<i class="fa-solid fa-cloud"></i>`;
        // }else if(tempmode=="Clouds"){
        //     temp_status.innerText=`<i class="fa-solid fa-cloud"></i>`;
        // }else if(tempmode=="Rain"){
        //     temp_status.innerText=`<i class="fa fa-cloud"></i>`;
        // }else {
        //     temp_status.innerText= `<i class="fa fa-cloud"></i>`;
        // }
        data_hide.classList.remove("data_hide");
        //  console.log(data);
    } catch (error) {
        cityname.innerText=`Please enter city name correct/properly!! :`;
        data_hide.classList.add("data_hide");
    }
   
}

}
submitBtn.addEventListener("click",getinfo);
//for current day............................................................................................
getcurrentday=()=>{
  const day=document.getElementById("day");
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let days = weekday[d.getDay()];
day.innerText=days;
};
getcurrentday();

// for current date month year..................................................................................
getdateformat=()=>{
// {{!-- for dates --}}
const today_date=document.getElementById("today_date");
const date = new Date();
let current_date=date.getDate();

// {{!-- for monthss --}}
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const m = new Date();
let month = months[m.getMonth()];

// {{!-- for year --}}
const y = new Date();
let year=y.getFullYear();
today_date.innerText=current_date+"  "+month+"  "+year;
};
getdateformat();